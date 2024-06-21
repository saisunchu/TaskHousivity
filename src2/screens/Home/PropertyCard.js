// PropertyCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PropertyCard = ({ property }) => {
  const { name, thumbnail, displayPrice, configuration, projectType, constructionStatus } = property;

  return (
    <View style={styles.card}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{`Price: ${displayPrice.priceRange.from} - ${displayPrice.priceRange.to}`}</Text>
      <Text style={styles.details}>{`Configuration: ${configuration.join(', ')}`}</Text>
      <Text style={styles.details}>{`Project Type: ${projectType.type}`}</Text>
      <Text style={styles.details}>{`Construction Status: ${constructionStatus}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default PropertyCard;
