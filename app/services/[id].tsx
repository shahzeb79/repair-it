import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Service ID: {id}</Text>
    </View>
  );
}