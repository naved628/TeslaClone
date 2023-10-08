import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CarItem from "./components/CarItem";

export default function Page() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless Delivery"}
        image={require("../assets/images/Model3.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});