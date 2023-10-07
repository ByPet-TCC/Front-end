

//npm i @react-native-google-signin/google-signin
export function Googlebutton ({ navigation }) {

return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView

          contentInsetAdjustmentBehavior="auto"
          style={styles.scrollView}>

          <Header />

          <View style={styles.body}>

            <View style={styles.sectionContainer}>

              <GoogleSigninButton

                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}

              />
            </View>
            <View style={styles.buttonContainer}>

              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button
                  onPress={this.signOut}
                  title="LogOut"
                  color="red"></Button>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
  };