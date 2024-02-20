Name:Umukunzi Merveille Tuza
ID:22009
import RNSharedPreferences from 'react-native-android-shared-preferences';

var sharedPreferences = RNSharedPreferences.getSharedPreferences("user");
sharedPreferences.putString("name", "Merveille", (result) => {
 console.log("PUT result :: " + result);
});

console.log(sharedPreferences.getString("name", (result) => {
    
     console.log("Get result :: " + result);
}));
import { BroadcastReceiver } from 'react-native-broadcast-receiver';

React.useEffect(() => {
  const sub = BroadcastReceiver.addEventListner((b) =>
    setScanned((y) => [...y, b.data])
  );
  return () => sub.remove();
}, []);

const onLogin = async (callback) => {
    try {
      await authorize().then(async () =>{
        const credentials = await getCredentials();
        await AsyncStorage.setItem('token', credentials.idToken);
        if (callback) {
            callback(); const onLogin = async (callback) => {
                try {
                  await authorize().then(async () =>{
                    const credentials = await getCredentials();
                    await AsyncStorage.setItem('token', credentials.idToken);
                    if (callback) {
                        callback();
                      }
                  });
                } catch (e) {
                  console.log(e);
                }
              };
          }
      });
    } catch (e) {
      console.log(e);
    }
  };
