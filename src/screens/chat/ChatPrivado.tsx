import { styles } from "../login/styles";
import { ScrollView, Text, View } from 'react-native';
import theme from "../../assets/themes/THEMES";
import PerfilHeader from "../../components/PerfilHeader";
import { SlidersHorizontal } from "phosphor-react-native";
import Conversas from "../../components/Conversas/index";

export default function Chat(){
return (
    <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                        Mensagens
                    </Text>
);
}