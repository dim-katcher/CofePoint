import React, { useEffect, useState } from 'react';
import { SafeAreaView, useColorScheme, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { WithSplashScreen } from './screens/Splash';

function App(): JSX.Element {
  const [isAppReady, setIsAppReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <SafeAreaView style={backgroundStyle}>
        <View style={[viewStyle, styles.view]}>
          <Text style={styles.title}>{'Initial Screen'}</Text>
        </View>
      </SafeAreaView>
    </WithSplashScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
