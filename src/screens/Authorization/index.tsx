import React, { FC, useEffect, useState } from 'react';
import { Alert, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';

import { styles } from './styles';
import { postAuth } from '@/store/reducers/authReducer';
import { useAppDispatch } from '@/hooks/redux';
import { background } from '@/constants/images';
import { FbAuthSVG } from '@/assets/svg';
import { scale } from '@/constants/scale';

export const Authorization: FC<ScreenNavigatorProps<Keys.Authorization>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Settings.setAppID('6078139095562184');
  }, []);

  const onInputEmail = (event: any) => {
    setEmail(event.nativeEvent.text);
  };

  const onInputPassword = (event: any) => {
    setPassword(event.nativeEvent.text);
  };

  const fbSignIn = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile']);
      if (result.isCancelled) {
        Alert.alert('Отменено пользователем', 'Отменено пользователем!!!');
      } else {
        const response = await AccessToken.getCurrentAccessToken();
        console.log('response', response);
        if (response) {
          dispatch(
            postAuth({ email: response.userID?.toString(), password: response.accessToken?.toString(), navigation }),
          );
        }
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('Ошибка авторизации', 'Попробуйсте еще раз');
    }
  };

  const onSubmit = () => {
    dispatch(postAuth({ email, password, navigation }));
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', 'rgba(243,233,216,0.79)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.88 }}
        style={styles.gradientBgnd}>
        <SafeAreaView style={styles.container}>
          <View style={styles.labelWrap}>
            <Text style={styles.labelTitle}>{'CoffeTime'}</Text>
            <Text style={styles.labelSubTitle}>{'территория кофе'}</Text>
          </View>
          <View style={styles.authWrap}>
            <TouchableOpacity style={styles.btnFbWrap} activeOpacity={0.9} onPress={fbSignIn}>
              <FbAuthSVG width={scale(13)} height={scale(26)} />
              <Text style={styles.btnFbTitle}>{'Войти через Facebook'}</Text>
            </TouchableOpacity>
            {/*<Text style={styles.title}>{'Authorization Screen'}</Text>*/}
            {/*<View>*/}
            {/*  <Text>Email</Text>*/}
            {/*  <TextInput value={email} onChange={onInputEmail} />*/}
            {/*</View>*/}
            {/*<View>*/}
            {/*  <Text>Password</Text>*/}
            {/*  <TextInput value={password} onChange={onInputPassword} />*/}
            {/*</View>*/}
            {/*<TouchableOpacity activeOpacity={0.8} onPress={onSubmit}>*/}
            {/*  <Text style={styles.title}>{'ON SUBMIT'}</Text>*/}
            {/*</TouchableOpacity>*/}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};
