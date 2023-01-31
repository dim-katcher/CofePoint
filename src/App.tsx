import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { WithSplashScreen } from '@/screens';
import { AppStackNavigator } from '@/navigation/AppStackNavigator';
import { persistor, store } from '@/store/store';

function App(): JSX.Element {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppStackNavigator />
        </PersistGate>
      </Provider>
    </WithSplashScreen>
  );
}

export default App;
