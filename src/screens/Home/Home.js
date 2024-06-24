import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './ListItem';
import {iconsColor} from '../../assets/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {setUpdatedData} from '../../actions/actions';

const Home = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.Reducers);
  const saveddata = stateData.saveddata;
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const filterOptions = ['Apartment', 'Farmhouse', 'Rowhouse'];

  const fetchAPI = async () => {
    try {
      let response = await fetch(
        `https://api.housivity.com/api/v1/property?city=Gandhinagar&projectType=[%22pgHostel%22]&page=${page}`,
      );
      let responseJson = await response.json();
      let propertyList = responseJson.propertyList;
      return propertyList;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const dataFetchAPI = async () => {
    setIsLoading(true);

    const data = await fetchAPI();
    if (data.length > 0) {
      setDataSource(data);
      setPage(page + 1);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (stateData.updatedata.length > 0) {
      setDataSource(stateData.updatedata);
    } else {
      dataFetchAPI();
      dispatch(setUpdatedData(dataSource));
    }
  }, []);

  const loadingIndicator = () => {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="small" />
        <Text>Loading...</Text>
      </View>
    );
  };

  const renderItem = useCallback(({item}) => {
    return <ListItem item={item} />;
  }, []);
  const keyExtractor = useCallback(item => item.id, []);

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={toggleFilterOptions}>
        <Text style={styles.filterText}>Filter</Text>
        <Ionicon name={'filter'} size={20} color={iconsColor} />
      </TouchableOpacity>

      {showFilterOptions && (
        <View style={styles.filterOptions}>
          {filterOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.option}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={dataFetchAPI}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading && loadingIndicator()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    alignSelf: 'center',
  },
  lightText: {
    fontSize: 15,
  },
  list: {
    marginLeft: 0,
    borderWidth: 1,
    marginTop: 3,
    padding: 2,
  },
  loadingIndicator: {
    alignItems: 'center',
  },
  sliderimage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  filterButton: {
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 1,
    width: 140,
    padding: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: iconsColor,
    borderRadius: 15,
  },
  filterText: {
    color: iconsColor,
  },
  filterOptions: {
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 0.1,
    width: 300,
    padding: 10,
    elevation: 1,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  option: {
    // borderWidth:1,
    width: 100,
    padding: 5,
    alignItems: 'center',
  },
});

export default Home;
