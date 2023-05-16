import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes em Alta</Text>
      <Text style={styles.title}>Melhores dramas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    borderLeftColor: '#f06',
    borderLeftWidth: 5,
    padding: 5,
    lineHeight: 16,
     }
});
