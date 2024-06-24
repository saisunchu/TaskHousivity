import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {iconsColor} from '../../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setSavedData} from '../../actions/actions';

const ListItem = ({item}) => {
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.Reducers);
  const [f, setF] = useState(1);

  const saveddata = stateData.saveddata;
  const updatedata = stateData.updatedata;

  useEffect(() => {
    if (saveddata.length > 0) {
      const isSaved = saveddata.some(savedItem => savedItem.id === item.id);

      if (isSaved) {
        setF(0);
      } else {
        setF(1);
      }
    }
  }, []);

  const HandleSaved = item => {
    const isSaved = saveddata.some(savedItem => savedItem.id === item.id);

    if (isSaved) {
      const updatedSavedData = saveddata.filter(
        savedItem => savedItem.id !== item.id,
      );
      dispatch(setSavedData(updatedSavedData));
      setF(1);
    } else {
      dispatch(setSavedData([...saveddata, item]));
      setF(0);
    }
  };

  return (
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
        <TouchableOpacity onPress={() => HandleSaved(item)}>
          <Ionicon
            name={f == 1 ? 'heart-outline' : 'heart'}
            size={25}
            color={iconsColor}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.Name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginLeft: 0,

    marginTop: 3,
    padding: 15,
    marginBottom: 10,

    elevation: 0.5,
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

export default memo(ListItem);
