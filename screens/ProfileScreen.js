import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

import Camera from "../assets/icons/camera1-f-svgrepo-com.svg";
import * as ImagePicker from "expo-image-picker";

import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import { SelectCountry } from "react-native-element-dropdown";

import blankProfile from "../assets/blankProfile.webp";
import EyeOpen from "../assets/icons/eye-svgrepo-com.png";
import EyeClosed from "../assets/icons/eye-closed-duotone-svgrepo-com.png";

export default function ProfileScreen() {
  // image picker
  const [selectedImage, setSelectedImage] = useState(blankProfile);

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

  // country dropdown
  const [country, setCountry] = useState("1");

  const local_data = [
    {
      value: "1",
      lable: "Indonesia",
      image: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png",
      },
    },
    {
      value: "2",
      lable: "Other ...",
    },
  ];

  // password secure entry
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const showHideIcon = () => {
    return isSecureEntry ? EyeOpen : EyeClosed;
  };

  // date
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const [dateFormatted, setDateFormatted] = useState(
    format(date, "dd/MM/yyyy")
  );

  useEffect(() => {
    setDateFormatted(format(date, "dd/MM/yyyy"));
  }, [date]);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          color: "#8EB44F",
          fontSize: 27,
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        Edit Profile
      </Text>

      <ScrollView
        style={{
          flex: 1,
          width: "80%",
          alignContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={selectedImage}
            style={{
              width: 200,
              height: 200,
              top: 0,
              borderColor: "lightgrey",
              borderWidth: 10,
              borderRadius: 130,
              alignSelf: "center",
            }}
          />
          {/* camera  */}
          <View
            style={{
              position: "absolute",
              bottom: 10,
              backgroundColor: "lightgrey",
              borderRadius: 30,
              width: 60,
              height: 60,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              right: 55,
              padding: 7,
            }}
          >
            <Camera width={40} height={45}></Camera>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: "110%",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <View style={{ marginVertical: 5 }}>
              <Text style={styles.inputHeading}>Name</Text>
              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Lorem ipsum"
                  placeholderTextColor={"#544C4C"}
                  style={styles.input}
                ></TextInput>
              </View>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text style={styles.inputHeading}>E-mail</Text>
              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Lorem ipsum"
                  placeholderTextColor={"#544C4C"}
                  style={styles.input}
                ></TextInput>
              </View>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text style={styles.inputHeading}>Password</Text>
              <View>
                <View
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    padding: 10,
                    borderColor: "lightgrey",
                    width: "75%",
                  }}
                >
                  <TextInput
                    placeholder="..."
                    placeholderTextColor={"#544C4C"}
                    style={styles.input}
                    secureTextEntry={isSecureEntry}
                  ></TextInput>
                  <TouchableOpacity
                    onPress={() => {
                      setIsSecureEntry((prev) => !prev);
                    }}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        right: -250,
                        marginTop: -30,
                      }}
                      source={showHideIcon()}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text style={styles.inputHeading}>Date of Birth</Text>
              <View style={styles.textInputView}>
                <Text style={styles.selectedTextStyle}>{dateFormatted}</Text>
              </View>
              <TouchableOpacity
                style={{ marginTop: 6 }}
                onPress={() => {
                  if (!showDatePicker) {
                    setShowDatePicker(true);
                  }
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#DAAF53",
                    borderRadius: 10,
                    height: 40,
                    width: "90%",
                    elevation: 3,
                    shadowColor: "#415224",
                    shadowRadius: 3.5,
                    shadowOpacity: 0.25,
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    CHANGE DATE OF BIRTH
                  </Text>
                </View>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>

            <View style={{ marginVertical: 5 }}>
              <Text style={styles.inputHeading}>Country</Text>
              <View style={styles.textInputView}>
                <SelectCountry
                  style={styles.dropdown}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholderStyle={styles.placeholderStyle}
                  imageStyle={styles.imageStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  search
                  maxHeight={200}
                  value={country}
                  data={local_data}
                  valueField="value"
                  labelField="lable"
                  imageField="image"
                  placeholder="Select country"
                  searchPlaceholder="Search..."
                  onChange={(e) => {
                    setCountry(e.value);
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 20, marginBottom: 180 }}>
          <View
            style={{
              backgroundColor: "#8EB44F",
              borderRadius: 20,
              height: 70,
              elevation: 3,
              shadowColor: "#415224",
              shadowRadius: 3.5,
              shadowOpacity: 0.25,
              shadowOffset: {
                width: 0,
                height: 10,
              },

              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 24 }}>
              SAVE CHANGES
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    top: 45,
  },

  textInputView: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgrey",
    width: "90%",
  },

  input: {
    height: 30,
    color: "#000",
  },

  inputHeading: {
    fontWeight: "bold",
    marginVertical: 5,
  },

  dropdown: {
    margin: 16,
    height: 50,
    borderColor: "gray",
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#544C4C",
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 8,
    color: "#544C4C",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 14,
  },
});
