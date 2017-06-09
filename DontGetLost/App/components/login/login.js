import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'acccess_token';

class Login extends Component{
  constructor() {
    super(); {

      this.state = {
        username: "",
        password: "",
      }
    }
  }

  onLoginPress() {
    const user = this.state;
    this.props.login(user);
  }

  errors() {
    return (
      <View>
      {this.props.errors.map((error, i) => <Text key={i}>{error}</Text>)}
      </View>
    );
  }

  // <Text>{this.state.email}</Text>
  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>Login</Text>
        <TextInput onChangeText={(val) => this.setState({username:val})} placeholder="Username" />
        <TextInput onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)}>
          <Text>Reg</Text>
        </TouchableHighlight>
        {this.errors()}
      </View>

    );

  }
}

export default Login;
