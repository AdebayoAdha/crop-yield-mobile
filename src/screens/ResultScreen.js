import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { result, cropType } = route.params;

  const getRecommendation = (yield_value) => {
    if (yield_value > 4000) return { text: 'Excellent yield expected! 🎉', color: '#16a34a' };
    if (yield_value > 3000) return { text: 'Good yield expected 👍', color: '#22c55e' };
    if (yield_value > 2000) return { text: 'Average yield expected ⚠️', color: '#f59e0b' };
    return { text: 'Low yield - consider optimization 📉', color: '#ef4444' };
  };

  const recommendation = getRecommendation(result.predicted_yield);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>🎯 Prediction Results</Text>
        
        <View style={styles.resultCard}>
          <Text style={styles.cropType}>
            {cropType === 'rice' ? '🌾 Rice' : '🌽 Maize'} Crop
          </Text>
          
          <View style={styles.yieldContainer}>
            <Text style={styles.yieldLabel}>Predicted Yield</Text>
            <Text style={styles.yieldValue}>
              {result.predicted_yield.toFixed(2)} kg/ha
            </Text>
          </View>
          
          <View style={[styles.recommendationContainer, { backgroundColor: recommendation.color + '20' }]}>
            <Text style={[styles.recommendationText, { color: recommendation.color }]}>
              {recommendation.text}
            </Text>
          </View>
        </View>

        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>💡 Farming Tips</Text>
          <Text style={styles.tipText}>
            • Monitor soil moisture levels regularly{'\n'}
            • Optimize fertilizer application timing{'\n'}
            • Consider weather patterns for planting{'\n'}
            • Implement pest management strategies
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>🏠 Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Weather')}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            🔄 New Prediction
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
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cropType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 20,
  },
  yieldContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  yieldLabel: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 5,
  },
  yieldValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  recommendationContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  tipsCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#16a34a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButtonText: {
    color: '#16a34a',
  },
});