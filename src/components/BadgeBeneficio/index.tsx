import { Text, View } from 'react-native';
import { styles } from './styles';

export default function BadgeBeneficio({ text }: { text: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
