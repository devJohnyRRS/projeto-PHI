import { Circle, User, SlidersHorizontal, Sticker, Stamp } from 'phosphor-react-native'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/themes/THEMES'
import PerfilHeader from '../../components/PerfilHeader'
import { useTypedNavigation } from '../../hooks/useNavigate'
import LojaCard from '../../components/LojaCard'
import { mockPopularesLoja } from '../../Mocks/mockPopularesLoja'
import { styles } from './styles'

export default function Loja() {
    const navigation = useTypedNavigation();

    const handleNavigate = (type: string) => {
        if (type === 'moldura') navigation.navigate("Molduras");
        if (type === 'papel') navigation.navigate("PapeisDeParede");
        if (type === 'icone') navigation.navigate("Icones");
        if (type === 'assinar') navigation.navigate("Assinar");
    };

    return (
        <ScrollView style={styles.container}>
            <PerfilHeader />

            <View style={styles.content}>
                <Text style={styles.title}>Loja</Text>

                {/* Ícones de navegação */}
                <View style={styles.navigationIconsContainer}>
                    {[
                        { icon: <Circle size={60} />, type: 'moldura', label: 'Molduras' },
                        { icon: <Sticker size={60} weight='fill' />, type: 'papel', label: 'Papéis de parede' },
                        { icon: <User size={60} weight='fill' />, type: 'icone', label: 'Ícones' },
                        { icon: <Stamp size={60} weight='fill' />, type: 'assinar', label: 'Assinar' },
                    ].map(({ icon, type, label }) => (
                        <TouchableOpacity key={type} onPress={() => handleNavigate(type)} style={styles.navigationIcon}>
                            <View style={styles.iconBackground}>
                                {React.cloneElement(icon, { color: theme.colors.primary })}
                            </View>
                            <Text style={styles.iconLabel}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.popularesSection}>
                    <View style={styles.popularesHeader}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                        <Text style={styles.popularesTitle}>Populares</Text>
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