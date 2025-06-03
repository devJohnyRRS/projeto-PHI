import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import { MediaPost } from '../../types/Posts';
import PerfilHeader from '../../components/PerfilHeader';
import YouTubeEmbed from '../../components/YotubeEmbed';
import { CaretLeft, SlidersHorizontal, Video } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';

export default function Videos() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const mockPosts: MediaPost[] = [
        {
            id: 1,
            type: 'video',
            title: 'O que foi o Holocausto?',
            link: 'ylcJ4j5Sx-I',
            stats: {
                badge: ['História'],
                time: '30min atrás',
                content: 'Aprenda sobre bancos de dados relacionais e não relacionais.',
                comments: 209,
                likes: 400,
                dislikes: 0,
            },
        },
        {
            id: 2,
            type: 'video',
            title: 'A RESPOSTA PARA QUALQUER DANO MÁGICO NA TOP LANE',
            link: 'W6hnaV90-k4',
            stats: {
                badge: ['League of Legends', 'Games'],
                time: '30min atrás',
                comments: 120,
                likes: 694,
                dislikes: 89,
            },
        },
        {
            id: 3,
            type: 'video',
            title: 'MODELOS ATÔMICOS: Dalton, Thomson, Rutherford e Rutherford-Bohr',
            link: '5-fa4IKp5bU',
            stats: {
                badge: ['Química', 'Ciências'],
                time: '30min atrás',
                comments: 122,
                likes: 4565,
                dislikes: 19,
            },
        },
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ gap: 10, marginBottom: 50 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>

                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity style={{ width: 24 }} onPress={handleGoBack}>
                            <CaretLeft color={theme.colors.gray} />
                        </TouchableOpacity>
                        <Video weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Vídeos
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

                {mockPosts.map((post) => (
                    <PostCard key={post.id} post={post}>
                        {/* <Text style={{ fontSize: 16 }}>{post.stats.content}</Text> */}
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{post.title}</Text>
                        <YouTubeEmbed videoId={post.link} />
                    </PostCard>
                ))}
            </View>
        </ScrollView>
    )
}