import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PerfilHeader from "../../components/PerfilHeader";
import theme from "../../assets/themes/THEMES";
import { BookOpen, CaretLeft, SlidersHorizontal } from "phosphor-react-native";
import QuestionPreview from "../../components/QuestionPreview";
import { useTypedNavigation } from "../../hooks/useNavigate";
import { mockQuestoes } from "../../Mocks/mockQuestoes";

export default function Questoes() {
  const navigation = useTypedNavigation();

  const handlePressQuestion = (question) => {
    navigation.navigate("DetalheQuestao", { question });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <PerfilHeader />

      <View style={{ gap: 10, margin: 15, borderRadius: 5 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: theme.colors.textLight,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <TouchableOpacity onPress={handleGoBack} style={{ width: 24 }}>
              <CaretLeft color={theme.colors.text} size={24} weight="bold" />
            </TouchableOpacity>
            <BookOpen weight="fill" color={theme.colors.primary} />
            <Text
              style={{
                color: theme.colors.text,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Questões
            </Text>
          </View>

          <TouchableOpacity style={{ width: 24 }}>
            <SlidersHorizontal
              color={theme.colors.text}
              size={24}
              weight="fill"
            />
          </TouchableOpacity>
        </View>

        <View style={{ gap: 10 }}>
          {mockQuestoes.map((question, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePressQuestion(question)}
            >
              <QuestionPreview
                color={question.color}
                code={question.code}
                title={question.title}
                description={question.description}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
