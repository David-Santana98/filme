import { Text } from "react-native";

export default function SessionTitle() {
    return <Text style={styles.title}>Filmes em Alta</Text>;
}

const styles = StyleSheet.create({
    title: {
    color: '#FFF',
    fontSize: 16,
    borderLeftColor: '#f06',
    borderLeftWidth: 5,
    padding: 5,
    lineHeight: 16,
     },
})