import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";


// ///////////////////////////////////////////////////////////////////
// This component is the Search Bar, is exported and takes in as parameters:
//    onSearch - A function to call when the "Get Weather" button is pressed
//    searchButtonEnabled - Boolean for if the search button is enabled
//    ...props - Syntactic sugar to get the "rest of the properties" which
//                were passed in (in our case placeholder & onChangeText) and
//                are conveniently passed to the <TextInput /> control to be
//                used as that controls properties
// ///////////////////////////////////////////////////////////////////
export const SearchBar = ({
  onSearch,
  searchButtonEnabled = false,
  ...props
}) => (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#eee",
        alignItems: "center"
      }}
    >
    
      <TextInput
        style={{
          fontSize: 18,
          flex: 1
        }}
        {...props}
      />
      <TouchableOpacity onPress={onSearch} disabled={!searchButtonEnabled}>
        <Text
          style={{
            color: searchButtonEnabled ? "#147efb" : "rgba(0, 0, 0, 0.5)"
          }}
        >
          Save
      </Text>
      </TouchableOpacity>
    </View>
  );
