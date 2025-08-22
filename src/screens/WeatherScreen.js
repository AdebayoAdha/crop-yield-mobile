import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ApiService from '../services/ApiService';

export default function WeatherScreen({ navigation }) {
  const [year, setYear] = useState('2026');
  const [month, setMonth] = useState('1');
  const [loading, setLoading] = useState(false);

  const generateWeather = async () => {
    setLoading(true);
    try {
      const data = await ApiService.generateWeather(year, month);
      navigation.navigate('Prediction', { weatherData: data });
    } catch (error) {
      Alert.alert('Error', 'Failed to generate weather data');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>📅 Weather Data Generation</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Year</Text>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            placeholder="2026"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Month</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={month}
              onValueChange={setMonth}
              style={styles.picker}
            >
              <Picker.Item label="January" value="1" />
              <Picker.Item label="February" value="2" />
              <Picker.Item label="March" value="3" />
              <Picker.Item label="April" value="4" />
              <Picker.Item label="May" value="5" />
              <Picker.Item label="June" value="6" />
              <Picker.Item label="July" value="7" />
              <Picker.Item label="August" value="8" />
              <Picker.Item label="September" value="9" />
              <Picker.Item label="October" value="10" />
              <Picker.Item label="November" value="11" />
              <Picker.Item label="December" value="12" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={generateWeather}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? '⏳ Generating...' : '☀️ Generate Weather Data'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});