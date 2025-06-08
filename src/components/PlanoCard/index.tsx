import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import theme from '../../assets/themes/THEMES';

interface PlanoCardProps {
    title: string;
    price: string;
    recommended: boolean;
    selected: boolean;
    onPress: () => void;
}

export default function PlanoCard({ title, price, recommended, selected, onPress }: PlanoCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.card,
                {
                    backgroundColor: selected ? '#FFD700' : theme.colors.textLight,
                    borderWidth: selected ? 0 : 3,
                }
            ]}
        >
            <Text style={[styles.title, { color: selected ? theme.colors.textLight : theme.colors.text }]}>
                {title}
            </Text>

            <Text style={[styles.price, { color: selected ? theme.colors.textLight : theme.colors.text }]}>
                {price}
            </Text>

            {recommended && (
                <View
                    style={[
                        styles.recommendedBox,
                        { backgroundColor: selected ? '#DAA520' : theme.colors.gold }
                    ]}
                >
                    <Text style={{ fontSize: 8, color: selected ? theme.colors.textLight : "#DAA520" }}>
                        Recomendado
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
