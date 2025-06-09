import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FotoPerfil from '../FotoPerfil';
import {
    DotsThreeOutlineVertical, ChatCircle, ThumbsUp,
    ThumbsDown, BookmarkSimple, Video, BookOpen,
    Newspaper, SpeakerSimpleHigh
} from "phosphor-react-native";
import theme from '../../assets/themes/THEMES';
import styles from './styles';
import Badge from '../Badge';
import QuestionTag from '../QuestionTag';
import { Post } from '../../types/Posts';

interface PostCardProps {
    post: Post;
    children?: React.ReactNode;
}

export default function PostCard({ post, children }: PostCardProps) {
    const isAssunto = post.type === 'assunto';

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likesCount, setLikesCount] = useState(post.stats.likes);
    const [dislikesCount, setDislikesCount] = useState(post.stats.dislikes);

    const toggleLike = () => {
        setLiked(prev => {
            if (!prev) setLikesCount(likesCount + 1);
            else setLikesCount(likesCount - 1);

            if (disliked) {
                setDisliked(false);
                setDislikesCount(dislikesCount - 1);
            }

            return !prev;
        });
    };

    const toggleDislike = () => {
        setDisliked(prev => {
            if (!prev) setDislikesCount(dislikesCount + 1);
            else setDislikesCount(dislikesCount - 1);

            if (liked) {
                setLiked(false);
                setLikesCount(likesCount - 1);
            }

            return !prev;
        });
    };

    const toggleSave = () => setSaved(prev => !prev);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                {isAssunto ? (
                    <FotoPerfil
                        name={post.name}
                        username={post.username}
                        image={post.profileImage}
                        border={post.borderColor || ''}
                    />
                ) : (
                    <View style={styles.typeInfo}>
                        {post.type === 'video' && <Video weight='fill' color={theme.colors.primary} />}
                        {post.type === 'artigo' && <Newspaper weight='fill' color={theme.colors.primary} />}
                        {post.type === 'audio' && <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} />}
                        {post.type === 'questao' && <BookOpen weight='fill' color={theme.colors.primary} />}
                        <Text style={styles.typeText}>
                            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </Text>
                    </View>
                )}
                <View style={styles.badgeRow}>
                    {post.stats.badge.map((badge, index) => (
                        <Badge key={index} text={badge} />
                    ))}
                    <DotsThreeOutlineVertical color={theme.colors.text} size={24} weight="fill" />
                </View>
            </View>

            <Text style={styles.time}>{post.stats.time}</Text>

            {'questionTag' in post && post.questionTag && (
                <QuestionTag color={post.questionTag.color} code={post.questionTag.code} />
            )}

            <View style={styles.body}>
                {children}

                <View style={styles.footer}>
                    <View style={styles.iconText}>
                        <ChatCircle size={30} weight="fill" color={theme.colors.gray} />
                        <Text style={styles.footerText}>{post.stats.comments}</Text>
                    </View>

                    <View style={styles.iconGroup}>
                        <TouchableOpacity onPress={toggleLike} style={styles.iconText}>
                            <ThumbsUp size={30} weight="fill" color={liked ? theme.colors.primary : theme.colors.gray} />
                            <Text style={styles.footerText}>{likesCount}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleDislike} style={styles.iconText}>
                            <ThumbsDown size={30} weight="fill" color={disliked ? theme.colors.primary : theme.colors.gray} />
                            <Text style={styles.footerText}>{dislikesCount}</Text>
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
