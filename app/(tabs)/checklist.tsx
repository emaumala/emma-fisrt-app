import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function ChecklistScreen() {
  const { judul, emoji, steps } = useLocalSearchParams();
  const router = useRouter();
  const parsedSteps = JSON.parse(steps as string);
  const [checked, setChecked] = useState(Array(parsedSteps.length).fill(false));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => router.back()}>
          ←
        </Text>
        <Text style={styles.title}>{judul}</Text>
      </View>
      <View style={styles.emojiWrap}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <FlatList
        data={parsedSteps}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              styles.item,
              { backgroundColor: checked[index] ? '#FFE3EC' : '#fff' },
            ]}
            onPress={() => {
              const updated = [...checked];
              updated[index] = !updated[index];
              setChecked(updated);
            }}
          >
            <Checkbox
              value={checked[index]}
              onValueChange={() => {
                const updated = [...checked];
                updated[index] = !updated[index];
                setChecked(updated);
              }}
              color={checked[index] ? '#E91E63' : undefined}
              style={styles.checkbox}
            />
            <Text style={styles.stepText}>{item}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    padding: 16,
  },
  back: {
    fontSize: 20,
    color: 'white',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  emojiWrap: {
    alignItems: 'center',
    marginTop: 16,
  },
  emoji: {
    fontSize: 60,
  },
  list: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#f48fb1',
    borderRadius: 10,
    padding: 10,
  },
  checkbox: {
    marginRight: 12,
  },
  stepText: {
    fontSize: 16,
    flexShrink: 1,
  },
});