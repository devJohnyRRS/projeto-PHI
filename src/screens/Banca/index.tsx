import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import theme from '../../assets/themes/THEMES'
import PerfilHeader from '../../components/PerfilHeader'
import { BookOpen, Newspaper, SlidersHorizontal, SpeakerSimpleHigh, Video } from 'phosphor-react-native'
import { useTypedNavigation } from '../../hooks/useNavigate'

export default function Banca() {
    const navigation = useTypedNavigation();

    const handleNavigate = (type: string) => {
        if (type === 'video') {
            navigation.navigate("Videos");
            return;
        }
        if (type === 'audio') {
            navigation.navigate("Audios");
            return;
        }
        if (type === 'artigo') {
            navigation.navigate("Artigos");
            return;
        }
        if (type === 'questao') {
            navigation.navigate("Questoes");
            return;
        }
    };


    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ margin: 24, gap: 10 }}>

                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Banca de estudos</Text>

                <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>

                    <TouchableOpacity onPress={() => handleNavigate('video')}>
                        <View style={{ alignContent: 'center', flex: 1, alignItems: 'center', gap: 5 }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                <Video weight='fill' color={theme.colors.primary} size={60} />
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16 }}>Vídeos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigate('audio')}>
                        <View style={{ alignContent: 'center', flex: 1, alignItems: 'center', gap: 5 }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                <SpeakerSimpleHigh weight='fill' color={theme.colors.primary} size={60} />
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16 }}>Áudios</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigate('artigo')}>
                        <View style={{ alignContent: 'center', flex: 1, alignItems: 'center', gap: 5 }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                <Newspaper weight='fill' color={theme.colors.primary} size={60} />
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16 }}>Artigos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigate('questao')}>
                        <View style={{ alignContent: 'center', flex: 1, alignItems: 'center', gap: 5 }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                <BookOpen weight='fill' color={theme.colors.primary} size={60} />
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16 }}>Questões</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <SlidersHorizontal
                        color={theme.colors.text}
                        size={24}
                        weight='fill'
                    />
                    <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Populares</Text>

                    <View>
                        {/* <Postcard/> */}
                    </View>

                </View>
            </View>

        </ScrollView>
    )
}