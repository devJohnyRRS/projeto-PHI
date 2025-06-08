import { Text, View, Image, ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

interface FotoPerfilProps {
    name: string;
    username: string;
    image: ImageSourcePropType;
    border?: string;
    onPress?: () => void;
    type?: 'light' | 'dark';
}

export default function FotoPerfil({
    name,
    username,
    image,
    border,
    onPress,
    type = 'dark',
}: FotoPerfilProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.imageWrapper, { backgroundColor: border ?? 'transparent' }]}>
                    <Image
                        source={image}
                        style={styles.image}
                    />
                </View>
            </TouchableOpacity>

            <View style={[styles.textWrapper, type === 'light' && styles.textWrapperLight]}>
                <Text style={[styles.nameText, type === 'light' ? styles.textLight : styles.textDark]}>
                    {name}
                </Text>
                <Text style={[styles.usernameText, type === 'light' ? styles.textLight : styles.textDark]}>
                    {username}
                </Text>
            </View>
        </View>
    );
}