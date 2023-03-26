import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, SafeAreaView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { Dropdown } from 'react-native-material-dropdown';

// Initial query to initialize database
var db = openDatabase({ name: 'UserDatabase.db' });

db.transaction((txn) => {
    txn.executeSql(
        "CREATE TABLE user (name varchar(255), home varchar(255), school varchar(255), wakeuptime int, nightprep int, transportmode varchar(255), remindermethod varchar(255))",  //Query to execute as prepared statement
        [],  //Argument to pass for the prepared statement
        console.log("Created database table user")
    );
});

db.transaction((txn) => {
    txn.executeSql(
        "CREATE TABLE events (nametime varchar(255), jsonstring varchar(1024)",  //Query to execute as prepared statement
        [],  //Argument to pass for the prepared statement
        console.log("Created database table user")
    );
});

const SetupScreen = ({navigation}) => {
    const [nametext, setName] = useState('');
    const [hometext, setHome] = useState('');
    const [schooltext, setSchool] = useState('');
    const [wakeuptext, setWake] = useState('');
    const [nighttext, setNight] = useState('');
    const [transporttext, setTransport] = useState('');
    const [remindertext, setReminder] = useState('');
    const transportOptions = [{
        value: 'Walking',
      }, {
        value: 'Driving',
      }, {
        value: 'Biking',
      }, {
        value: 'Bus',
      },
      , {
        value: 'Train',
      }];

    const reminderOptions = [{
        value: 'Push Notifications',
      }, {
        value: 'Text',
      }, {
        value: 'Email',
    }];

    return (
      <View>
        <TextInput placeholder='Name' onChangeText={newText => setName(newText)} defaultValue={nametext}></TextInput>
        <TextInput placeholder='Home Address' onChangeText={newText => setHome(newText)} defaultValue={hometext}></TextInput>
        <TextInput placeholder='School Address' onChangeText={newText => setSchool(newText)} defaultValue={schooltext}></TextInput>
        <TextInput placeholder='30' onChangeText={newText => setWake(newText)} defaultValue={wakeuptext}></TextInput>
        <TextInput placeholder='30' onChangeText={newText => setWake(newText)} defaultValue={nighttext}></TextInput>
        <Dropdown label='Method of Transport' data={transportOptions}></Dropdown>
        <Dropdown label='Reminder Method' data={reminderOptions}></Dropdown>
      </View>
    );
  };
  export {SetupScreen}