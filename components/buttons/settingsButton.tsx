import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
    style?: any;
};

const SettingsButton = ({ onPress, style }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
            <Feather name="settings" size={30} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SettingsButton;
