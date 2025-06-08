import { Text, TouchableOpacity, View } from 'react-native';
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
            style={{
                flex: 1,
                backgroundColor: selected ? '#FFD700' : theme.colors.textLight,
                padding: 15,
                borderRadius: 10,
                borderWidth: selected ? 0 : 3,
                borderColor: '#f0f0f0',
                alignItems: 'center',
                width: '30%',
                height: 125,
            }}
        >
            <Text style={{ fontSize: 13, color: selected ? theme.colors.textLight : theme.colors.text, fontWeight: 'bold' }}>
                {title}
            </Text>
            <Text style={{ fontSize: 13, color: selected ? theme.colors.textLight : theme.colors.text, marginTop: 5 }}>
                {price}
            </Text>
            {recommended && (
                <View
                    style={{
                        marginTop: 10,
                        backgroundColor: selected ? '#DAA520' : theme.colors.gold,
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 8, color: selected ? theme.colors.textLight : "DAA520" }}>Recomendado</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
