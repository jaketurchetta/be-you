import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten'
import axios from 'axios'
import { GNEWS_API_KEY } from '../../../config.js'
import FeedNavigator from '../navigation/TopNavigator.jsx'

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.getArticles = this.getArticles.bind(this);

  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    axios.get(`https://gnews.io/api/v3/search?q=lgbt|gay|lesbian|trans|queer&token=${GNEWS_API_KEY}`)
      .then(response => {
        this.setState({
          articles: response.data.articles,
        }, () => {
          console.log(this.state.articles)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Newsfeed Screen </Text>
        </Layout>
      </React.Fragment>
    );
  }

}