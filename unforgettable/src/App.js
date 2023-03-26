import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import SetupPage from "./pages/Layout";

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "pass"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

function createDbs() {
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        con.query( "CREATE DATABASE IF NOT EXISTS userdb", function (err, result) {
            if (err) throw err;
            console.log("User database created");
          });
       
    });
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        con.query( "CREATE DATABASE IF NOT EXISTS eventdb", function (err, result) {
            if (err) throw err;
            console.log("Event database created");
          });
       
    });
}

function createTables() {
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        var q = "CREATE TABLE user (name VARCHAR(255), address VARCHAR(255), school VARCHAR(255), wakeuptime SMALLINT(255), nightpreptime SMALLINT(255), transport ENUM(walk, bike, vehicle, transit), reminder ENUM(text, email, push))";
        con.query(q, function (err, result) {
            if (err) throw err;
            console.log("Table created for user");
        });
    });
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        var q = "CREATE TABLE user (name VARCHAR(255), address VARCHAR(255), school VARCHAR(255), wakeuptime SMALLINT(255), nightpreptime SMALLINT(255), transport ENUM(walk, bike, vehicle, transit), reminder ENUM(text, email, push))";
        con.query(q, function (err, result) {
            if (err) throw err;
            console.log("Table created for events");
        });
    });
}

export default function App() {
    // Check if databases exist, create if they dont
    var firstTimeUser = true;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        var q = "SHOW DATABASES LIKE userdb";
        con.query(q, function (err, result) {
            if (err) throw err;
            if (result && result.length > 0) {
                firstTimeUser = false;
            }
        });
    });

    return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
