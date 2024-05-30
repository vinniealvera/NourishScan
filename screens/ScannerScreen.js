import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Camera from "../assets/icons/camera1-f-svgrepo-com.svg";
import * as ImagePicker from "expo-image-picker";

import NourishScanLogo from "../assets/NourishScanLogo_Color.png";
import notUploaded from "../assets/Misc/notUploaded.png";
import cameraScan from "../assets/icons/cameraScan.png";
import warning from "../assets/icons/Warning.png";

export default function ScannerScreen(props) {
  // change image view
  const [pictureUploaded, setPictureUploaded] = useState(false);

  // image uploader
  const [selectedImage, setSelectedImage] = useState(notUploaded);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      const uri = result.assets[0].uri;
      setSelectedImage({ uri });
      console.log({ uri });
    }
  };

  // toggle toast
  const [foodRecognized, setFoodRecognized] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={NourishScanLogo} style={styles.logo} />
      <Text style={styles.textHeader}>Food Scanner</Text>
      <View style={{ width: "75%", marginTop: 15 }}>
        {foodRecognized === null && (
          <Text style={styles.caption}>
            Upload an image from your gallery or take an image with your camera
            to get started.
          </Text>
        )}

        {foodRecognized === false && (
          <View style={styles.toast}>
            <Image style={styles.toastImage} source={warning} />
            <Text style={styles.toastText}>
              <Text style={{ fontWeight: "bold" }}>Cannot recognize food!</Text>
              {"\n"}
              Please try again.
            </Text>
          </View>
        )}
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        {/* upload image touchable */}
        <TouchableOpacity onPress={pickImage}>
          <Image source={selectedImage} style={styles.upload}></Image>
        </TouchableOpacity>

        {/* camera button */}
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.cameraButton}>
            <Image source={cameraScan}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },

  logo: {
    marginTop: 100,
    width: "11%",
    height: "5.8%",
  },

  cameraButton: {
    marginTop: 20,
    paddingHorizontal: "22%",
    height: "31.5%",

    backgroundColor: "#DAAF53",
    borderRadius: 25,

    elevation: 4,

    shadowColor: "#695323",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  upload: {
    width: 378,
    height: 341,

    borderRadius: 20,

    elevation: 4,

    shadowColor: "#695323",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 13,
  },

  caption: {
    textAlign: "center",
    color: "#544C4C",
    fontSize: 16,
  },

  toast: {
    marginTop: -10,
    padding: 10,

    borderRadius: 12,

    flexDirection: "row",
    backgroundColor: "#FFDFDA",

    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

    elevation: 4,

    shadowColor: "#771F1E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  toastImage: {},

  toastText: {
    marginHorizontal: 5,
    color: "#D43E3C",
    fontSize: 18,
  },
});
