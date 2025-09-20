import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";


export default function Bilal() {
  return (
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Profile Picture */}
        <Image
          source={{ uri: "https://i.pravatar.cc/300?img=13" }} // replace with your own image
          style={styles.avatar}
        />

        {/* Name */}
        <Text selectable={true} style={styles.name}>Bilal Akram</Text>
        <Text style={styles.subtitle}>Full Stack Developer 🚀</Text>

        {/* Bio Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Me</Text>
          <Text style={styles.cardText}>
            Passionate about building modern web & mobile applications. Skilled in
            Django, React Native, and full-stack solutions. 🚀
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>💼 Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>📧 Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>Made with ❤️ by Bilal</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 20,
    marginVertical: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#eee",
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 15,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#1e3c72",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    marginTop: 40,
    fontSize: 12,
    color: "#ccc",
  },
});
