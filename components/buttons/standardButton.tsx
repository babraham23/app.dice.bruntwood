import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
    title?: string;
    onPress?: () => void;
    secondary?: boolean;
}

const StandardButton = ({ title, onPress, secondary }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, { backgroundColor: secondary ? 'white' : 'black', borderColor: 'black' }]}>
            <Text style={[styles.text, { color: secondary ? 'black' : 'white' }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 2,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StandardButton;
