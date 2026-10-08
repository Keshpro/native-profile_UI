
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const handleAdd = () => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.alert('Add button clicked!');
      }
    } else {
      Alert.alert('Add', 'Add button clicked!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile image */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>👨🏻</Text>
        </View>
        <Text style={styles.tick}>✔</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Name */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Keshan</Text>
      </View>

      {/* Email */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.infoRow}>
          <Text style={styles.emailIcon}>✉</Text>
          <Text style={styles.value}>
            keshan@gmail.com
          </Text>
        </View>
      </View>

      {/* Points */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Points</Text>
        <View style={styles.infoRow}>
          <Text style={styles.starIcon}>★</Text>
          <Text style={styles.value}>0</Text>
        </View>
      </View>

      {/* Add Button */}
      <Pressable
        style={styles.addButton}
        onPress={handleAdd}
      >
        <Text style={styles.plusText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  header: {
    height: 56,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  avatarContainer: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 55,
  },

  avatarCircle: {
    height: 95,
    width: 95,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#FFE0E0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },

  avatarEmoji: {
    fontSize: 58,
  },

  tick: {
    position: 'absolute',
    bottom: 7,
    right: 9,
    color: '#00E600',
    fontSize: 38,
    fontWeight: 'bold',
  },

  divider: {
    height: 1.5,
    backgroundColor: '#222222',
    marginHorizontal: 15,
    marginBottom: 15,
  },

  infoSection: {
    marginHorizontal: 15,
    marginBottom: 19,
  },

  label: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  value: {
    fontSize: 15,
    color: '#333333',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  emailIcon: {
    fontSize: 18,
    color: '#000000',
  },

  starIcon: {
    fontSize: 20,
    color: '#000000',
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  plusText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 34,
  },
});
