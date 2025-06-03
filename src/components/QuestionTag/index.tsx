import { View, Text } from 'react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES';

interface QuestionTagProps {
    color: string;
    code: string;
}
export default function QuestionTag({ color, code }: QuestionTagProps) {
    return (
        <View style={{ backgroundColor: color, padding: 8, borderRadius: 5, marginTop: 10, width: '100%' }}>
            <Text style={{ fontSize: 13, color: theme.colors.text }}>Questão #{code}</Text>
        </View>
    )
}