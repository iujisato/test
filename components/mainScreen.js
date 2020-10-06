import React, {Component} from 'react';
import { View, Text } from 'react-native';

class MainScreen extends Component {
  state = {
    users: [{ name: 'TEST', key: 'KEY' }],
    isLoading: false,
  };

  // async getUsers = () => {
  //   const { users } = this.state;
  //
  //   return users;
  // }

  renderUser = (user) => {
    <View>
      <Text>{user.name}</Text>
      <Text>{user.key}</Text>
    </View>
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      <Text>Loading</Text>
    }

    return (
      <View>
        { users.forEach(user => this.renderUser(user)) }
      </View>
    )
  }
}

export default MainScreen;
