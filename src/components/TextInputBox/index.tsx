import React from "react";
import { View } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import CustomImput from '../customInput/CustomInput';
import theme from '../../assets/themes/THEMES';
import { styles } from './styles';

interface TextInputBoxProps {
    style?: any;
}

export default function TextInputBox({ style }: TextInputBoxProps) {
    return (
        <View style={[styles.container, style]}>
            <CustomImput
                placeholder="Escreva sua mensagem"
                placeholderTextColor={theme.colors.gray}
                keyboardType="default"
                errorMessage="Preencha o campo"
            />
            <MagnifyingGlass
                color={theme.colors.lightGray}
                size={24}
                style={styles.icon}
            />
        </View>
    );
}
