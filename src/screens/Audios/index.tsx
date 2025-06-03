import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import PostCard from '../../components/PostCard';
import { MediaPost } from '../../types/Posts';
import PerfilHeader from '../../components/PerfilHeader';
import { CaretLeft, Pause, Play, SkipBack, SkipForward, SlidersHorizontal, SpeakerSimpleHigh } from 'phosphor-react-native';
import Slider from '@react-native-community/slider';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';

const imagem = require('../../../assets/vinao.jpg');
const audio1 = require('../../../assets/audios/audio-1.mp3');
const audio2 = require('../../../assets/audios/audio-2.mp3');

const mockPosts: (MediaPost & { file: any })[] = [
    {
        id: 1,
        type: 'audio',
        title: 'Jockey di gue?',
        link: '',
        file: audio1,
        stats: {
            badge: ['Jockey', 'de', 'Galinha'],
            time: '30min atrás',
            content: 'Aprenda sobre bancos de dados relacionais e não relacionais.',
            comments: 589,
            likes: 5000,
            dislikes: 1,
        },
    },
    {
        id: 2,
        type: 'audio',
        title: 'O que foi o Holocausto?',
        link: '',
        file: audio2,
        stats: {
            badge: ['Análise e desenvolvimento'],
            time: '1h atrás',
            content: 'Entenda um dos períodos mais sombrios da história moderna.',
            comments: 421,
            likes: 4200,
            dislikes: 3,
        },
    },
];

export default function Audios() {
    const [players, setPlayers] = useState<{ sound: Audio.Sound | null; isPlaying: boolean; position: number; duration: number }[]>([]);

    useEffect(() => {
        return () => {
            players.forEach(p => p.sound?.unloadAsync());
        };
    }, [players]);

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const updateStatus = (index: number, status: any) => {
        if (!status.isLoaded) return;

        setPlayers(prev => {
            const updated = [...prev];
            if (!updated[index]) return updated;

            updated[index] = {
                ...updated[index],
                isPlaying: status.isPlaying,
                position: status.positionMillis,
                duration: status.durationMillis || 1,
            };
            return updated;
        });
    };

    const handlePlayPause = async (index: number) => {
        const updated = [...players];

        // Inicializar se ainda não tiver player
        if (!updated[index]) {
            const { sound } = await Audio.Sound.createAsync(mockPosts[index].file);
            sound.setOnPlaybackStatusUpdate(status => updateStatus(index, status));

            // Pausa os outros
            for (let i = 0; i < updated.length; i++) {
                if (i !== index && updated[i]?.sound) {
                    await updated[i].sound.pauseAsync();
                    updated[i] = { ...updated[i], isPlaying: false };
                }
            }

            await sound.playAsync();

            updated[index] = {
                sound,
                isPlaying: true,
                position: 0,
                duration: 1,
            };

            setPlayers(updated);
            return;
        }

        // Player já existe
        const player = updated[index];

        if (player.isPlaying) {
            await player.sound?.pauseAsync();
            updated[index] = { ...player, isPlaying: false };
        } else {
            // Pausa os outros
            for (let i = 0; i < updated.length; i++) {
                if (i !== index && updated[i]?.sound) {
                    await updated[i].sound.pauseAsync();
                    updated[i] = { ...updated[i], isPlaying: false };
                }
            }

            player.sound?.setOnPlaybackStatusUpdate(status => updateStatus(index, status));
            await player.sound?.playAsync();
            updated[index] = { ...player, isPlaying: true };
        }

        setPlayers(updated);
    };


    const handleSeek = async (index: number, value: number) => {
        const player = players[index];
        if (player?.sound) {
            await player.sound.setPositionAsync(value);
        }
    };

    const formatTime = (millis: number) => {
        const total = Math.floor(millis / 1000);
        const m = Math.floor(total / 60);
        const s = total % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ gap: 10, marginBottom: 50 }}>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>

                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity onPress={handleGoBack} style={{ width: 24 }}>
                            <CaretLeft color={theme.colors.text} size={24} />
                        </TouchableOpacity>
                        <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Áudios
                        </Text>
                    </View>

                    <TouchableOpacity style={{ width: 24 }} >
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight='fill'
                        />
                    </TouchableOpacity>

                </View>
                {mockPosts.map((post, index) => {
                    const player = players[index] || {
                        position: 0,
                        duration: 1,
                        isPlaying: false,
                        sound: null,
                    };

                    return (
                        <PostCard key={post.id} post={post}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{post.title}</Text>
                            <View style={{ gap: 10, alignItems: 'center' }}>
                                <Image source={imagem} style={{ width: '100%', height: 200, borderRadius: 5 }} />

                                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                                    <Slider
                                        style={{ width: '100%', height: 40 }}
                                        minimumValue={0}
                                        maximumValue={player.duration}
                                        value={player.position}
                                        onSlidingComplete={value => handleSeek(index, value)}
                                        minimumTrackTintColor={theme.colors.text}
                                        maximumTrackTintColor={theme.colors.primary}
                                        thumbTintColor={theme.colors.text}
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text>{formatTime(player.position)}</Text>
                                        <Text>{formatTime(player.duration)}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
                                    <TouchableOpacity onPress={() => handleSeek(index, Math.max(player.position - 15000, 0))}>
                                        <SkipBack weight="fill" size={32} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handlePlayPause(index)}>
                                        {player.isPlaying ? <Pause weight="fill" size={32} /> : <Play weight="fill" size={32} />}
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handleSeek(index, Math.min(player.position + 15000, player.duration))}>
                                        <SkipForward weight="fill" size={32} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </PostCard>
                    );
                })}
            </View>
        </ScrollView>
    );
}
