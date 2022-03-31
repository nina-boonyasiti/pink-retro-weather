// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Weather from './comp/Weather';
import { API_KEY } from './utils/NotThePinkWeatherAPIKey';
// import weatherCondition from './components/WeatherConditions';


// { <Weather weather={weatherCondition} temperature={temperature}/> 


export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  fetchWeather(lat = 25, on = 25) {
    fetch (
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false
      });
    });
  }
  
  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text style={styles.baseText}>
              Welcome to Pink
          </Text>
        ) : (
          <View>
            <Text style={styles.subText}>
              Loading the weather...
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBBEEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#817D80", 
  },
  subText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#817D80", 
  }
});
