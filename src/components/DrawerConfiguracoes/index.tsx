import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SideDrawer from '../SideDrawer';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { styles } from './styles';

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
            <Text style={styles.title}>Configurações</Text>

            <View style={styles.container}>
                <Text style={styles.boldText}>Itens salvos</Text>
                <Text style={styles.indentedText}>Fórum</Text>
                <Text style={styles.indentedText}>Banca</Text>
                <Text style={styles.indentedText}>Loja</Text>
                <Text style={styles.boldText}>Curtidos e descurtidos</Text>
                <Text style={styles.boldText}>Sua conta</Text>
                <Text style={styles.boldText}>Privacidade</Text>
                <Text style={styles.boldText}>Acessibilidade</Text>
                <Text style={styles.boldText}>Sobre o aplicativo</Text>

                <TouchableOpacity onPress={handleNavigate}>
                    <Text style={styles.boldText}>Premium</Text>
                </TouchableOpacity>

                <Text style={styles.redBoldText}>Sair</Text>
            </View>
        </SideDrawer>
    );
}
