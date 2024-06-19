import {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {mockdata} from '../constants/helper';

const Dashboard = () => {
  const [data, setdata] = useState(mockdata);

  const handlepress = () => {
    console.log('check===');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <View style={styles.contect}>
                <TouchableOpacity
                  onPress={() => handlepress()}
                  style={styles.crossbtn}>
                  <Text>x</Text>
                </TouchableOpacity>
                {/* <View style={styles.profile}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    {item.data[0]?.toUpperCase()}
                  </Text>
                </View> */}
                
                <Text
                  style={{
                    color: 'white',
                  }}>
                  {item.content_type}
                </Text>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  {item.data}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  contect: {
    height: 150,
    width: 130,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff3',
    borderRadius: 10,
    flexDirection: 'column',
    gap: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossbtn: {
    position: 'absolute',
    bottom: 9,
    left: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    borderColor: 'white',
  },
});
