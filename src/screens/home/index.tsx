import { ScrollView, Text, View } from 'react-native';
import theme from "../../assets/themes/THEMES";
import { SlidersHorizontal } from "phosphor-react-native";
import Assuntos from '../../components/Assuntos';
import PerfilHeader from '../../components/PerfilHeader';
import Carrosel from '../../components/Carrossel';
import AssuntoButton from '../../components/AssuntoButton';

export default function Home() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ margin: 24, gap: 10, marginBottom: 50 }}>

                <Carrosel />

                <AssuntoButton />

                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <SlidersHorizontal
                        color={theme.colors.text}
                        size={24}
                        weight='fill'
                    />

                    <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                        Assuntos
                    </Text>
                </View>

                <Assuntos />
            </View>

        </ScrollView>

    )
}