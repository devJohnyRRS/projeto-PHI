import { ScrollView, Text, View } from 'react-native';
import theme from "../../assets/themes/THEMES";
import { PencilSimple, SlidersHorizontal } from "phosphor-react-native";
import CustomButton from '../../components/customButton/CustomButton';
import Assuntos from '../../components/Assuntos';
import PerfilHeader from '../../components/PerfilHeader';
import Carrosel from '../../components/Carrossel';

function Home() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ margin: 24, gap: 10 }}>

                <Carrosel />

                <CustomButton
                    onPress={() => console.log('ver mais')}
                    style={{
                        backgroundColor: theme.colors.primary,
                        borderRadius: 10,
                        flexDirection: 'row',
                        gap: 5,
                        width: 170,
                        // height: 50,
                    }}
                >
                    <PencilSimple color={theme.colors.textLight} size={20} weight='fill' />
                    <Text style={{ color: theme.colors.textLight, fontSize: 16, fontWeight: 'bold' }}>
                        Criar assunto
                    </Text>
                </CustomButton>

                <View style={{ flexDirection: 'row', gap: 10 }}>
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

export default Home