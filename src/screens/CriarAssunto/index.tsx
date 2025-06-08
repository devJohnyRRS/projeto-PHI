import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES'
import { CaretLeft } from 'phosphor-react-native'
import { useTypedNavigation } from '../../hooks/useNavigate';
import CustomButton from '../../components/customButton/CustomButton';

export default function CriarAssunto() {
    const profile = require("../../../assets/gustavo.png");
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleCreateSubject = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: theme.colors.textLight }}>
            <View style={{ marginTop: 30, gap: 10, width: '100%' }}>
                <TouchableOpacity onPress={handleGoBack} style={{ padding: 5 }}>
                    <CaretLeft color={theme.colors.gray} weight='bold' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>

                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        overflow: 'hidden',
                    }}>
                        <Image
                            source={profile}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain',
                                borderRadius: 20,
                            }}
                        />
                    </View>

                    <CustomButton title='Publicar' style={{ backgroundColor: theme.colors.primary, width: 100 }} onPress={() => handleCreateSubject()} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <TextInput
                        placeholder="Criar um assunto..."
                        placeholderTextColor={theme.colors.gray}
                        multiline
                        style={{
                            fontSize: 18,
                            color: theme.colors.text,
                            paddingTop: 10,
                            paddingBottom: 20,
                            minHeight: 100,
                            textAlignVertical: 'top'
                        }}
                    />
                </View>

            </View>
        </ScrollView>
    )
}