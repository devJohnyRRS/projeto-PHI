import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FotoPerfil from '../FotoPerfil';
import theme from "../../assets/themes/THEMES";
import {
    DotsThreeOutlineVertical, ChatCircle, ThumbsUp,
    ThumbsDown, BookmarkSimple, Video, BookOpen,
    Newspaper, SpeakerSimpleHigh
} from "phosphor-react-native";
import Badge from '../Badge';
import QuestionTag from '../QuestionTag';
import { Post } from '../../types/Posts';

interface PostCardProps {
    post: Post;
    children?: React.ReactNode;
}

function PostCard({ post, children }: PostCardProps) {
    const isAssunto = post.type === 'assunto';

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likesCount, setLikesCount] = useState(post.stats.likes);
    const [dislikesCount, setDislikesCount] = useState(post.stats.dislikes);

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
            setLikesCount(likesCount - 1);
        } else {
            setLiked(true);
            setLikesCount(likesCount + 1);
            if (disliked) {
                setDisliked(false);
                setDislikesCount(dislikesCount - 1);
            }
        }
    };

    const toggleDislike = () => {
        if (disliked) {
            setDisliked(false);
            setDislikesCount(dislikesCount - 1);
        } else {
            setDisliked(true);
            setDislikesCount(dislikesCount + 1);
            if (liked) {
                setLiked(false);
                setLikesCount(likesCount - 1);
            }
        }
    };

    const toggleSave = () => {
        setSaved(!saved);
    };

    return (
        <View style={{
            backgroundColor: theme.colors.textLight,
            width: '100%',
            padding: 10,
            borderRadius: 5,
            flexDirection: 'column',
        }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {isAssunto ? (
                    <FotoPerfil
                        name={post.name}
                        username={post.username}
                        image={post.profileImage}
                        border={post.borderColor ? post.borderColor : ""}
                    />
                ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        {post.type === 'video' && <Video weight='fill' color={theme.colors.primary} />}
                        {post.type === 'artigo' && <Newspaper weight='fill' color={theme.colors.primary} />}
                        {post.type === 'audio' && <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} />}
                        {post.type === 'questao' && <BookOpen weight='fill' color={theme.colors.primary} />}
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: theme.colors.text }}>
                            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </Text>
                    </View>
                )}
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    {post.stats.badge.map((badge, index) =>
                        <Badge key={index} text={badge} />
                    )}
                    <DotsThreeOutlineVertical color={theme.colors.text} size={24} weight="fill" />
                </View>
            </View>

            <Text style={{ fontSize: 10, textAlign: 'right', marginTop: 5 }}>{post.stats.time}</Text>

            {'questionTag' in post && post.questionTag && (
                <QuestionTag
                    color={post.questionTag.color}
                    code={post.questionTag.code}
                />
            )}

            <View style={{ marginTop: 5, gap: 10 }}>
                {children}

                {/* FOOTER */}
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <ChatCircle size={30} weight="fill" color={theme.colors.gray} />
                        <Text style={{ fontSize: 16, color: theme.colors.gray }}>{post.stats.comments}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <TouchableOpacity onPress={toggleLike} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <ThumbsUp size={30} weight="fill" color={liked ? theme.colors.primary : theme.colors.gray} />
                            <Text style={{ fontSize: 16, color: theme.colors.gray }}>{likesCount}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleDislike} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <ThumbsDown size={30} weight="fill" color={disliked ? theme.colors.primary : theme.colors.gray} />
                            <Text style={{ fontSize: 16, color: theme.colors.gray }}>{dislikesCount}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleSave}>
                            <BookmarkSimple size={30} weight="fill" color={saved ? theme.colors.primary : theme.colors.gray} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PostCard;
