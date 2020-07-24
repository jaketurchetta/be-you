import * as Facebook from 'expo-facebook'

Facebook.initializeAsync(appId: string | undefined, appName: string | undefined): Promise<void>

async function facebookLogIn() {
  try {
    await Facebook.initializeAsync('3165489813558150');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

module.exports = facebookLogIn;