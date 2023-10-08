import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CarsList from "./components/CarsList";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <CarsList />
        <StatusBar style="auto" />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
