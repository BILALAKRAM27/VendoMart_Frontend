import { Link } from "expo-router";
import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
        <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 24,
        color: "#1E40AF",
      }}>
        Login Screen
      </Text>
      </View>

      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          padding: 20,
          margin: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <View>
          <Text
            style={{
              color: "#4A5568",
              marginBottom: 8,
            }}
          >
            Username
          </Text>

          <TextInput
            style={{
              width: 288,
              height: 48,
              paddingHorizontal: 16,
              color: "#000000",
              backgroundColor: "#FFFFFF",
              borderColor: "#D1D5DB",
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 12,
            }}
            placeholder="Type here..."
            placeholderTextColor="#9CA3AF" // gray placeholder
          />

          <Text style={{ color: "#4A5568", marginBottom: 8 }}>Password</Text>
          <TextInput
            style={{
              width: 288,
              height: 48,
              paddingHorizontal: 16,
              color: "#000000",
              backgroundColor: "#FFFFFF",
              borderColor: "#D1D5DB",
              borderWidth: 1,
              borderRadius: 8,
            }}
            placeholder="Type here..."
            placeholderTextColor="#9CA3AF" // gray placeholder
            secureTextEntry
          />
        </View>
      </View>

      
      <View style={{ alignItems: "center" }}>
        <Link
          style={{
            backgroundColor: "#3B82F6",
            fontWeight: "500",
            color: "#FFFFFF",
            paddingVertical: 12,
            paddingHorizontal: 32,
            width: 288,
            textAlign: "center",
            borderRadius: 15,
          }}
          href="/"
        >
          Go to Home
        </Link>
      </View>
    </SafeAreaView>
  );
}
