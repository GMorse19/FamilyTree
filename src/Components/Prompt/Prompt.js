import React from 'react'
import { Image, View, Text, Button, StyleSheet, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 266,
    height: 266,
    padding: 12,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  logo: {
    width: 166,
    height: 166,
  },
});

function Prompt({ navigation, route }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Prompt Screen</Text>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/faviconcopy.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/faviconcopy.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/faviconcopy.png')}
            style={styles.logo}
          />
        </View>
      </ScrollView>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Prompt
