import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const services = [
  { id: "1", name: "Plumbing" },
  { id: "2", name: "Electrician" },
  { id: "3", name: "Car Repair" },
];

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Available Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.navigate(`./${item.id}`)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}