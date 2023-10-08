import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header/>
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
