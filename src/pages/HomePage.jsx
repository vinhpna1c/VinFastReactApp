import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  NavigationAction,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
function HomePage(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to My App!</Text>
        <Text style={styles.subtitle}>Connect with friends and family</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button} title="Register">
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Login">
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  footerButtonText: {
    fontSize: 14,
    color: 'blue',
  },
});

export default HomePage;
