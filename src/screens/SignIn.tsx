import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React from 'react'
import MyBlur from '../components/MyBlur'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = ({ navigation }: any) => {

  const { height } = Dimensions.get('window')

  return (
    <>
      <MyBlur />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Hello again!</Text>
            <Text style={styles.body}>Ingresa para ver a tus personajes! </Text>

            <TextInput
              style={styles.input}
              placeholder='Enter Email'
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              autoCorrect={false}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text style={[styles.buttonText, { fontWeight: 'bold', lineHeight: 30, textAlign: 'right' }]}>Recuperar Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton}>

              <Text style={{ color: 'white', fontWeight: 'bold' }}>Ingresar</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center' }}>O continua con: </Text>


            <View style={styles.buttonContainer} >
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1}>
              <Image
                  source={{
                    uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png',
                  }}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1}>
              <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
                  }}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.button2}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity> */}
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147'
  },
  body: {
    padding: 20,
    fontSize: 30,
    marginBottom: 20,
    lineHeight: 35,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147'
  },
  buttonText: {
    fontWeight: '500',
    color: '#353147'
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    padding: 16,
    marginHorizontal:5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
   
    backgroundColor: '#DFE3E630',
    marginTop: 40
  },
  input: {
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10
  },
  signInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32
  }
})