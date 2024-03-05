const convertToCelsius = function(temp) {

  let celsTemp = ( (temp - 32) * ( 5/9 ));
  
  if (Number.isInteger(celsTemp)) {
    return parseInt(celsTemp);
  } else {
    return parseFloat(celsTemp.toFixed(1));
  }
  
  


};

const convertToFahrenheit = function(temp) {
  
  let fahrTemp = ( (temp * ( 9/5 )) + 32 );

  if (Number.isInteger(fahrTemp)) {
    return parseInt(fahrTemp);
  } else {
    return parseFloat(fahrTemp.toFixed(1));
  }

  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
