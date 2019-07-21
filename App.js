/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import React, {Component} from 'react';
// import {WebView} from 'react-native';

// export default class TampilanWeb extends Component {
// render() {
//     return (
//       <WebView
//         source={{uri: 'https://dotcypress.com/news'}}
//         style={{marginTop: 20}}
//       />
//     );
//   }
// }

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class WebSatu extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
// import React, {Component} from 'react';
// import {Image, ScrollView, Text} from 'react-native';

// export default class WebSatu extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Image
//           source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}
//           style={{width: 66, height: 58}}
//         />
//         <Text>
//           On iOS, a React Native ScrollView uses a native UIScrollView.
//           On Android, it uses a native ScrollView.

//           On iOS, a React Native Image uses a native UIImageView.
//           On Android, it uses a native ImageView.

//           React Native wraps the fundamental native components, giving you
//           the performance of a native app using the APIs of React.
//         </Text>
//       </ScrollView>
//     );
//   }
// }

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }


  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
