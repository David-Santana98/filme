import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import SessionTitle from "./components/SessionTitle";
import CardFilme from "./components/CardFilme";

export default function App() {
  return (
    <View style={styles.container}>
      <SessionTitle>Filmes em Alta</SessionTitle>
      
      <CardFilme nota={8.9}/>
      <CardFilme nota={6.7}/>
      <CardFilme nota={8.0}/>
      
     
      <SessionTitle>Melhores Dramas</SessionTitle>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#212121",
    justifyContent: "center",
  },
})