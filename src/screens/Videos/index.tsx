import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import PerfilHeader from '../../components/PerfilHeader'
import YouTubeEmbed from '../../components/YotubeEmbed'
import { CaretLeft, SlidersHorizontal, Video } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import { useTypedNavigation } from '../../hooks/useNavigate'
import { mockPostsVideos } from '../../Mocks/mockPostsVideo'
import { styles } from './styles'

export default function Videos() {
    const navigation = useTypedNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <PerfilHeader />

            <View style={styles.content}>
                <View style={styles.headerBar}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.iconButton} onPress={handleGoBack}>
                            <CaretLeft color={theme.colors.gray} weight="bold" />
                        </TouchableOpacity>
                        <Video weight="fill" color={theme.colors.primary} />
                        <Text style={styles.headerTitle}>Vídeos</Text>
                    </View>

                    <TouchableOpacity style={styles.iconButton}>
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight="fill"
                        />
                    </TouchableOpacity>
                </View>

                {mockPostsVideos.map((post) => (
                    <PostCard key={post.id} post={post}>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <YouTubeEmbed videoId={post.link} />
                    </PostCard>
                ))}
            </View>
        </ScrollView>
    )
}