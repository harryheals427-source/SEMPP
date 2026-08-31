import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>SEMPP 🛒</Text>
        <Text style={styles.subtitle}>Premium Shopping</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome to SEMPP!</Text>
          <Text style={styles.cardText}>Your premium store is live 🔥</Text>
        </View>
        
        <View style={styles.grid}>
          <View style={styles.item}><Text style={styles.itemText}>👕 Shirts</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>👟 Shoes</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>⌚ Watches</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>👜 Bags</Text></View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Shopping</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { paddingTop: 60, paddingBottom: 20, paddingHorizontal: 20, backgroundColor: '#000' },
  logo: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#aaa', fontSize: 14, marginTop: 4 },
  content: { flex: 1, padding: 20 },
  card: { backgroundColor: '#f5f5f5', padding: 20, borderRadius: 16, marginBottom: 20 },
  cardTitle: { fontSize: 20, fontWeight: 'bold' },
  cardText: { fontSize: 14, color: '#666', marginTop: 6 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  item: { width: '48%', backgroundColor: '#f9f9f9', padding: 20, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  itemText: { fontWeight: '600' },
  button: { backgroundColor: '#000', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});