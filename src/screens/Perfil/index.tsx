import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import theme from '../../assets/themes/THEMES'
import { Gear, CaretLeft, Star, PencilSimple, SlidersHorizontal, X } from 'phosphor-react-native';
import CustomButton from '../../components/customButton/CustomButton';
import DrawerConfiguracoes from '../../components/DrawerConfiguracoes';
import AssuntoButton from '../../components/AssuntoButton';
import PostCard from '../../components/PostCard';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { mockUserInformation } from '../../Mocks/mockUserInformation';
import { Trophy } from '../../types/Trophy';
import { styles } from './styles';

export default function Perfil() {
    const navigation = useTypedNavigation();

    const profile = require("../../../assets/gustavo.png");
    const flag = require("../../../assets/brasil.png");

    const [selectedTrophy, setSelectedTrophy] = useState<Trophy | null>(null);
    const [isConfigVisible, setConfigVisible] = useState(false);

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.iconButton}>
                        <CaretLeft color={theme.colors.textLight} weight='bold' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setConfigVisible(true)} style={styles.iconButton}>
                        <Gear color={theme.colors.textLight} weight='fill' />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileImageContainer}>
                    <Image source={profile} style={styles.profileImage} />
                </View>

                <View style={styles.levelContainer}>
                    <View style={styles.levelCircle}>
                        <Text style={styles.levelText}>{mockUserInformation.level}</Text>
                    </View>
                    <Text>.lvl</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.flagContainer}>
                    <Image source={flag} style={styles.flagImage} />
                    <Text>{mockUserInformation.title}</Text>
                </View>

                <View style={styles.userInfo}>
                    <View style={styles.userName}>
                        <Text style={styles.userNameText}>{mockUserInformation.name}</Text>
                        <Text>{mockUserInformation.username}</Text>
                    </View>

                    <View style={styles.rating}>
                        <Star weight='fill' color='#ffde59' />
                        <Text style={styles.ratingText}>{`${mockUserInformation.rating} (${mockUserInformation.questions} questões resolvidas)`}</Text>
                    </View>

                    <View style={styles.followContainer}>
                        <View style={styles.followGroup}>
                            <View style={styles.followItem}>
                                <Text style={styles.followTitle}>Seguindo</Text>
                                <Text>{mockUserInformation.following}</Text>
                            </View>

                            <View style={styles.followItem}>
                                <Text style={styles.followTitle}>Seguidores</Text>
                                <Text>{mockUserInformation.followers}</Text>
                            </View>
                        </View>
                        <CustomButton onPress={() => console.log('ver mais')} style={styles.editButton}>
                            <PencilSimple color={theme.colors.textLight} size={20} weight='fill' />
                        </CustomButton>
                    </View>
                </View>
            </View>

            <View style={styles.tagContainer}>
                <Text style={styles.tagText}>#Eu amo {mockUserInformation.tag}</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.sectionTitle}>Bio</Text>
                    {mockUserInformation.bio ? (
                        <Text style={styles.sectionText}>{mockUserInformation.bio}.</Text>
                    ) : (
                        <Text style={styles.emptyText}>Nada por aqui...</Text>
                    )}
                </View>
            </View>

            <View style={styles.section}>
                <View style={[styles.sectionContent, styles.trophiesContainer]}>
                    {mockUserInformation.trophies.length > 0 ? (
                        mockUserInformation.trophies.map((trophie) => (
                            <TouchableOpacity
                                key={trophie.id}
                                style={styles.trophyItem}
                                onPress={() => setSelectedTrophy(trophie)}
                            >
                                <Image source={trophie.icon} style={styles.trophyIcon} />
                                <Text style={styles.trophyName}>{trophie.name}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.emptyText}>Nada por aqui...</Text>
                    )}
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionContent}>
                    <View style={styles.commentsHeader}>
                        <SlidersHorizontal />
                        <Text style={styles.sectionTitle}>Comentários</Text>
                    </View>
                    <Text style={styles.emptyText}>{mockUserInformation.comments || "Nada por aqui..."}</Text>
                    {mockUserInformation.comments > 0 && (
                        <TouchableOpacity style={styles.viewButton}>
                            <Text style={styles.viewButtonText}>Ver</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.mySubjects}>
                <View style={styles.subjectsHeader}>
                    <SlidersHorizontal />
                    <Text style={styles.sectionTitle}>Meus assuntos</Text>
                </View>

                <View style={styles.subjectsContent}>
                    {mockUserInformation.subjects.length === 0 && (
                        <Text style={styles.emptyText}>Parece que você não tem nenhum assunto no seu perfil :(</Text>
                    )}

                    <AssuntoButton style={styles.assuntoButton} />

                    {mockUserInformation.subjects.map((post) => (
                        <PostCard key={post.id} post={post}>
                            <Text style={styles.postContent}>{post.stats.content}</Text>
                        </PostCard>
                    ))}
                </View>
            </View>

            <Modal
                visible={!!selectedTrophy}
                transparent
                animationType="fade"
                onRequestClose={() => setSelectedTrophy(null)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{selectedTrophy?.name}</Text>
                            <TouchableOpacity onPress={() => setSelectedTrophy(null)} style={styles.iconButton}>
                                <X size={20} color={theme.colors.gray} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalDescription}>{selectedTrophy?.description}</Text>
                    </View>
                </View>
            </Modal>

            <DrawerConfiguracoes visible={isConfigVisible} onClose={() => setConfigVisible(false)} />
        </ScrollView>
    )
}