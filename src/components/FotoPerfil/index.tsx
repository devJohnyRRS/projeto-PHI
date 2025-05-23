import { Text, View, Image, ImageSourcePropType, Button, TouchableOpacity } from 'react-native';
import theme from "../../assets/themes/THEMES";

interface FotoPerfilProps {
    name: string;
    username: string;
    image: ImageSourcePropType;
    border?: string;
    onPress?: () => void;
    type?: 'light' | 'dark';
}

function FotoPerfil({
    name,
    username,
    image,
    border,
    onPress,
    type = 'dark',
}: FotoPerfilProps) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={onPress}>
                <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    overflow: 'hidden',
                    backgroundColor: border ?? 'transparent',
                    padding: 2
                }}>
                    <Image
                        source={image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                            borderRadius: 20,
                        }}
                    />
                </View>
            </TouchableOpacity>

            <View style={{ gap: type === 'light' ? 4 : 0 }}>
                <Text style={{ color: type === 'light' ? theme.colors.textLight : theme.colors.text, fontWeight: 'bold', fontSize: 16 }}>
                    {name}
                </Text>
                <Text style={{ color: type === 'light' ? theme.colors.textLight : theme.colors.text, fontSize: 13 }}>
                    {username}
                </Text>
            </View>
        </View >
    );
}

export default FotoPerfil;
