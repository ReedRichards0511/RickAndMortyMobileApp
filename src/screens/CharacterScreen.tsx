import React from 'react'
import { View, Text, Image } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../router/AppRouter';

import MyBlur from '../components/MyBlur';

interface Props extends NativeStackScreenProps<RootStackParams, 'Character'> { };

const CharacterScreen = ({ navigation, route }: Props) => {

  const { characterInfo, color } = route.params;


  return (
    <>
      <MyBlur />
      <View style={{
        flex: 1,
        alignItems: 'center',
      }}>
        <Image
          source={{
            uri: characterInfo.image
          }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 20,
            marginTop: 40,
            marginBottom: 20,
            shadowColor: '#000',
          }}
        />
        <View>
          <Text style={{
            fontSize: 30,
            fontWeight: '700',
            marginBottom: 10,
          }}>{characterInfo.name}</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
        marginHorizontal: 25,
        marginTop: 50
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 10,
        }}>Status: </Text>
        <Text style={{
          fontSize: 18,
          fontWeight: '400',
          marginBottom: 10,
        }}>
          {characterInfo.status}
        </Text>
        <View style={{
          flex: 1,

        }}>
          <Image
            source={require('../assets/verde.png')}
            style={{
              width: 20,
              height: 20,
              display: 'flex',
              marginLeft: 50,
              marginTop: -30
            }}

          />
        </View>

      </View>
    </>
  )
}

export default CharacterScreen