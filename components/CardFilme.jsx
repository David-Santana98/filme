import { Image, StyleSheet, Text, View } from "react-native";

export default function CardFilme (props) {
    return (

         <View style={styles.card}>
        <Image
          style={styles.poster}
          source={props.poster}
        ></Image>
        <View style={styles.data}>
          <Text>⭐</Text>
          <Text style={styles.nota}>{props.nota}</Text>
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
