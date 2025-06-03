import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import PerfilHeader from '../../components/PerfilHeader';
import YouTubeEmbed from '../../components/YotubeEmbed';
import { CaretLeft, SlidersHorizontal, Video } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { mockPostsVideos } from '../../Mocks/mockPostsVideo';

export default function Videos() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

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

                {mockPostsVideos.map((post) => (
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