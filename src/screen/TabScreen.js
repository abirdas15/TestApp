import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Title, Right } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import { StyleSheet } from 'react-native';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
            <Left/><Left/><Left/>
            <Body>
                <Title>News App</Title>
            </Body>
            <Right/>
        </Header>
        <Tabs>
          <Tab heading="General" tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor:'#009387' }} textStyle={{ color:'white' }}>
            <Tab1 />
          </Tab>
          <Tab heading="Politics" tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor:'#009387' }} textStyle={{ color:'white' }}>
            <Tab2 />
          </Tab>
          <Tab heading="Sports" tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor:'#009387' }}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles  = StyleSheet.create({
    header:{
        backgroundColor: '#009387',
    }
});