import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import SessionTitle from "./components/SessionTitle";
import CardFilme from "./components/CardFilme";

export default function App() {
  return (
    <View style={styles.container}>
      <SessionTitle>Filmes em Alta</SessionTitle>
      
      <CardFilme nota={8.9}  poster={{uri:'https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg'}}/>
      <CardFilme nota={6.7} poster={{uri:'https://www.themoviedb.org/t/p/w220_and_h330_face/mbYQLLluS651W89jO7MOZcLSCUw.jpg'}}/>
      <CardFilme nota={8.0} poster={{uri:'https://www.themoviedb.org/t/p/w220_and_h330_face/jGtBLu0JAKf5JxhWgmF68HROzCA.jpg'}}/>
      
     
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