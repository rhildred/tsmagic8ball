import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component<{}> {
  private _choices = [
    {uri:"https://farm4.staticflickr.com/3088/2688916488_1a125cd0e7_z_d.jpg",
  author:"Ângela Antunes"},
    {uri:"https://farm1.staticflickr.com/231/522075744_4aa674bbdd_z_d.jpg",
    author:"Catherine"}
  ];
  state = {
    myImageUri: this._choices[0].uri,
    author:this._choices[0].author
  }
  updateImage = () => {
    let n = Math.floor(Math.random() * this._choices.length);
    this.setState({ myImageUri: this._choices[n].uri });
    this.setState({ author: this._choices[n].author });
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
        <Text>Image by: {this.state.author}</Text>
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
