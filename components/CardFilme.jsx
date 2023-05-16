import { Image, StyleSheet, Text, View } from "react-native";

export default function CardFilme () {
    return (

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
    )
}

const styles = StyleSheet.create({
  poster: {
    height: 180,
    width: 120,
    borderRadius: 5,
  },
  card: {
         backgroundColor: '#141414',
         width: 120,
         borderRadius: 5,
         margin: 16,
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
