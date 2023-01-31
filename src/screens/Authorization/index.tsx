import React, { FC, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';

import { styles } from './styles';
import { postAuth } from '@/store/reducers/authReducer';
import { useAppDispatch } from '@/hooks/redux';

export const Authorization: FC<ScreenNavigatorProps<Keys.Authorization>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };

  const onInputEmail = (event: any) => {
    setEmail(event.nativeEvent.text);
  };

  const onInputPassword = (event: any) => {
    setPassword(event.nativeEvent.text);
  };

  const onSubmit = () => {
    dispatch(postAuth({ email, password, navigation }));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[viewStyle, styles.container]}>
        <Text style={styles.title}>{'Authorization Screen'}</Text>
        <View>
          <Text>Email</Text>
          <TextInput value={email} onChange={onInputEmail} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput value={password} onChange={onInputPassword} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={onSubmit}>
          <Text style={styles.title}>{'ON SUBMIT'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
