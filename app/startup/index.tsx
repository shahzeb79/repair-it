import React, { useEffect } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function StartupScreen() {
  const router = useRouter();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate to Home after 3 seconds
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity }}>
        <Image
          source={require("../../assets/images/splash.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
