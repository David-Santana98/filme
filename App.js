import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SessionTitle from './components/SessionTitle';

export default function App() {
  return (
    <View style={styles.container}>
      <SessionTitle>Filmes em Alta</SessionTitle>

      <SessionTitle>Melhores Dramas</SessionTitle>
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

});
