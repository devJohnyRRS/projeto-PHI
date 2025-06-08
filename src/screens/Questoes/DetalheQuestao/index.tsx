import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Vibration,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import PerfilHeader from "../../../components/PerfilHeader";
import { styles } from "./styles";
import { useTypedNavigation } from "../../../hooks/useNavigate";
import {
  Alarm,
  BookmarkSimple,
  CaretLeft,
  Coins,
  DotsThreeVertical,
  Trophy,
} from "phosphor-react-native";
import theme from "../../../assets/themes/THEMES";
import { useEffect, useRef, useState } from "react";
import formatarTempo from "../../../utils/formartarTempoCronometro";

const iconePhi = require("../../../../assets/adaptive-icon.png");

const letras = ["A", "B", "C", "D"];

export default function DetalheQuestao({ route }) {
  const { question } = route.params;
  const navigation = useTypedNavigation();
  const [alternativaSelecionada, setAlternativaSelecionada] = useState<
    number | null
  >(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [tempo, setTempo] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isVF =
    question.alternativas.length === 2 &&
    (question.alternativas[0].toLowerCase().includes("certo") ||
      question.alternativas[0].toLowerCase().includes("errado") ||
      question.alternativas[0].toLowerCase().includes("verdadeiro") ||
      question.alternativas[0].toLowerCase().includes("falso"));

  const handleAlternativaSelecionada = (idx: number) => {
    setAlternativaSelecionada(idx);
    const acertou = idx + 1 === question.alternativaCorreta;
    if (acertou) {
      setShowConfetti(true);
      // O confete some sozinho após alguns segundos
    } else {
      Vibration.vibrate([100, 100]);
    }
  };

  const handleCronometrarTempo = () => {
    Vibration.vibrate([75, 75]);
    if (cronometroAtivo) {
      // Se já está rodando, para e reseta
      setCronometroAtivo(false);
      setTempo(0);
      Vibration.vibrate([50, 50]);
    } else {
      // Se está parado, inicia do zero
      setTempo(0);
      setCronometroAtivo(true);
      setTempo(1);
    }
  };

  useEffect(() => {
    if (cronometroAtivo) {
      intervalRef.current = setInterval(() => {
        setTempo((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cronometroAtivo]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <PerfilHeader />
        <View style={styles.utilsHeader}>
          <TouchableOpacity
            onPress={handleGoBack}
            style={{ width: 24, position: "absolute", left: 10 }}
          >
            <CaretLeft color={theme.colors.text} size={24} weight="bold" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCronometrarTempo}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Alarm color={theme.colors.primary} size={40} />
            <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: "bold" }}>
              {formatarTempo(tempo)}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.headerQuestão, { backgroundColor: question.color }]}
        >
          <Text>Questão #{question.code}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <BookmarkSimple size={24} weight="light" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DotsThreeVertical size={24} weight="bold" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.description}</Text>
          </View>
          <View style={styles.alternativasContainer}>
            {question.alternativas.map((alt, idx) => {
              let alternativaStatus: "default" | "correta" | "errada" =
                "default";
              if (alternativaSelecionada !== null) {
                if (idx === alternativaSelecionada) {
                  alternativaStatus =
                    idx + 1 === question.alternativaCorreta
                      ? "correta"
                      : "errada";
                }
              }
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => handleAlternativaSelecionada(idx)}
                  style={[
                    styles.alternativaTouchable,
                    alternativaStatus === "correta" &&
                    styles.alternativaCorreta,
                    alternativaStatus === "errada" && styles.alternativaErrada,
                  ]}
                  disabled={alternativaSelecionada !== null}
                >
                  {!isVF && (
                    <View style={styles.alternativaLetraCircle}>
                      <Text style={styles.alternativaLetraText}>
                        {letras[idx]}
                      </Text>
                    </View>
                  )}
                  <Text
                    style={[
                      styles.alternativaText,
                      alternativaSelecionada === idx &&
                      styles.alternativaSelecionadaText,
                    ]}
                  >
                    {alt}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* ConfettiCannon só aparece se showConfetti for true */}
      {showConfetti && (
        <ConfettiCannon
          count={80}
          origin={{ x: 200, y: 0 }}
          fadeOut
          explosionSpeed={350}
          fallSpeed={2500}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
      <View style={styles.footerContainer}>
        <View style={styles.footerIcons}>
          <Trophy size={30} color={theme.colors.blue} />
          <Text style={styles.footerText}> +5</Text>
        </View>
        <View style={styles.footerIcons}>
          <Coins size={30} color={theme.colors.gold} />
          <Text style={styles.footerText}> +10</Text>
        </View>
        <View style={styles.footerIcons}>
          <Image source={iconePhi} style={{ width: 50, height: 50 }} />
          <Text style={styles.footerText}>+20xp</Text>
        </View>
      </View>
    </View>
  );
}
