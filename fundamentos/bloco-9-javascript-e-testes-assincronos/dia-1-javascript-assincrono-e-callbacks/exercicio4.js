const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback) => {
    return `Mars temperature is: ${callback} degree Celsius`;
}

setTimeout(() => console.log(sendMarsTemperature(getMarsTemperature())),5000);