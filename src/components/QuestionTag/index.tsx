import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import theme from '../../assets/themes/THEMES';

interface QuestionTagProps {
    color: string;
    code: string;
}

export default function QuestionTag({ color, code }: QuestionTagProps) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.text}>Questão #{code}</Text>
        </View>
    );
}
