import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import SessionTitle from "./components/SessionTitle";

export default function App() {
  return (
    <View style={styles.container}>
      <SessionTitle>Filmes em Alta</SessionTitle>

      <View style={styles.card}>
        <Image
          style={styles.poster}
          source={{
            uri: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg",
          }}
        ></Image>
        <View style={styles.data}>
          <Text>⭐</Text>
          <Text style={styles.nota}>8.9</Text>
        </View>
      </View>

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
  poster: {
    height: 180,
    width: 120,
    borderRadius: 5,
  },
  data: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  nota: {
    color: '#fff',
    marginLeft: 8
  }
});
