import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Dimensions from 'Dimensions';

const fullHeight = Dimensions.get('window').height - 40;
const fullWidth = Dimensions.get('window').width - 120;

class SignUp extends Component{
  constructor() {
    super(); {

      this.state = {
        username: "",
        password: ""
      }
      this.getToken = this.getToken.bind(this);
      this.verifyToken = this.verifyToken.bind(this);
    }
  }


componentWillMount() {
  this.getToken();
}

async getToken() {
  try {
    let sessionToken = await AsyncStorage.getItem('sessionToken');
    if (!sessionToken) {
      Actions.signup();
    } else {
      this.verifyToken(sessionToken)
    }
  } catch (error) {
    // console.log("Error finding token");
  }
}

async verifyToken(token) {
  const sessionToken = token;
  try {
    let response = await fetch('http://10.0.2.2:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
    let res = await response.text();
    if (response.status >= fullWidth && response.status < 300) {
      //Verified token means user is logged in so we redirect them home.
      // console.log('user still logged in');
      Actions.menu();
      //should be our actual home page
    } else {
      //Handle error
      const error = res;
      throw error;
    }
  } catch (error) {

  }
}

  onRegisterPress() {
    const user = this.state;
    this.props.register(user);
    setTimeout(this.getToken, 1000);
  }

  errors() {
    return (
      <View>
      {this.props.errors.map((error, i) => <Text key={i}>{error}</Text>)}
      </View>
    );
  }

  // <Text>{this.state.email}</Text>
  // <TextInput onChangeText={(val) => this.setState({password_confirmation:val})} placeholder="Password Confirmation" secureTextEntry={true}/>
  render() {
    return (

      <View style={{flex: 1, marginTop: 50}}>
        <Text style={styles.title}>User Registration</Text>
        <TextInput style={styles.input} onChangeText={(val) => this.setState({username:val})} placeholder="Username" />
        <TextInput style={styles.input} onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        {this.errors()}
        <View style={styles.footer}>
        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={this.onRegisterPress.bind(this)}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.altButton}
          onPress={Actions.login}>
          <Text style={styles.button}>Already a User?</Text>
        </TouchableHighlight>
        </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
    margin: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    width: fullWidth,
    height: 60,
    margin: 20,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,

    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },
  altButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3A3A3',
    width: fullWidth,
    height: 60,
    marginTop: 10,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
  input: {
    fontSize: 20
  },
  footer: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errors: {
    color: 'red',
    fontSize: 16
  }
});

export default SignUp;
