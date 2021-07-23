import React, { Component } from "react";
import { StyleSheet, Text, View , Platform, SafeAreaView, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from './PostCard.js'
import { FlatList } from "react-native-gesture-handler";


let posts = require("./temp_posts.json");

export default class Feed extends Component {



    renderItem = ({ item: post }) => {
        return <PostCard post={post} />;
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
             <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              /> 
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appTitleText: {
    color: "black",
    fontFamily: "Bubblegum-Sans",
    fontSize:50,
    fontWeight:"bold"
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  cardContainer: {
    flex: 0.85
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
});
