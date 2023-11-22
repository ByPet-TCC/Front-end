import React from 'react';
import { View, FlatList, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const Test = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  if (data && data.length) {
    return (
      <View>
        <FlatList data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: width }}>
                <Image source={require('../Test/imagem.png')} style={{width: 1000}}/><Image source={require('../Test/imagem1.png')}/><Image source={require('../Test/imagem2.png')}/>
              </View>
            );
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
          ])}
        />
      </View>
    );
  }

  return null;
}

export default Test;
//  {"_tokenResponse": {"displayName": "Eduardo Euflausino", "email": "eduardo.didax@hotmail.com", "expiresIn": "3600", 
// "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE2YzYzNTNmMmEzZWMxMjg2NTA1MzBkMTVmNmM0Y2Y0NTcxYTQ1NTciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRWR1YXJkbyBFdWZsYXVzaW5vIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2J5LXBldC1uYXRpdmUiLCJhdWQiOiJieS1wZXQtbmF0aXZlIiwiYXV0aF90aW1lIjoxNzAwNjEyNjM5LCJ1c2VyX2lkIjoiMzhjWDI3aEdyclV5SkR0elREWmQ5YTBaN2dGMyIsInN1YiI6IjM4Y1gyN2hHcnJVeUpEdHpURFpkOWEwWjdnRjMiLCJpYXQiOjE3MDA2MTI2MzksImV4cCI6MTcwMDYxNjIzOSwiZW1haWwiOiJlZHVhcmRvLmRpZGF4QGhvdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVkdWFyZG8uZGlkYXhAaG90bWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VV9giTBuK4rCc63-gL6wUe-FVghfOIDjbeblNRUj4TvFqETZfGEX9y_ozSRpM2Lsc1Tm6JKRdZfB0MUCRnfMT5506dZCQAtSMMprTPur9x9ASaulNOXbotQ3YgnKCFI-MB_iAcel2f2aeU8IsA0PTI8tusUwUQvSDtGskEl-nH9RVX2hYXkIoSmlebTohY0Jjim2SQ7RiPhipwlCqYrrH16XkAjZxOKcI4BTcO9bMrLpPhNSUY-eeLKKVkDML4KVJlBUTW_1aigUwm8zlUCe-tfLEIBr4taFNsU0QtENVTFikp6MaNwXbvWzy1MddohJzjDq4lIE54QmZHdYp_8y8g", 
// "kind": "identitytoolkit#VerifyPasswordResponse", "localId": "38cX27hGrrUyJDtzTDZd9a0Z7gF3", "refreshToken": "AMf-vBxKFEFtKawJ-NPGT_wxuKiE7ub3wX9HWiQfMU8CVyfC6xBuggLedXGXt3M_7nAvfJ8U5LnRIdtr_VplAPte_8gt-2_rwJPviNGDW6z_AztaCyGVandjSGIsqA0rwtpuWvOYhU5itUBrR23ihYZ5IYZvFrx5tTjr3Aun9Sdr6wFuvdNu_F2HYl-Q5ZgPj7HiMzIhf-NIvkuMrIeAzqnwpUc2cYzi7P0qqrm03Qt6CBlxGewkjuw", "registered": true}, "operationType": "signIn", "providerId": null, "user": {"_redirectEventId": undefined, "apiKey": "AIzaSyD2gzgBos19WdkaMgBRPNMr_SytZh_3Ero", "appName": "[DEFAULT]", "createdAt": "1700580151993", "displayName": "Eduardo Euflausino", "email": "eduardo.didax@hotmail.com", "emailVerified": false, "isAnonymous": false, "lastLoginAt": "1700612548525", "phoneNumber": undefined, "photoURL": undefined, "providerData": [Array], "stsTokenManager": [Object], "tenantId": undefined, "uid": "38cX27hGrrUyJDtzTDZd9a0Z7gF3"}}