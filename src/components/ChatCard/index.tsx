import { Pressable, Text, View } from 'react-native'
import FotoPerfil from '../FotoPerfil'
import theme from "../../assets/themes/THEMES";
import { DotsThreeOutlineVertical, ChatCircle, ThumbsUp, ThumbsDown, BookmarkSimple } from "phosphor-react-native";
import Badge from '../Badge';
import { useTypedNavigation } from '../../hooks/useNavigate';

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

    const handleNavigationChatPrivado = () => {
            navigation.navigate("ChatPrivado");
        };

    return (
        <Pressable 
        onPress={handleNavigationChatPrivado}
        style={({ pressed }) => [
        pressed && { opacity: 0.8 },
      ]}
    >
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
                    name={chat.name}
                    username={chat.username}
                    image={chat.profileImage}
                    border={theme.colors.gold}
                />
            </View>

            <Text style={{ fontSize: 10, textAlign: 'right' }}>{chat.time}</Text>

            <View style={{ marginTop: 10, gap: 10 }}>
                <Text style={{ fontSize: 16 }}>{chat.content}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                        marginTop: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        </View>
                    </View>
                </View>
            </View>
            </Pressable>
    );
}

export default ChatCard;