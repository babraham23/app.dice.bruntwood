import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
    style?: any;
};

const CloseButton = ({ onPress, style }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
            <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default CloseButton;
