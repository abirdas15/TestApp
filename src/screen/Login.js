import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { Form, Item, Input } from 'native-base';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.middle}>
                    <Text style={styles.textContainer}>You are ready to go.</Text>
                    <View style={styles.formArea}>
                        <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>

                        <Form style={styles.mainForm}>
                            <Item style={styles.formItem}>
                                <Input placeholder="Username" style={styles.input}></Input>
                            </Item>
                            <Item style={styles.formItem}>
                                <Input placeholder="Password" style={styles.input}></Input>
                            </Item>
                        </Form>
                    </View>
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative'
    },
    top:{
        position: 'relative',
        backgroundColor: '#5257f2',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        height: 250
    },
    middle:{
        height: '100%',
        width: '100%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
        paddingLeft: 26.3,
        paddingRight: 26.3
    },
    bottom:{
        position: 'relative',
        height:'100%',
        backgroundColor: '#5257f2',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        
    },
    textContainer:{
        color: '#fcfdff',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top:'20%',
        alignSelf: 'center'
    },
    formArea:{
       alignSelf: "center",
       width: '100%',
       backgroundColor: 'red',
       top: '20%',
       paddingBottom: 40
    },

});