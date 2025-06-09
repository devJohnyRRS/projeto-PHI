import { View, Text } from "react-native";
import React from "react";
import QuestionTag from "../QuestionTag";
import theme from "../../assets/themes/THEMES";

interface QuestionPreviewProps {
  color: string;
  code: string;
  title: string;
  description: string;
}

export default function QuestionPreview({
  color,
  code,
  title,
  description,
}: QuestionPreviewProps) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
        backgroundColor: theme.colors.textLight,
        gap: 5,
        borderRadius: 5,
      }}
    >
      <QuestionTag color={color} code={code} />

      <View style={{ marginBottom: 5 }}>
        <Text
          style={{ fontSize: 13, color: theme.colors.text, fontWeight: "bold" }}
        >
          {title}
        </Text>

        <Text numberOfLines={4} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </View>
  );
}
