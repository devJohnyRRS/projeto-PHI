import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES'
import { Gear, CaretLeft, Star, PencilSimple, SlidersHorizontal } from 'phosphor-react-native';
import CustomButton from '../../components/customButton/CustomButton';
import AssuntoButton from '../../components/AssuntoButton';
import PostCard from '../../components/PostCard';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { mockUserInformation } from '../../Mocks/mockUserInformation';

export default function Perfil() {
    const navigation = useTypedNavigation();

    const profile = require("../../../assets/default-profile.jpg");
    const flag = require("../../../assets/brasil.png");

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }} showsVerticalScrollIndicator={false}>
            <View style={{
                width: '100%',
                height: 180,
                backgroundColor: theme.colors.secondary,
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                padding: 24,
                alignItems: 'center',
                gap: 10,
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 30 }}>
                    <TouchableOpacity onPress={handleGoBack} style={{ padding: 5 }}>
                        <CaretLeft color={theme.colors.textLight} weight='bold' />
                    </TouchableOpacity>
                    <Gear color={theme.colors.textLight} weight='fill' />
                </View>

                <View style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    overflow: 'hidden',
                    position: 'absolute',
                    bottom: -60,
                    left: 30,
                }}>
                    <Image source={profile} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                </View>

                <View style={{ position: 'absolute', left: 110, bottom: -60, flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{ width: 40, height: 40, borderRadius: 40, padding: 5, borderColor: theme.colors.primary, borderWidth: 2, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>{mockUserInformation.level}</Text>
                    </View>

                    <Text>.lvl</Text>
                </View>

            </View >
            <View style={{ marginHorizontal: 24, marginTop: 10, gap: 10, position: 'relative' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, alignSelf: 'flex-end' }}>
                    <Image source={flag} style={{ width: 30, height: 20 }} />
                    <Text>{mockUserInformation.title}</Text>
                </View>

                <View style={{ marginTop: 30, gap: 10 }}>

                    <View style={{ gap: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{mockUserInformation.name}</Text>
                        <Text>{mockUserInformation.username}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Star weight='fill' color='#ffde59' />
                        <Text style={{ fontSize: 13, color: theme.colors.gray }}>{`${mockUserInformation.rating} (${mockUserInformation.questions} questões resolvidas)`}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seguindo</Text>
                                <Text>{mockUserInformation.following}</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seguidores</Text>
                                <Text>{mockUserInformation.followers}</Text>
                            </View>

                        </View>
                        <CustomButton onPress={() => console.log('ver mais')} style={{ backgroundColor: theme.colors.primary, borderRadius: 25, width: 50 }}>
                            <PencilSimple color={theme.colors.textLight} size={20} weight='fill' />
                        </CustomButton>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: theme.colors.bronze, width: '100%', height: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: theme.colors.textLight }} >#Eu amo {mockUserInformation.tag}</Text>
            </View>

            <View style={{ borderBottomWidth: 3, borderColor: theme.colors.lightGray }}>
                <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bio</Text>
                    <Text style={{ fontSize: 13, color: theme.colors.gray }}>{mockUserInformation.bio || "Nada por aqui..."}.</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 3, borderColor: theme.colors.lightGray }}>
                <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                    {mockUserInformation.trophies.length > 0 ? (
                        mockUserInformation.trophies.map((t, i) => (
                            <Text key={i} style={{ fontSize: 13 }}>{t}</Text>
                        ))
                    ) : (
                        <Text style={{ fontSize: 13, color: theme.colors.gray }}>Nada por aqui...</Text>
                    )}
                </View>
            </View>
            <View style={{ borderBottomWidth: 3, borderColor: theme.colors.lightGray }}>
                <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <SlidersHorizontal />
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Comentários</Text>
                    </View>
                    <Text style={{ fontSize: 13, color: theme.colors.gray }}>{mockUserInformation.comments || "Nada por aqui..."}</Text>
                </View>
            </View>

            <View style={{ gap: 10, margin: 15, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <SlidersHorizontal />
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Meus assuntos</Text>
                </View>

                <View style={{ gap: 10 }}>
                    {mockUserInformation.subjects.length === 0 && (
                        <Text style={{ fontSize: 13, color: theme.colors.gray }}>Parece que você não tem nenhum assunto no seu perfil :(</Text>
                    )}

                    <AssuntoButton style={{ marginBottom: 5 }} />

                    {mockUserInformation.subjects.map((post) => (
                        <PostCard key={post.id} post={post}>
                            <Text style={{ fontSize: 16 }}>{post.stats.content}</Text>
                        </PostCard>
                    ))}
                </View>
            </View>
        </ScrollView >
    )
}