import { Text, View } from 'react-native';
import FotoPerfil from '../FotoPerfil';
import theme from '../../assets/themes/THEMES';
import { styles } from './styles';

interface ChatCardPrivadoProps {
    chatPriva: {
        name: string;
        username: string;
        profileImage: any;
        time: string;
        content: string;
    };
}

function ChatCardPrivado({ chatPriva }: ChatCardPrivadoProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FotoPerfil
                    name={chatPriva.name}
                    username={chatPriva.username}
                    image={chatPriva.profileImage}
                    border={theme.colors.gold}
                />
            </View>

            <Text style={styles.time}>{chatPriva.time}</Text>

            <View style={styles.contentWrapper}>
                <Text style={styles.content}>{chatPriva.content}</Text>

                <View style={styles.footer}>
                    <View style={styles.emptyRow} />
                </View>
            </View>
        </View>
    );
}

export default ChatCardPrivado;
