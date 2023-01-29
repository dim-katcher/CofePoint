import React, { useEffect, useState } from 'react';

import { WithSplashScreen } from '@/screens';
import { AppStackNavigator } from '@/navigation/AppStackNavigator';

function App(): JSX.Element {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <AppStackNavigator />
    </WithSplashScreen>
  );
}

export default App;
