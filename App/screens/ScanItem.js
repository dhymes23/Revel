// Screen for scanning items
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getIngredients } from "../util/LocalStorage";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    //const api_key = "qnmg0uawol3ma645c030jiy8xrmlqk";
    const api_key = "gjrbqo5fx5he0qduwddhjn58vfpotr";
    const url =
      "https://api.barcodelookup.com/v2/products?barcode=" +
      data +
      "&formatted=y&key=" +
      api_key;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var barcode_number = data.products[0].barcode_number;
        var product_name = data.products[0].product_name;
        var category = data.products[0].category;
        var ingredients = data.products[0].ingredients;
        var entire_response = JSON.stringify(data, null, "<br/>");
        var hazardous = false;
        getIngredients().then(list => {
          // console.log(recentSearch);
          if (list.length != 0) {
            var arrayLength = list.length;
            for (var i = 0; i < arrayLength; i++) {
              if (entire_response.includes(list[i].ingredients) == true) {
                // alert(`"${product_name}" contains your blacklisted ingredients and is hazardous for you.`);
                hazardous = true;
                navigation.navigate("FoodInfo", {
                  barcode_number:barcode_number,
                  name: product_name,
                  category: category,
                  ingredients: ingredients,
                  hazardous: true
                });

                break;
              }
            }
          }
        });
        navigation.navigate("FoodInfo", {
          barcode_number:barcode_number,
          name: product_name,
          category: category,
          ingredients: ingredients,
          hazardous: false
        });
      })

      .catch(err => {
        alert(`Error Fetching Product. The api call limit might be reached.`);
        throw err;
      });
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
