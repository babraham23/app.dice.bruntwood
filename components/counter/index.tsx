import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Counter = ({ style, onMinusPress, onAddPress, count }: any) => {
    const [maxNumber] = React.useState(6);

    const handleCount = (type: string) => {
        if (type == 'Add') {
            onAddPress(count + 1);
        } else if (type == 'Minus') {
            onMinusPress(count - 1);
        }
    };

    return (
        <View style={[style, styles.container]}>
            {count > 1 ? (
                <TouchableOpacity onPress={() => handleCount('Minus')} activeOpacity={0.8} style={[styles.arrowWrapper, { alignItems: 'flex-end' }]}>
                    <AntDesign name="caretleft" size={26} color={'red'} />
                </TouchableOpacity>
            ) : (
                <View style={styles.dummy} />
            )}

            <View style={[styles.counter]}>
                <Text>{count == 0 ? null : count}</Text>
            </View>

            {count < maxNumber ? (
                <TouchableOpacity onPress={() => handleCount('Add')} activeOpacity={0.8} style={styles.arrowWrapper}>
                    <AntDesign name="caretright" size={26} color={'red'} />
                </TouchableOpacity>
            ) : (
                <View style={styles.dummy} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    counter: {
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
    },
    arrowWrapper: {
        height: 40,
        width: 50,
        justifyContent: 'center',
    },
    dummy: {
        height: 40,
        width: 50,
    },
});

export default Counter;
