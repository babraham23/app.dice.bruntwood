import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import { Images } from './style/images';
import Dice from './components/dice/dice';
import SettingsModal from './components/modal/settingsModal';
import SettingsButton from './components/buttons/settingsButton';
import StandardButton from './components/buttons/standardButton';

type DiceRoll = {
    imageUrl: ImageSourcePropType;
    value: number;
};

let startingDice = [{ imageUrl: 19, value: 1 }];

function App(): JSX.Element {
    const [diceRolls, setDiceRolls] = useState<DiceRoll[]>(startingDice);
    const [secondDiceRolls, setSecondDiceRolls] = useState<DiceRoll[]>(startingDice);
    const [secondDice, setSecondDice] = useState(false);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [diceSides, setDiceSides] = useState(6);
    const [secondDiceSides, setSecondDiceSides] = useState(6);

    const rollDice = () => {
        const newRolls: DiceRoll[] = [];
        const newRollsTwo: DiceRoll[] = [];
        let newTotalValue = 0;
        let newTotalValueTwo = 0;
        const randomNumber = Math.floor(Math.random() * diceSides) + 1;
        const randomNumberTwo = Math.floor(Math.random() * secondDiceSides) + 1;
        newTotalValue += randomNumber;
        newTotalValueTwo += randomNumberTwo;

        switch (randomNumber) {
            case 1:
                newRolls.push({ imageUrl: Images.DiceOne, value: 1 });
                break;
            case 2:
                newRolls.push({ imageUrl: Images.DiceTwo, value: 2 });
                break;
            case 3:
                newRolls.push({ imageUrl: Images.DiceThree, value: 3 });
                break;
            case 4:
                newRolls.push({ imageUrl: Images.DiceFour, value: 4 });
                break;
            case 5:
                newRolls.push({ imageUrl: Images.DiceFive, value: 5 });
                break;
            case 6:
                newRolls.push({ imageUrl: Images.DiceSix, value: 6 });
                break;
            default:
                newRolls.push({ imageUrl: Images.DiceOne, value: 1 });
                break;
        }

        switch (randomNumberTwo) {
            case 1:
                newRollsTwo.push({ imageUrl: Images.DiceOne, value: 1 });
                break;
            case 2:
                newRollsTwo.push({ imageUrl: Images.DiceTwo, value: 2 });
                break;
            case 3:
                newRollsTwo.push({ imageUrl: Images.DiceThree, value: 3 });
                break;
            case 4:
                newRollsTwo.push({ imageUrl: Images.DiceFour, value: 4 });
                break;
            case 5:
                newRollsTwo.push({ imageUrl: Images.DiceFive, value: 5 });
                break;
            case 6:
                newRollsTwo.push({ imageUrl: Images.DiceSix, value: 6 });
                break;
            default:
                newRollsTwo.push({ imageUrl: Images.DiceOne, value: 1 });
                break;
        }
        checkForDoubleSix(newTotalValue, newTotalValueTwo);
        setDiceRolls(newRolls);
        setSecondDiceRolls(newRollsTwo);
        setTotalValue(totalValue + newTotalValue + (secondDice ? newTotalValueTwo : 0));
    };

    const checkForDoubleSix = (diceOne: number, diceTwo: number) => {
        if (diceOne === 6 && diceTwo === 6 && secondDice) alert('Double Sixes!');
    };

    const resetDice = () => {
        setDiceRolls(startingDice);
        setSecondDiceRolls(startingDice);
        setTotalValue(0);
    };

    return (
        <>
            <View style={styles.container}>
                <SettingsButton onPress={() => setModalVisible(!modalVisible)} style={styles.settingsbutton} />
                <View style={styles.diceWrapper}>
                    {diceRolls.map((diceRoll, index) => (
                        <Dice key={index} imageUrl={diceRoll.imageUrl} />
                    ))}
                    {secondDice && secondDiceRolls.map((diceRoll, index) => <Dice key={index} imageUrl={diceRoll.imageUrl} />)}
                </View>
                <Text style={styles.totalValue}>Total Value: {totalValue}</Text>
                <View style={styles.buttonWrapper}>
                    <StandardButton title="Roll Dice 🎲" onPress={() => rollDice()} />
                    <StandardButton title="Reset Total" onPress={() => resetDice()} secondary />
                </View>
            </View>
            <SettingsModal
                setDiceSides={setDiceSides}
                setSecondDiceSides={setSecondDiceSides}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setSecondDice={setSecondDice}
                secondDice={secondDice}
                secondDiceSides={secondDiceSides}
                diceSides={diceSides}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2',
    },
    settingsbutton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    diceWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

export default App;
