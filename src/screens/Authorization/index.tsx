import React, { FC, useEffect, useState } from 'react';
import { Alert, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { postAuth, postRegistration } from '@/store/reducers/authReducer';
import { useAppDispatch } from '@/hooks/redux';
import { background } from '@/constants/images';
import { FbAuthSVG } from '@/assets/svg';
import { scale } from '@/constants/scale';
import { Colors } from '@/constants/colors';

import { styles } from './styles';

export const Authorization: FC<ScreenNavigatorProps<Keys.Authorization>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

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
    if (signIn) {
      dispatch(postAuth({ email, password, navigation }));
    } else {
      dispatch(postRegistration({ email, password, navigation }));
    }
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', 'rgba(243,233,216,0.79)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.88 }}
        style={styles.gradientBgnd}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.labelWrap}>
          <Text style={styles.labelTitle}>{'CoffeTime'}</Text>
          <Text style={styles.labelSubTitle}>{'территория кофе'}</Text>
        </View>
        <View style={styles.authWrap}>
          {!signIn && !register && (
            <>
              <TouchableOpacity style={styles.signInWrap} activeOpacity={0.9} onPress={() => setSignIn(true)}>
                <Text style={styles.signInTitle}>{'Войти'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.registerWrap} activeOpacity={0.9} onPress={() => setRegister(true)}>
                <Text style={styles.registerTitle}>{'Зарегистрироваться'}</Text>
              </TouchableOpacity>
            </>
          )}
          {(signIn || register) && (
            <>
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChange={onInputEmail}
                  placeholder={'Email'}
                  placeholderTextColor={Colors.white5}
                />
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChange={onInputPassword}
                  placeholder={'Password'}
                  placeholderTextColor={Colors.white5}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={styles.signInWrap} activeOpacity={0.9} onPress={onSubmit}>
                <Text style={styles.registerTitle}>{'Далее'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnFbWrap, { marginTop: scale(16) }]}
                activeOpacity={0.9}
                onPress={fbSignIn}>
                <FbAuthSVG width={scale(13)} height={scale(26)} />
                <Text style={styles.btnFbTitle}>{'Войти через Facebook'}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
