import { View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import theme from '../../assets/themes/THEMES';
import { CaretLeft } from 'phosphor-react-native';
import { useTypedNavigation } from '../../hooks/useNavigate';
import CustomButton from '../../components/customButton/CustomButton';
import { styles } from './styles';

export default function CriarAssunto() {
    const profile = require("../../../assets/gustavo.png");
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleCreateSubject = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
                    <CaretLeft color={theme.colors.gray} weight='bold' />
                </TouchableOpacity>

                <View style={styles.topRow}>
                    <View style={styles.profileImageWrapper}>
                        <Image source={profile} style={styles.profileImage} />
                    </View>

                    <CustomButton
                        title='Publicar'
                        style={styles.publishButton}
                        onPress={handleCreateSubject}
                    />
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Criar um assunto..."
                    placeholderTextColor={theme.colors.gray}
                    multiline
                    style={styles.textInput}
                />
            </View>
        </ScrollView>
    );
}