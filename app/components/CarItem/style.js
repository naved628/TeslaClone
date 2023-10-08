import { StyleSheet, Dimensions } from "react-native";

const styles= StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
      },
      title: {
        fontSize: 40,
        marginBottom: "4",
        fontWeight: "500",
      },
      subtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "gray",
      },
      subtitleCTA:{
        textDecorationLine:'underline'
      },
      buttonContainer:{
        position:'absolute',
        bottom:100,
        width:'100%'
      }
});

export default styles;