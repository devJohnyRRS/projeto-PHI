import { Text, View } from 'react-native'
import FotoPerfil from '../FotoPerfil'
import theme from "../../assets/themes/THEMES";
import { DotsThreeOutlineVertical, ChatCircle, ThumbsUp, ThumbsDown, BookmarkSimple } from "phosphor-react-native";
import Badge from '../Badge';

interface PostCardProps {
    post: {
        name: string;
        username: string;
        profileImage: any;
        badge: string;
        time: string;
        content: string;
        comments: number;
        likes: number;
        dislikes: number;
    };
}

function PostCard({ post }: PostCardProps) {

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
                    name={post.name}
                    username={post.username}
                    image={post.profileImage}
                    border={theme.colors.gold}
                />
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Badge text={post.badge} />
                    <DotsThreeOutlineVertical color={theme.colors.text} size={24} weight="fill" />
                </View>
            </View>

            <Text style={{ fontSize: 10, textAlign: 'right' }}>{post.time}</Text>

            <View style={{ marginTop: 10, gap: 10 }}>
                <Text style={{ fontSize: 16 }}>{post.content}</Text>

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
                        <ChatCircle size={30} weight="fill" color={theme.colors.gray} />
                        <Text style={{ fontSize: 16, color: theme.colors.gray }}>{post.comments}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <ThumbsUp size={30} weight="fill" color={theme.colors.gray} />
                            <Text style={{ fontSize: 16, color: theme.colors.gray }}>{post.likes}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <ThumbsDown size={30} weight="fill" color={theme.colors.gray} />
                            <Text style={{ fontSize: 16, color: theme.colors.gray }}>{post.dislikes}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <BookmarkSimple size={30} weight="fill" color={theme.colors.gray} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PostCard;