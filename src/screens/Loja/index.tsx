import { Circle, User, SlidersHorizontal, Sticker, Stamp } from 'phosphor-react-native'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/themes/THEMES'
import PerfilHeader from '../../components/PerfilHeader'
import { useTypedNavigation } from '../../hooks/useNavigate'
import LojaCard from '../../components/LojaCard'
import { mockPopularesLoja } from '../../Mocks/mockPopularesLoja'

export default function Loja() {


    const navigation = useTypedNavigation();

    const handleNavigate = (type: string) => {
        if (type === 'moldura') navigation.navigate("Molduras");
        if (type === 'papel') navigation.navigate("PapeisDeParede");
        if (type === 'icone') navigation.navigate("Icones");
        if (type === 'assinar') navigation.navigate("Assinar");
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <PerfilHeader />

            <View style={{ gap: 10, margin: 15, borderRadius: 5 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>Loja</Text>

                {/* Ícones de navegação */}
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {[
                        { icon: <Circle size={60} />, type: 'moldura', label: 'Molduras' },
                        { icon: <Sticker size={60} weight='fill' />, type: 'papel', label: 'Papéis de parede' },
                        { icon: <User size={60} weight='fill' />, type: 'icone', label: 'Ícones' },
                        { icon: <Stamp size={60} weight='fill' />, type: 'assinar', label: 'Assinar' },
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

                    {mockPopularesLoja.map((item) => (
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
