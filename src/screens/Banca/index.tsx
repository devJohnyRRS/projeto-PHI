import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../assets/themes/THEMES';
import PerfilHeader from '../../components/PerfilHeader';
import { BookOpen, Newspaper, SlidersHorizontal, SpeakerSimpleHigh, Video } from 'phosphor-react-native';
import { useTypedNavigation } from '../../hooks/useNavigate';
import PostCard from '../../components/PostCard';
import { MediaPost } from '../../types/Posts';
import YouTubeEmbed from '../../components/YotubeEmbed';
import Slider from '@react-native-community/slider';
import { Play, SkipBack, SkipForward } from 'phosphor-react-native';
import { mockPopularesBanca } from '../../Mocks/mockPopularesBanca';
import { styles } from './styles';

export default function Banca() {
    const navigation = useTypedNavigation();

    const handleNavigate = (type: string) => {
        if (type === 'video') navigation.navigate("Videos");
        if (type === 'audio') navigation.navigate("Audios");
        if (type === 'artigo') navigation.navigate("Artigos");
        if (type === 'questao') navigation.navigate("Questoes");
    };

    const renderPostContent = (post: MediaPost) => {
        switch (post.type) {
            case 'video':
                return (
                    <>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <YouTubeEmbed videoId={post.link ?? ''} />
                    </>
                );
            case 'artigo':
                return (
                    <>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <Text numberOfLines={6} style={styles.postDescription}>{post.description}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(post.link ?? '')}>
                            <Text style={styles.linkText}>Ver mais...</Text>
                        </TouchableOpacity>
                    </>
                );
            case 'audio':
                return (
                    <>
                        <Text style={[styles.postTitle, { marginBottom: 10 }]}>{post.title}</Text>
                        <View style={styles.audioContainer}>
                            <Image source={post.image} style={styles.postImage} />
                            <View style={styles.sliderWrapper}>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={50}
                                    minimumTrackTintColor={theme.colors.text}
                                    maximumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.text}
                                />
                                <View style={styles.timeWrapper}>
                                    <Text>00:00</Text>
                                    <Text>03:00</Text>
                                </View>
                            </View>
                            <View style={styles.controls}>
                                <TouchableOpacity><SkipBack weight="fill" size={32} /></TouchableOpacity>
                                <TouchableOpacity><Play weight="fill" size={32} /></TouchableOpacity>
                                <TouchableOpacity><SkipForward weight="fill" size={32} /></TouchableOpacity>
                            </View>
                        </View>
                    </>
                );
            default:
                return <Text>Tipo não suportado</Text>;
        }
    };

    const navItems = [
        { icon: <Video size={60} weight='fill' />, type: 'video', label: 'Vídeos' },
        { icon: <SpeakerSimpleHigh size={60} weight='fill' />, type: 'audio', label: 'Áudios' },
        { icon: <Newspaper size={60} weight='fill' />, type: 'artigo', label: 'Artigos' },
        { icon: <BookOpen size={60} weight='fill' />, type: 'questao', label: 'Questões' },
    ];

    return (
        <ScrollView style={styles.container}>
            <PerfilHeader />

            <View style={styles.contentWrapper}>
                <Text style={styles.heading}>Banca de estudos</Text>

                <View style={styles.navigationRow}>
                    {navItems.map(({ icon, type, label }) => (
                        <TouchableOpacity key={type} onPress={() => handleNavigate(type)} style={styles.navButton}>
                            <View style={styles.navIconBackground}>
                                {React.cloneElement(icon, { color: theme.colors.primary })}
                            </View>
                            <Text style={styles.navLabel}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.popularesWrapper}>
                    <View style={styles.popularesHeader}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                        <Text style={styles.popularesTitle}>Populares</Text>
                    </View>

                    {mockPopularesBanca.map((post) => (
                        <PostCard key={post.id} post={post}>
                            {renderPostContent(post)}
                        </PostCard>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
