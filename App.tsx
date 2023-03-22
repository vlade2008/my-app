import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import CreateOrder from './src/screen/CreateOrder';
import {DefaultTheme, Provider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CreateOrder />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
