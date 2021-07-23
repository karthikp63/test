import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                    <View style = {styles.authorContainer}>
                        <View style = {styles.authorNameContainer}>
                            <Text style = {styles.authorNameText}>{this.props.post.name}</Text>
                        </View>
                        <View style = {styles.authorImageContainer}>
                            <Image source = {require("../assets/profile_picture.png")} style={{width: 100, height: 100}}/>
                        </View>
                        
                    </View>
                    <Image source = {require("../assets/post.jpeg")} style = {styles.postImage}/>
                    <View style = {styles.captionContainer}>
                        <Text style = {styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style = {styles.actionContainer}>
                        <View style = {styles.likeButton}>
                            <Ionicons name = {"heart"} size = {RFValue(10)} color = {"white"}/>
                            <Text style = {styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20),
      height:250
    },
    authorImageContainer: {
      //resizeMode: "contain",
      width: 400,
      //alignSelf: "center",
      //height: RFValue(100)
    },
    authorContainer: {
      flexDirection: 'row',
      //justifyContent: "flex-start",
    },
    authorNameContainer: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "black",
      marginLeft:30,
      marginTop:10
    },
    authorNameText: {
      //justifyContent: 'flex-start',
      fontSize: 24,
      color: 'white'
    },
    captionText: {
      fontSize: RFValue(11),
      fontFamily: "Bubblegum-Sans",
      color: "white",
      marginTop:20,
      marginLeft:20 
    },
    // caption: {
    //   fontFamily: "Bubblegum-Sans",
    //   fontSize: 13,
    //   color: "white",
    //   paddingTop: RFValue(10)
    // },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10),
      marginBottom:10
    },
    likeButton: {
      width: RFValue(60),
      height: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30),
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: 40,
      marginLeft: RFValue(5)
    }
  });
  