import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../types/MainStackList";

export function useTypedNavigation() {
  return useNavigation<StackNavigationProp<MainStackParamList>>();
}