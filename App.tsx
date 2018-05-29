import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component<{}> {
  state = {
    myImageUri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
  }
  updateImage = () => {
//    let n = Math.floor(Math.random() * this._choices.length);
    this.setState({ myImageUri:  "https://farm4.staticflickr.com/3088/2688916488_1a125cd0e7_z_d.jpg"}) //this._choices[n] });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image
          style={{width: 640, height: 480}}
          source={{uri: this.state.myImageUri}}
        />
          <Button
            onPress={this.updateImage}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
