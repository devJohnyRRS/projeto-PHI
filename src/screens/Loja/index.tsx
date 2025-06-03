import { Circle, User, SlidersHorizontal, Sticker, Stamp, BookmarkSimple, Coins } from 'phosphor-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/themes/THEMES'
import PerfilHeader from '../../components/PerfilHeader'
import PostCard from '../../components/PostCard'
import { useTypedNavigation } from '../../hooks/useNavigate'
import LojaCard from '../../components/LojaCard'
import { mockItemsLoja } from '../../Mocks/mockItemsLoja'

export default function Loja() {


    const navigation = useTypedNavigation();

    const handleNavigate = (type: string) => {
        if (type === 'video') navigation.navigate("Loja");
        if (type === 'audio') navigation.navigate("Loja");
        if (type === 'artigo') navigation.navigate("Loja");
        if (type === 'questao') navigation.navigate("Loja");
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ marginHorizontal: 24, gap: 10, marginBottom: 50, marginTop: 10 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Loja</Text>

                {/* Ícones de navegação */}
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {[
                        { icon: <Circle size={60} />, type: 'video', label: 'Moldura' },
                        {
                            icon: <Sticker size={60} weight='fill' />, type: ' audio', label: 'Papéis de parede'
                        },
                        { icon: <User size={60} weight='fill' />, type: 'artigo', label: 'Ícones' },
                        { icon: <Stamp size={60} weight='fill' />, type: 'questao', label: 'Assinar' },
                    ].map(({ icon, type, label }) => (
                        <TouchableOpacity key={type} onPress={() => handleNavigate(type)} style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ backgroundColor: theme.colors.textLight, padding: 8, borderRadius: 10 }}>
                                {React.cloneElement(icon, { color: theme.colors.primary })}
                            </View>
                            <Text style={{ color: theme.colors.text, fontSize: 16, textAlign: 'center' }}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ gap: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Populares</Text>
                    </View>

                    {mockItemsLoja.map((item) => (
                        <LojaCard
                            item={item}
                            key={item.id}
                        />
                    ))}

                </View>
            </View>
        </ScrollView >
    )
}
