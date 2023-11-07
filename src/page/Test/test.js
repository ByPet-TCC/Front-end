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
