import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';

const selfCareList = [
  {
    emoji: '💧',
    judul: 'Minum Air Putih',
    steps: [
      'Minum segelas air setelah bangun tidur',
      'Bawa botol air ke mana-mana',
      'Minum sebelum makan',
      'Minum sebelum tidur',
      'Target 2 liter sehari',
    ],
  },
  {
    emoji: '🧴',
    judul: 'Skincare',
    steps: [
      'Cuci muka pakai sabun wajah',
      'Pakai toner dengan kapas',
      'Gunakan serum',
      'Pakai pelembap',
      'Gunakan sunscreen (pagi hari)',
    ],
  },
  {
    emoji: '🛏',
    judul: 'Tidur 8 Jam',
    steps: [
      'Matikan HP minimal 30 menit sebelum tidur',
      'Tidur maksimal jam 22.00',
      'Gunakan aroma terapi / relaksasi',
      'Jauhkan cahaya terang dari tempat tidur',
      'Bangun tanpa alarm (kalau bisa)',
    ],
  },
  {
    emoji: '🍽',
    judul: 'Makan Sehat',
    steps: [
      'Sarapan bergizi',
      'Kurangi makanan olahan',
      'Minum air putih sebelum makan',
      'Perbanyak sayur dan buah',
      'Makan dengan porsi cukup',
    ],
  },
  {
    emoji: '📵',
    judul: 'Jauh dari HP',
    steps: [
      'Tentukan waktu bebas HP (misal 1 jam)',
      'Matikan notifikasi tidak penting',
      'Letakkan HP di luar kamar',
      'Ganti waktu scrolling dengan baca buku',
      'Gunakan mode pesawat saat istirahat',
    ],
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const backgroundColors = ['#FFF3E0', '#FFEBEE', '#E3F2FD', '#E8F5E9', '#FCE4EC'];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerText}>🌸 Self-Care Reminder</Text>
      </View>
      <FlatList
        data={selfCareList}
        keyExtractor={(item) => item.judul}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/checklist',
                params: {
                  judul: item.judul,
                  emoji: item.emoji,
                  steps: JSON.stringify(item.steps),
                },
              })
            }
            style={[
              styles.card,
              { backgroundColor: backgroundColors[index % backgroundColors.length] },
            ]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.cardTitle}>{item.judul}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  header: {
    backgroundColor: '#E91E63',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});