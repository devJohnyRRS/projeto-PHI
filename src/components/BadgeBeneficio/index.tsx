import { Text, View } from 'react-native';

export default function BadgeBeneficio({ text }: { text: string }) {
    return (
        <View
            style={{
                backgroundColor: '#FFF9E5',
                padding: 12,
                borderRadius: 8,
                borderColor: '#FFD700',
            }}
        >
            <Text style={{ fontSize: 16, color: '#4a3f0f' }}>{text}</Text>
        </View>
    );
}