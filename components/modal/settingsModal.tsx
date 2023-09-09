import React from 'react';
import { View, Modal, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import CloseButton from '../buttons/closeButton';
import Counter from '../counter';
import StandardButton from '../buttons/standardButton';

const SettingsModal = ({ modalVisible, setModalVisible, setSecondDice, secondDice, secondDiceSides, diceSides, setDiceSides, setSecondDiceSides }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <CloseButton onPress={() => setModalVisible(false)} style={styles.closeButoon} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>Dice 1</Text>
                        <View style={styles.diceWrapper}>
                            <Text style={styles.subHeader}>Sides</Text>
                            <Counter onAddPress={(value: number) => setDiceSides(value)} onMinusPress={(value: number) => setDiceSides(value)} count={diceSides} />
                        </View>
                    </View>
                    {secondDice && (
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Dice 2</Text>
                            <View style={styles.diceWrapper}>
                                <Text style={styles.subHeader}>Sides</Text>
                                <Counter
                                    onAddPress={(value: number) => setSecondDiceSides(value)}
                                    onMinusPress={(value: number) => setSecondDiceSides(value)}
                                    count={secondDiceSides}
                                />
                            </View>
                        </View>
                    )}
                    <Pressable onPress={() => setSecondDice(!secondDice)}>
                        <Text style={styles.addText}>
                            {secondDice ? 'Remove' : 'Add'} second dice {secondDice ? '-' : '+'}
                        </Text>
                    </Pressable>
                    <View style={styles.buttonWrapper} >
                        <StandardButton title="Continue" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.3,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    closeButoon: {
        position: 'absolute',
        top: 15,
        right: 20,
        zIndex: 99,
    },
    wrapper: {
        paddingTop: 20,
    },
    diceWrapper: {
        flexDirection: 'row',
        paddingVertical: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    addText: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignSelf: 'center',
        // marginLeft: 20,
    }
});

export default SettingsModal;
