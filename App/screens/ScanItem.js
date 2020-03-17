// Screen for scanning items
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        onBarCodeRead = {getAPIdata()}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
var ScanData = handleBarCodeScanned.data 
function getAPIdata() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
  const api_key = "gjrbqo5fx5he0qduwddhjn58vfpotr";
  const url = proxyurl + "https://api.barcodelookup.com/v2/products?barcode=" + ScanData + "&formatted=y&key=" + api_key;
  fetch(url)
          .then(response => response.json())
          .then((data) => {
     document.getElementById("BarcodeNumber").innerHTML = (data.products[0].barcode_number);
document.getElementById("ProductName").innerHTML = (data.products[0].product_name);
document.getElementById("EntireResponse").innerHTML = JSON.stringify(data, null,"<br/>");
          })
          
          .catch(err => { 
              throw err 
          });
        }
}
