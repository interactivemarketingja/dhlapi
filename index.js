const myHeaders = new Headers();
myHeaders.append("Message-Reference", "SOME_STRING_VALUE");
myHeaders.append("Message-Reference-Date", "SOME_STRING_VALUE");
myHeaders.append("Plugin-Name", "SOME_STRING_VALUE");
myHeaders.append("Plugin-Version", "SOME_STRING_VALUE");
myHeaders.append("Shipping-System-Platform-Name", "SOME_STRING_VALUE");
myHeaders.append("Shipping-System-Platform-Version", "SOME_STRING_VALUE");
myHeaders.append("Webstore-Platform-Name", "SOME_STRING_VALUE");
myHeaders.append("Webstore-Platform-Version", "SOME_STRING_VALUE");
myHeaders.append("x-version", "SOME_STRING_VALUE");
myHeaders.append("Authorization", "Basic REPLACE_BASIC_AUTH");
 www
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api-mock.dhl.com/mydhlapi/rates?accountNumber=SOME_STRING_VALUE&originCountryCode=SOME_STRING_VALUE&originCityName=SOME_STRING_VALUE&destinationCountryCode=SOME_STRING_VALUE&destinationCityName=SOME_STRING_VALUE&weight=SOME_NUMBER_VALUE&length=SOME_NUMBER_VALUE&width=SOME_NUMBER_VALUE&height=SOME_NUMBER_VALUE&plannedShippingDate=SOME_STRING_VALUE&isCustomsDeclarable=SOME_BOOLEAN_VALUE&unitOfMeasurement=SOME_STRING_VALUE", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
