import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { CaretLeft, Pause, Play, SkipBack, SkipForward, SlidersHorizontal, SpeakerSimpleHigh } from 'phosphor-react-native';
import Slider from '@react-native-community/slider';
import PostCard from '../../components/PostCard';
import PerfilHeader from '../../components/PerfilHeader';
import theme from '../../assets/themes/THEMES';
import { mockPostsAudios } from '../../Mocks/mockPostsAudios';
import { useTypedNavigation } from '../../hooks/useNavigate';

export default function Audios() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ gap: 10, marginBottom: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity style={{ width: 24 }} onPress={handleGoBack}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Áudios</Text>
                    </View>

                    <TouchableOpacity style={{ width: 24 }} >
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                    </TouchableOpacity>
                </View>

                {mockPostsAudios.map((post) => (
                    <PostCard key={post.id} post={post}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{post.title}</Text>
                        <View style={{ gap: 10, alignItems: 'center' }}>
                            <Image source={post.image} style={{ width: '100%', height: 200, borderRadius: 5 }} />

                            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                                <Slider
                                    style={{ width: '100%', height: 40 }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={25}
                                    minimumTrackTintColor={theme.colors.text}
                                    maximumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.text}
                                    disabled
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>0:25</Text>
                                    <Text>1:40</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
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
