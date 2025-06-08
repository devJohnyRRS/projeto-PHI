import { Pressable, Text, View } from 'react-native'
import FotoPerfil from '../FotoPerfil'
import theme from "../../assets/themes/THEMES";
import { DotsThreeOutlineVertical, ChatCircle, ThumbsUp, ThumbsDown, BookmarkSimple } from "phosphor-react-native";
import Badge from '../Badge';
import { useTypedNavigation } from '../../hooks/useNavigate';

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
        <View
            style={{
                backgroundColor: theme.colors.textLight,
                width: '100%',
                marginBottom: 20,
                padding: 10,
                borderRadius: 5,
                flexDirection: 'column',
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <FotoPerfil
                    name={chatPriva.name}
                    username={chatPriva.username}
                    image={chatPriva.profileImage}
                    border={theme.colors.gold}
                />
            </View>

            <Text style={{ fontSize: 10, textAlign: 'right' }}>{chatPriva.time}</Text>

            <View style={{ marginTop: 10, gap: 10 }}>
                <Text style={{ fontSize: 16 }}>{chatPriva.content}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                        marginTop: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 0 }}>
                        </View>
                    </View>
                </View>
            </View>
    );
}

export default ChatCardPrivado;