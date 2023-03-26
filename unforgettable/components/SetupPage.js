import React from 'react';
import {View, Text, Image, ScrollView, TextInput, SafeAreaView} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

// Initial query to initialize database
var db = openDatabase({ name: 'UserDatabase.db' });
function sqlQuery(txn, query) {
    txn.executeSql(
        query,  //Query to execute as prepared statement
        [],  //Argument to pass for the prepared statement
        function(tx, res) {}  //Callback function to handle the result
    );
}

db.transaction((txn) => {
    txn.executeSql(
        "CREATE TABLE user (name varchar(255), home varchar(255), school varchar(255), wakeuptime int, nightprep int, transportmode varchar(255), remindermethod varchar(255))",  //Query to execute as prepared statement
        [],  //Argument to pass for the prepared statement
        function(tx, res) {}  //Callback function to handle the result
    );
});