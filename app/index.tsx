import { Link } from "expo-router";
import { 
  Text,
  View,
  Image,
} from "react-native";

export default function Index() {
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200, height: 200}} />
      <Link href="/bilal">Go to Bilal's screen</Link>
      <Link href={"/login"}> go to the login page</Link>
    </View>
  
  );
}
