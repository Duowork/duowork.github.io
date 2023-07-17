let userCountryName: string | undefined;
let userCountryCode: string | undefined;
let userLanguage: string | undefined;
let locationNotLocatedOrSupported: boolean;

if (typeof window != "undefined" && !window.navigator.geolocation) {
  locationNotLocatedOrSupported = true;
}

if (typeof window != "undefined" && window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, (error) => {
    locationNotLocatedOrSupported = true;
  });
}

function showPosition(position: any) {
  let longitude = position.logitude;
  let latitude = position.latitude;
  let APIURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude${longitude}&localityLanguage=en`;

  // Make API request to fetch user location
  fetch(APIURL)
    .then((res) => res.json())
    .then((data) => {
      // User location request successful
      locationNotLocatedOrSupported = false;

      userCountryName = data.countryName;
      userCountryCode = data.countryCode;
      userLanguage = data.localityLanguageRequested;
    })
    .catch((error) => (locationNotLocatedOrSupported = true));
}