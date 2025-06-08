import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SideDrawer from '../SideDrawer';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function DrawerConfiguracoes({ visible, onClose }: Props) {

    const navigation = useTypedNavigation();

    const handleNavigate = () => {
        navigation.navigate("Assinar");
        onClose();
    };

    return (
        <SideDrawer visible={visible} onClose={onClose}>
            <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10 }}>
                Configurações
            </Text>

            <View style={{ gap: 10 }}>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Itens salvos
                </Text>
                <Text style={{ color: theme.colors.text, marginLeft: 10 }}>
                    Fórum
                </Text>
                <Text style={{ color: theme.colors.text, marginLeft: 10 }}>
                    Banca
                </Text>
                <Text style={{ color: theme.colors.text, marginLeft: 10 }}>
                    Loja
                </Text>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Curtidos e descurtidos
                </Text>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Sua conta
                </Text>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Privacidade
                </Text>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Acessibilidade
                </Text>
                <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                    Sobre o aplicativo
                </Text>
                <TouchableOpacity onPress={() => handleNavigate()}>
                    <Text style={{ color: theme.colors.text, fontWeight: 'bold' }}>
                        Premium
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>
                    Sair
                </Text>
            </View>
        </SideDrawer >
    );
}
