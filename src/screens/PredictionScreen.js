import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ApiService from '../services/ApiService';

export default function PredictionScreen({ route, navigation }) {
  const [cropType, setCropType] = useState('rice');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.weatherData) {
      setWeatherData(route.params.weatherData);
    }
  }, [route.params]);

  const predictYield = async () => {
    setLoading(true);
    try {
      const result = await ApiService.predictYield(cropType, weatherData);
      navigation.navigate('Result', { result, cropType });
    } catch (error) {
      Alert.alert('Error', 'Failed to predict crop yield');
    }
    setLoading(false);
  };

  const weatherFields = [
    { key: 'CLOUD_AMT', label: '☁️ Cloud Amount', icon: '☁️' },
    { key: 'GWETPROF', label: '🌍 Ground Wetness Profile', icon: '🌍' },
    { key: 'GWETROOT', label: '🌱 Root Zone Wetness', icon: '🌱' },
    { key: 'GWETTOP', label: '💧 Surface Wetness', icon: '💧' },
    { key: 'PRECTOTCORR', label: '🌧️ Precipitation', icon: '🌧️' },
    { key: 'QV2M', label: '💨 Humidity', icon: '💨' },
    { key: 'RH2M', label: '🌫️ Relative Humidity', icon: '🌫️' },
    { key: 'T2M', label: '🌡️ Temperature', icon: '🌡️' },
    { key: 'T2M_MAX', label: '🔥 Max Temperature', icon: '🔥' },
    { key: 'T2M_MIN', label: '❄️ Min Temperature', icon: '❄️' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>📊 Crop Yield Prediction</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Crop Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cropType}
              onValueChange={setCropType}
              style={styles.picker}
            >
              <Picker.Item label="🌾 Rice" value="rice" />
              <Picker.Item label="🌽 Maize" value="maize" />
            </Picker>
          </View>
        </View>

        {weatherFields.map((field) => (
          <View key={field.key} style={styles.inputGroup}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              value={weatherData[field.key]?.toString() || ''}
              onChangeText={(value) => setWeatherData({...weatherData, [field.key]: value})}
              keyboardType="numeric"
              placeholder="Enter value"
            />
          </View>
        ))}

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={predictYield}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? '⏳ Predicting...' : '🎯 Predict Yield'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 10,
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
    marginBottom: 30,
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