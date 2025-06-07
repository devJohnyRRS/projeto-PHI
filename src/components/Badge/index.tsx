import { Text, View } from 'react-native';
import theme from "../../assets/themes/THEMES";

interface BadgeProps {
    text: string;
    style?: object;
}

function Badge({ text, style }: BadgeProps) {
    return (
        <View
            style={{
                ...style,
                width: 60,
                backgroundColor: theme.colors.lightGray,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
            }}
        >
            <Text
                style={{ fontSize: 10 }}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {text}
            </Text>
        </View>
    );
}

export default Badge;
