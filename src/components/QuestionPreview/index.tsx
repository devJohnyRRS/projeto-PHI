import React from 'react';
import { View, Text } from 'react-native';
import QuestionTag from '../QuestionTag';
import styles from './styles';

interface QuestionPreviewProps {
    color: string;
    code: string;
    title: string;
    description: string;
}

export default function QuestionPreview({ color, code, title, description }: QuestionPreviewProps) {
    return (
        <View style={styles.container}>
            <QuestionTag color={color} code={code} />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    );
}
