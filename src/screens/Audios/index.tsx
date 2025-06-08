import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { CaretLeft, SkipBack, Play, SkipForward, SlidersHorizontal, SpeakerSimpleHigh } from 'phosphor-react-native';
import Slider from '@react-native-community/slider';
import PostCard from '../../components/PostCard';
import PerfilHeader from '../../components/PerfilHeader';
import theme from '../../assets/themes/THEMES';
import { mockPostsAudios } from '../../Mocks/mockPostsAudios';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { styles } from './styles';

export default function Audios() {
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <PerfilHeader />

            <View style={styles.contentWrapper}>

                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.iconButton} onPress={handleGoBack}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} />
                        <Text style={styles.title}>Áudios</Text>
                    </View>

                    <TouchableOpacity style={styles.iconButton}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                    </TouchableOpacity>
                </View>

                {mockPostsAudios.map((post) => (
                    <PostCard key={post.id} post={post}>
                        <Text style={styles.postTitle}>{post.title}</Text>

                        <View style={styles.audioContainer}>
                            <Image source={post.image} style={styles.postImage} />

                            <View style={styles.sliderWrapper}>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={25}
                                    minimumTrackTintColor={theme.colors.text}
                                    maximumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.text}
                                    disabled
                                />
                                <View style={styles.timeWrapper}>
                                    <Text>0:25</Text>
                                    <Text>1:40</Text>
                                </View>
                            </View>

                            <View style={styles.controls}>
                                <TouchableOpacity>
                                    <SkipBack weight="fill" size={32} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Play weight="fill" size={32} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <SkipForward weight="fill" size={32} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </PostCard>
                ))}
            </View>
        </ScrollView>
    );
}
