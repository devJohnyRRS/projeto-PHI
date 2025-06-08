import React from 'react'
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PerfilHeader from '../../components/PerfilHeader'
import theme from '../../assets/themes/THEMES'
import { CaretLeft, Newspaper, SlidersHorizontal } from 'phosphor-react-native'
import { useTypedNavigation } from '../../hooks/useNavigate'
import PostCard from '../../components/PostCard'
import { mockPostsArtigos } from '../../Mocks/mockPostsArtigos'

export default function Artigos() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ gap: 10, margin: 15, borderRadius: 5 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>

                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity onPress={handleGoBack} style={{ width: 24 }}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <Newspaper weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Artigos
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

                {mockPostsArtigos.map((artigo) => (
                    <PostCard key={artigo.id} post={artigo}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{artigo.title}</Text>

                        <View>
                            <Text numberOfLines={6} style={{ fontSize: 14, color: theme.colors.text }}>
                                {artigo.description}
                            </Text>

                            <TouchableOpacity onPress={() => Linking.openURL(artigo.link)}>
                                <Text style={{ color: theme.colors.secondary, marginTop: 4 }}>Ver mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </PostCard>
                ))}
            </View>
        </ScrollView >
    )
}
