// File for the use of APIs
import { handleBarCodeScanned } from "./screens/ScanItem";

var ScanData = handleBarCodeScanned.data;
function getAPIdata() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
  const api_key = "gjrbqo5fx5he0qduwddhjn58vfpotr";
  const url =
    proxyurl +
    "https://api.barcodelookup.com/v2/products?barcode=" +
    ScanData +
    "&formatted=y&key=" +
    api_key;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("BarcodeNumber").innerHTML =
        data.products[0].barcode_number;
      document.getElementById("ProductName").innerHTML =
        data.products[0].product_name;
      document.getElementById("EntireResponse").innerHTML = JSON.stringify(
        data,
        null,
        "<br/>"
      );
    })

    .catch(err => {
      throw err;
    });
}
export default { ScanData };
