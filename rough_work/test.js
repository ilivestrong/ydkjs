const stripOffCountryCodeFromMobile = function stripper(mobile, countryCode) {
  if (mobile.indexOf("0") === 0) {
    return mobile.slice(1);
  } else {
    let ccIndex = mobile.indexOf("66");
    if(ccIndex !== -1 && countryCode === "66") {
      return mobile.slice(2);
    }
  }
  return mobile; 
};

console.log(stripOffCountryCodeFromMobile("668912888", "0"));
console.log(stripOffCountryCodeFromMobile("0891288812", "0"));
console.log(stripOffCountryCodeFromMobile("0891288812>>>", "66"));
console.log(stripOffCountryCodeFromMobile("66891288812", "166"));