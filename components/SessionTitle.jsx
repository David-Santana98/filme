import { StyleSheet, Text } from "react-native";

export default function SessionTitle({children}) {
    return <Text style={styles.title}>{children}</Text>;
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