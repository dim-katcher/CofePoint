import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={viewStyle}>
          <Text style={styles.title}>{'Initial Screen'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
