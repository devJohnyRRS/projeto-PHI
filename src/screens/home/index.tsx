import { Image, ScrollView, Text, View } from 'react-native';
import theme from "../../assets/themes/THEMES";
import { BellSimple, MagnifyingGlass, CaretRight, CaretLeft, Circle, PencilSimple, SlidersHorizontal, DotsThreeOutlineVertical, ChatCircle, ThumbsUp, ThumbsDown, BookmarkSimple } from "phosphor-react-native";
import CustomImput from '../../components/customInput/CustomImput';
import CustomButton from '../../components/customButton/CustomButton';
import FotoPerfil from '../../components/FotoPerfil';
import Badge from '../../components/Badge';
import Assuntos from '../../components/Assuntos';

function Home() {
    const icon = require("../../../assets/favicon.png");
    const profile = require("../../../assets/gustavo.png");
    const banner = require("../../../assets/enem.webp");

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>


            <View style={{
                width: '100%',
                height: 230,
                backgroundColor: theme.colors.secondary,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                padding: 24,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}>
                <Image source={icon} style={{ width: 50, height: 50, alignSelf: 'flex-start' }} />

                <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', }}>
                    <FotoPerfil name='Gustavo Souza' username='@GustavoSouza1304' image={profile} type='light' />
                    <BellSimple color={theme.colors.textLight} weight='fill' />
                </View>

                <View style={{
                    width: '100%',
                    position: 'relative',
                }}>

                    <CustomImput
                        placeholder="Pesquisar"
                        placeholderTextColor={theme.colors.gray}


                        keyboardType="email-address"

                        errorMessage="Preencha o email" />

                    <MagnifyingGlass
                        color={theme.colors.lightGray}
                        size={24}

                        style={{
                            position: 'absolute',
                            right: 18,
                            top: 11,

                        }}
                    />
                </View>
            </View>

            <View style={{ margin: 24, gap: 10 }}>
                <View style={{ width: '100%', height: 140, borderRadius: 20, overflow: 'hidden' }}>

                    <Image
                        source={banner}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                            opacity: 0.3,
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            padding: 16,
                            justifyContent: 'center',
                            zIndex: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >

                            <CustomButton
                                onPress={() => console.log('esquerda')}
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    borderRadius: 20,
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CaretLeft color={theme.colors.textLight} size={20} />
                            </CustomButton>

                            <View style={{ maxWidth: '80%', maxHeight: 80, paddingInline: 5, justifyContent: 'center' }}>
                                <Text style={{ color: theme.colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}>
                                    Título
                                </Text>
                                <Text
                                    style={{
                                        color: theme.colors.primary,
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Text>
                            </View>

                            <CustomButton
                                onPress={() => console.log('direita')}
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    borderRadius: 20,
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CaretRight color={theme.colors.textLight} size={20} />
                            </CustomButton>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', gap: 9 }}>
                    <Circle weight='fill' color={theme.colors.lightGray} size={15} />
                    <Circle weight='fill' color={theme.colors.primary} size={15} />
                    <Circle weight='fill' color={theme.colors.lightGray} size={15} />
                </View>

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