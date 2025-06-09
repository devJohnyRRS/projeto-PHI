import { Text, View } from 'react-native';
import theme from '../../assets/themes/THEMES';
import { styles } from './styles';

interface BadgeProps {
    text: string;
    style?: object;
}

function Badge({ text, style }: BadgeProps) {
    return (
        <View style={[styles.container, style]}>
            <Text
                style={styles.text}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {text}
            </Text>
        </View>
    );
}

export default Badge;
