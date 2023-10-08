import React from "react";
import { View, FlatList, Dimensions } from "react-native";

import cars from "./cars";
import CarItem from "../CarItem";
import styles from "./styles";
import {  } from "react-native-web";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={cars} 
      renderItem={({ item }) => <CarItem car={item} />}
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
