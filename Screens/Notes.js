import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { Input, Icon } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';



class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CityName: '',
            CityList: [
                "Ahmadpur East",
                "Ahmed Nager Chatha",
                "Ali Khan Abad",
                "Alipur",
                "Arifwala",
                "Attock",
                "Bhera",
                "Bhalwal",
                "Bahawalnagar",
                "Bahawalpur",
                "Bhakkar",
                "Burewala",
                "Chenab Nagar",
                "Chillianwala",
                "Choa Saidanshah",
                "Chakwal",
                "Chak Jhumra",
                "Chichawatni",
                "Chiniot",
                "Chishtian",
                "Chunian",
                "Dajkot",
                "Daska",
                "Davispur",
                "Darya Khan",
                "Dera Ghazi Khan",
                "Dhaular",
                "Dina",
                "Dinga",
                "Dhudial Chakwal",
                "Dipalpur",
                "Faisalabad",
                "Fateh Jang",
                "Ghakhar Mandi",
                "Gojra",
                "Gujranwala",
                "Gujrat",
                "Gujar Khan",
                "Harappa",
                "Hafizabad",
                "Haroonabad",
                "Hasilpur",
                "Haveli Lakha",
                "Jalalpur Jattan",
                "Jampur",
                "Jaranwala",
                "Jhang",
                "Jhelum",
                "Kallar Syedan",
                "Kalabagh",
                "Karor Lal Esan",
                "Kasur",
                "Kamalia",
                "Kāmoke",
                "Khanewal",
                "Khanpur",
                "Khanqah Sharif",
                "Kharian",
                "Khushab",
                "Kot Adu",
                "Jauharabad",
                "Lahore",
                "Islamabad",
                "Lalamusa",
                "Layyah",
                "Lawa Chakwal",
                "Liaquat Pur",
                "Lodhran",
                "Malakwal",
                "Mamoori",
                "Mailsi",
                "Mandi Bahauddin",
                "Mian Channu",
                "Mianwali",
                "Miani",
                "Multan",
                "Murree",
                "Muridke",
                "Mianwali Bangla",
                "Muzaffargarh",
                "Narowal",
                "Nankana Sahib",
                "Okara",
                "Renala Khurd",
                "Pakpattan",
                "Pattoki",
                "Pindi Bhattian",
                "Pind Dadan Khan",
                "Pir Mahal",
                "Qaimpur",
                "Qila Didar Singh",
                "Raiwind",
                "Rajanpur",
                "Rahim Yar Khan",
                "Rawalpindi",
                "Sadiqabad",
                "Sagri",
                "Sahiwal",
                "Sambrial",
                "Samundri",
                "Sangla Hill",
                "Sarai Alamgir",
                "Sargodha",
                "Shakargarh",
                "Sheikhupura",
                "Shujaabad",
                "Sialkot",
                "Sohawa",
                "Soianwala",
                "Siranwali",
                "Tandlianwala",
                "Talagang",
                "Taxila",
                "Toba Tek Singh",
                "Vehari",
                "Wah Cantonment",
                "Wazirabad",
                "Yazman",
                "Zafarwal",
            ]
        }
    }

    // CityMethod(CityName) {
    //     if (this.state.CityName === '') {
    //         return (
    //             Alert.alert('Please Enter a City Name')
    //         )
    //     }
    //     else {
    //         return (
    //             this.props.navigation.navigate('QiblaDatails', { City: this.state.CityName })
    //         )
    //     }
    // }


    renderRow = ({ item }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1 }}
                onPress={() => this.props.navigation.navigate('QiblaDatails', { City: item })}>
                <View style={{ marginVertical: 15, marginLeft: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo style={{ color: 'white', marginLeft: 15, marginTop: 30 }} name="menu" size={30}
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginTop: 35, marginLeft: 15 }}>20-Jan-2020</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 30 }}>SEARCH AL-QURAN</Text>
                    <View style={{ height: 70, backgroundColor: 'black' }}>
                        <Feather style={{ color: 'white', marginRight: 15, marginTop: 30 }} name="settings" size={30}
                            onPress={() => this.props.navigation.navigate('ChangeView')} />
                    </View>
                </View>

                {/* <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.state.CityName}
                    onChangeText={CityName => this.setState({ CityName })}

                    placeholder='Enter a valid City Name'
                    placeholderTextColor='black'
                    inputContainerStyle={{ marginHorizontal: '5%', borderColor: '#1B1464', marginTop: 80, marginBottom: 30 }}
                    inputStyle={{ marginLeft: '3%', fontSize: 15 }}
                    leftIcon={<Icon
                        name='location-city'
                        type='MaterialIcons'
                        color='black'
                        size={20}
                    />}
                    containerStyle={{ marginTop: '5%' }}
                />
                <TouchableOpacity style={{ justifyContent: 'center', borderWidth: 1, height: 50, borderRadius: 10, marginHorizontal: 15, backgroundColor: 'black' }}
                    onPress={() => this.CityMethod(this.state.CityName)}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignSelf: 'center' }}>Submit</Text>
                </TouchableOpacity> */}

                <FlatList
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.CityList}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Font: { fontSize: 18 },
    ViewTimings: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 5 }

});
export default Notes;