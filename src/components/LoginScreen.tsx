import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    if (email === 'Email' && name === 'Name' && password === 'Pass') {
      navigation.navigate('Dashboard');
    } else {
      navigation.navigate('Dashboard');
      // alert('Invalid credentials');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../logo/logo.png')} />
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.or}>
          <Text
            style={{width: 100, height: 2, backgroundColor: 'black'}}></Text>
          <Text style={{fontSize: 20}}>or</Text>
          <Text
            style={{width: 100, height: 2, backgroundColor: 'black'}}></Text>
        </View>
        <Pressable onPress={handleLogin}>
          <Text style={styles.signBtn}>SIGN UP</Text>
        </Pressable>
        <Text style={styles.signIn}>Sign in with Google</Text>
        <Text>
          Already have an account?{' '}
          <Text style={{fontWeight: 'bold'}}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 8,
    borderRadius: 4,
  },
  signBtn: {
    height: 50,
    width: 300,
    fontSize: 20,
    paddingVertical: 15,
    margin: 10,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  signIn: {
    height: 50,
    width: 240,
    fontSize: 18,
    paddingVertical: 10,
    margin: 10,
    textAlign: 'center',
    borderWidth: 2,
    borderColor:'green',
    borderRadius: 4,
    fontWeight:"bold",
  },
  or:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
});
export default LoginScreen;
