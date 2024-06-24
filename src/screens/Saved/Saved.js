import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {iconsColor} from '../../assets/colors';
import {setSavedData, setUpdatedData} from '../../actions/actions';

const Saved = () => {
  const dispatch = useDispatch();
  const saveddata = useSelector(state => state.Reducers.saveddata);
  const updatedata = useSelector(state => state.Reducers.updatedata);

  const handleRemoveSaved = item => {
    const updatedSavedData = saveddata.filter(
      savedItem => savedItem.id !== item.id,
    );
    const temp = updatedSavedData.concat(updatedata);
    dispatch(setUpdatedData(temp));
    dispatch(setSavedData(updatedSavedData));
  };

  const renderItem = ({item}) => (
    <View style={styles.list}>
      <FlatList
        data={item.images}
        renderItem={({item}) => (
          <Image
            source={{
              uri: 'https://logiqproperty.blr1.digitaloceanspaces.com/' + item,
            }}
            style={styles.sliderimage}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <View style={styles.PriceHeartView}>
        <Text style={styles.lightText}>₹{item.displayPrice.fixedPrice}</Text>
        <TouchableOpacity onPress={() => handleRemoveSaved(item)}>
          <Ionicon name={'heart'} size={25} color={iconsColor} />
        </TouchableOpacity>
      </View>
      <Text style={styles.Name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved</Text>
      {saveddata.length > 0 ? (
        <FlatList
          data={saveddata}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text>No saved items</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  list: {
    marginLeft: 0,
    marginTop: 3,
    padding: 15,
    marginBottom: 10,
    elevation: 0.5, // for Android
  },
  lightText: {
    fontSize: 15,
  },
  sliderimage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginRight: 30,
  },
  PriceHeartView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Name: {
    fontWeight: 'bold',
  },
});

export default Saved;
