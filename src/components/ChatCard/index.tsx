import { Pressable, Text, View } from 'react-native';
import FotoPerfil from '../FotoPerfil';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { styles } from './styles';

interface ChatCardProps {
    chat: {
        name: string;
        username: string;
        profileImage: any;
        time: string;
        content: string;
    };
}

function ChatCard({ chat }: ChatCardProps) {
    const navigation = useTypedNavigation();

    const handleNavigationChatPrivadoOne = () => {
        navigation.navigate('ChatPrivado');
    };

    return (
        <Pressable
            onPress={handleNavigationChatPrivadoOne}
            style={({ pressed }) => [pressed && { opacity: 0.8 }]}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <FotoPerfil
                        name={chat.name}
                        username={chat.username}
                        image={chat.profileImage}
                        border={theme.colors.gold}
                    />
                </View>

                <Text style={styles.time}>{chat.time}</Text>

                <View style={styles.contentWrapper}>
                    <Text style={styles.content}>{chat.content}</Text>

                    <View style={styles.footer}>
                        <View style={styles.emptyRow} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

export default ChatCard;
