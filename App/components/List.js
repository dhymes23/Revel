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
export const SearchItem = ({ name, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <Text style={{ fontSize: 18, color: "#444" }}>{name}</Text>
  </TouchableOpacity>
);
