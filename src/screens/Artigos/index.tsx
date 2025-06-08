import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PerfilHeader from '../../components/PerfilHeader';
import theme from '../../assets/themes/THEMES';
import { CaretLeft, Newspaper, SlidersHorizontal } from 'phosphor-react-native';
import { useTypedNavigation } from '../../hooks/useNavigate';
import PostCard from '../../components/PostCard';
import { mockPostsArtigos } from '../../Mocks/mockPostsArtigos';
import { styles } from './styles';

export default function Artigos() {
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.scroll}>
            <PerfilHeader />

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={handleGoBack} style={styles.iconWrapper}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <Newspaper weight='fill' color={theme.colors.primary} />
                        <Text style={styles.headerText}>Artigos</Text>
                    </View>

                    <TouchableOpacity style={styles.iconWrapper}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                    </TouchableOpacity>
                </View>

                {mockPostsArtigos.map((artigo) => (
                    <PostCard key={artigo.id} post={artigo}>
                        <Text style={styles.postTitle}>{artigo.title}</Text>

                        <View>
                            <Text numberOfLines={6} style={styles.postDescription}>
                                {artigo.description}
                            </Text>

                            <TouchableOpacity onPress={() => Linking.openURL(artigo.link)}>
                                <Text style={styles.readMore}>Ver mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </PostCard>
                ))}
            </View>
        </ScrollView>
    );
}
