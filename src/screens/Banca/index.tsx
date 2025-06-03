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
import Slider from '@react-native-community/slider'; // Certifique-se de ter este componente
import { Play, SkipBack, SkipForward } from 'phosphor-react-native';
import { mockPopularesBanca } from '../../Mocks/mockPopularesBanca';

export default function Banca() {
    const navigation = useTypedNavigation();

    const imagem = require('../../../assets/vinao.jpg');

    const handleNavigate = (type: string) => {
        if (type === 'video') navigation.navigate("Videos");
        if (type === 'audio') navigation.navigate("Audios");
        if (type === 'artigo') navigation.navigate("Artigos");
        if (type === 'questao') navigation.navigate("Questoes");
    };

    const renderPostContent = (post: MediaPost, index: number) => {
        switch (post.type) {
            case 'video':
                return (
                    <>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{post.title}</Text>
                        <YouTubeEmbed videoId={post.link ?? ''} />
                    </>
                );
            case 'artigo':
                return (
                    <>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{post.title}</Text>
                        <Text numberOfLines={6} style={{ fontSize: 14, color: theme.colors.text }}>{post.description}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(post.link ?? '')}>
                            <Text style={{ color: theme.colors.secondary, marginTop: 4 }}>Ver mais...</Text>
                        </TouchableOpacity>
                    </>
                );
            case 'audio':
                return (
                    <>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{post.title}</Text>
                        <View style={{ gap: 10, alignItems: 'center' }}>
                            <Image source={imagem} style={{ width: '100%', height: 200, borderRadius: 5 }} />
                            {/* Apenas mock, substitua com player real se necessário */}
                            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                                <Slider
                                    style={{ width: '100%', height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={50}
                                    minimumTrackTintColor={theme.colors.text}
                                    maximumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.text}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>00:00</Text>
                                    <Text>03:00</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
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

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ marginHorizontal: 24, gap: 10, marginBottom: 50, marginTop: 10 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Banca de estudos</Text>

                {/* Ícones de navegação */}
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {[
                        { icon: <Video size={60} />, type: 'video', label: 'Vídeos' },
                        { icon: <SpeakerSimpleHigh size={60} />, type: 'audio', label: 'Áudios' },
                        { icon: <Newspaper size={60} />, type: 'artigo', label: 'Artigos' },
                        { icon: <BookOpen size={60} />, type: 'questao', label: 'Questões' },
                    ].map(({ icon, type, label }) => (
                        <TouchableOpacity key={type} onPress={() => handleNavigate(type)} style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                {React.cloneElement(icon, { color: theme.colors.primary })}
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16 }}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* POPULARES */}
                <View style={{ gap: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Populares</Text>
                    </View>

                    {mockPopularesBanca.map((post, index) => (
                        <PostCard key={post.id} post={post}>
                            {renderPostContent(post, index)}
                        </PostCard>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
