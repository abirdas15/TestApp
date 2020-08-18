import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Spinner  } from 'native-base';

import { post_url } from '../../config';

import { StyleSheet } from 'react-native';

export default class Tab2 extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            spinner: true,
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }
    fetchData() {
        let _this = this;
        fetch(post_url +'/2')
        .then((response) => response.json())
        .then((res) => {
            let data = res.data;
            _this.setState(previousState => ({data: data}));
            _this.setState(previousState => ({spinner: false}));
        })
      .catch((error) => {
        //console.warn(error);
      });
    }
    postList() {
        return(
            <List
                dataArray={this.state.data}
                renderRow={(item) => {
                   return(
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: item.image }} />
                            </Left>
                            <Body>
                                <Text numberOfLines={1}>{item.title}</Text>
                                <Text note numberOfLines={2}>{item.content}</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                   );
                }}
            />
        );
    }

    render() {
        
        return (
            <Container>
                <Content>
                    {this.state.spinner ? (
                        <Spinner/>
                    ): this.postList() }
                </Content>
            </Container>
        );
    }
}