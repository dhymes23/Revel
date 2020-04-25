import React from "react";
import { View, TouchableOpacity, Text } from "react-native";


// ///////////////////////////////////////////////////////////////////
// This component is a basic row, is exported and takes in as parameters:
//    children - All the items passed in in the <BasicRow>children</BasicRow> tags
//    style - Style object
// ///////////////////////////////////////////////////////////////////
export const BasicRow = ({ children, style = {} }) => (
  <View
    style={[
      {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10
      },
      style
    ]}
  >
    {children}
  </View>
);


// ///////////////////////////////////////////////////////////////////
// This component is a search item (which acts as a button), is exported
// and takes in as parameters:
//    onPress - A function to call when the item is pressed
//    name - Text to display on the button
// ///////////////////////////////////////////////////////////////////
export const SearchItem = ({ name , message }) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: "column",
      justifyContent: "space-between", marginTop:10
    }}
  >
  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#444" }}>{name}</Text>
  <Text style={{ fontSize: 15, marginTop:5, color: "#444" }}>{message}</Text>
  </TouchableOpacity>
);
