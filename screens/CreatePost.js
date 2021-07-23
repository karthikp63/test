import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { RFValue } from "react-native-responsive-fontsize";


export default class CreatePost extends Component {
constructor(props){
  super(props);
  this.state={
    previewImage:"image_1",
    dropdownHeight:40
  }
}

  render() {
    let preview_images = {
      image_1: require("../assets/background1.jpg"),
      image_2: require("../assets/background2.jpg"),
      image_3: require("../assets/background3.jpg"),
      image_4: require("../assets/background4.jpg"),
      image_5: require("../assets/background5.jpg")
    }
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image
          source={preview_images[this.state.previewImage]}
          style={styles.previewImage}
        />
        <View style={{ height: RFValue(this.state.dropdownHeight) }}>
          <DropDownPicker
            items={[
              { label: "Image 1", value: "image_1" },
              { label: "Image 2", value: "image_2" },
              { label: "Image 3", value: "image_3" },
              { label: "Image 4", value: "image_4" },
              { label: "Image 5", value: "image_5" }
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{
              height: 40,
              borderRadius: 20,
              marginBottom: 10
            }}
            onOpen={() => {
              this.setState({ dropdownHeight: 170 });
            }}
            onClose={() => {
              this.setState({ dropdownHeight: 40 });
            }}
            style={{ backgroundColor: "transparent" }}
            itemStyle={{
              justifyContent: "flex-start"
            }}
            dropDownStyle={{ backgroundColor: "#2a2a2a" }}
            labelStyle={{
              color: "black",
            }}
            arrowStyle={{
              color: "black",
            }}
            onChangeItem={item =>
              this.setState({
                previewImage: item.value
              })
            }
          />
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  previewImage: {
    width: "50%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  
});
