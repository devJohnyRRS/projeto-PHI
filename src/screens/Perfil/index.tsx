import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES'
import { Gear, CaretLeft, Star, PencilSimple, SlidersHorizontal } from 'phosphor-react-native';
import CustomButton from '../../components/customButton/CustomButton';
import AssuntoButton from '../../components/AssuntoButton';
import PostCard from '../../components/PostCard';
import { useTypedNavigation } from '../../hooks/useNavigate';

interface UserInformation {
    name: string;
    username: string;
    title: string;
    level: number;
    rating: number;
    questions: number;
    followers: number;
    following: number;
    tag: string;
    bio: string;
    trophies: string[];
    comments: number;
    subjects: Post[];
}

interface Post {
    id: number;
    name: string;
    username: string;
    profileImage: any;
    badge: string;
    time: string;
    content: string;
    comments: number;
    likes: number;
    dislikes: number;
    questionTag?: {
        color: string;
        code: string;
    };
}

export default function Perfil() {
    const navigation = useTypedNavigation();

    const profile = require("../../../assets/default-profile.jpg");
    const flag = require("../../../assets/brasil.png");
    const profileImage = require('../../../assets/gustavo.png');

    const handleGoBack = () => {
        navigation.goBack();
    }

    const mockPosts: Post[] = [
        {
            id: 1,
            name: 'Gustavo Souza',
            username: '@GustavoSouza1304',
            profileImage: profileImage,
            badge: 'Análise e desenvolvimento',
            time: '30min atrás',
            content: 'Quem mais ta ansioso pro filme do FIFO 2: O Retorno?? Só eu?? 😂',
            comments: 589,
            likes: 5000,
            dislikes: 1,
            questionTag: {
                color: theme.colors.lightBlue,
                code: '#M18790',
            },
        },
        {
            id: 2,
            name: 'Gustavo Souza',
            username: '@GustavoSouza1304',
            profileImage: profileImage,
            badge: 'Mobile',
            time: '1h atrás',
            content: 'Hoje eu aprendi sobre React Native e estou amando! 🚀',
            comments: 123,
            likes: 1020,
            dislikes: 0,
        },
        {
            id: 3,
            name: 'Gustavo Souza',
            username: '@GustavoSouza1304',
            profileImage: profileImage,
            badge: 'Ferramentas',
            time: '2h atrás',
            content: 'Qual IDE vocês preferem: VSCode ou WebStorm?',
            comments: 87,
            likes: 320,
            dislikes: 5,
        },
        {
            id: 4,
            name: 'Gustavo Souza',
            username: '@GustavoSouza1304',
            profileImage: profileImage,
            badge: 'Lançamento',
            time: '3h atrás',
            content: 'Acabei de publicar meu primeiro app na Play Store 😍',
            comments: 45,
            likes: 700,
            dislikes: 2,
        },
        {
            id: 5,
            name: 'Gustavo Souza',
            username: '@GustavoSouza1304',
            profileImage: profileImage,
            badge: 'Design',
            time: '4h atrás',
            content: 'Alguém recomenda um curso top de UX Design?',
            comments: 65,
            likes: 280,
            dislikes: 3,
        },
    ];

    const mockUser: UserInformation = {
        name: "Gustavo Souza",
        username: "@GustavoSouza1304",
        title: "Aluno",
        level: 1,
        rating: 2.4,
        questions: 10,
        followers: 10,
        following: 5,
        tag: "História",
        bio: "Apaixonado por História e tecnologia.",
        trophies: ["Primeiro Acesso", "Conquistador de Tópicos"],
        comments: 12,
        subjects: mockPosts,
    };

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
                        <CaretLeft color={theme.colors.textLight} />
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
                        <Text style={{ textAlign: 'center' }}>{mockUser.level}</Text>
                    </View>

                    <Text>.lvl</Text>
                </View>

            </View >
            <View style={{ marginHorizontal: 24, marginTop: 10, gap: 10, position: 'relative' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, alignSelf: 'flex-end' }}>
                    <Image source={flag} style={{ width: 30, height: 20 }} />
                    <Text>{mockUser.title}</Text>
                </View>

                <View style={{ marginTop: 30, gap: 10 }}>

                    <View style={{ gap: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{mockUser.name}</Text>
                        <Text>{mockUser.username}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Star weight='fill' color='#ffde59' />
                        <Text style={{ fontSize: 13, color: theme.colors.gray }}>{`${mockUser.rating} (${mockUser.questions} questões resolvidas)`}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seguindo</Text>
                                <Text>{mockUser.following}</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seguidores</Text>
                                <Text>{mockUser.followers}</Text>
                            </View>

                        </View>
                        <CustomButton onPress={() => console.log('ver mais')} style={{ backgroundColor: theme.colors.primary, borderRadius: 25, width: 50 }}>
                            <PencilSimple color={theme.colors.textLight} size={20} weight='fill' />
                        </CustomButton>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: theme.colors.bronze, width: '100%', height: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: theme.colors.textLight }} >#Eu amo {mockUser.tag}</Text>
            </View>

            <View style={{ borderBottomWidth: 3, borderColor: theme.colors.lightGray }}>
                <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bio</Text>
                    <Text style={{ fontSize: 13, color: theme.colors.gray }}>{mockUser.bio || "Nada por aqui..."}.</Text>
                </View>
            </View>
            <View style={{ borderBottomWidth: 3, borderColor: theme.colors.lightGray }}>
                <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                    {mockUser.trophies.length > 0 ? (
                        mockUser.trophies.map((t, i) => (
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
                    <Text style={{ fontSize: 13, color: theme.colors.gray }}>{mockUser.comments || "Nada por aqui..."}</Text>
                </View>
            </View>

            <View style={{ marginVertical: 10, marginHorizontal: 24, gap: 10 }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <SlidersHorizontal />
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Meus assuntos</Text>
                </View>

                <View style={{ gap: 10, marginBottom: 35 }}>
                    {mockUser.subjects.length === 0 && (
                        <Text style={{ fontSize: 13, color: theme.colors.gray }}>Parece que você não tem nenhum assunto no seu perfil :(</Text>
                    )}

                    <AssuntoButton style={{ marginBottom: 5 }} />

                    {mockUser.subjects.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </View>
            </View>
        </ScrollView >
    )
}