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