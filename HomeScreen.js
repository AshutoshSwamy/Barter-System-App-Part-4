import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class RequestScreen extends Component {

    render(){

        return(

            <View>
                <MyHeader title = "Barter Lobby"/>
            </View>
        )
    }
}

