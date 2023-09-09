import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';

type DiceProps = {
    imageUrl: ImageSourcePropType;
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    );
};

const styles = StyleSheet.create({
    diceImage: {
        width: 150,
        height: 150,
    },
});

export default Dice;
