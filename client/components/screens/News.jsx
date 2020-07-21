import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar, withStyles, List } from 'react-native-ui-kitten'
import axios from 'axios'
import { GNEWS_API_KEY, UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } from '../../../config.js'
import FeedNavigator from '../navigation/TopNavigator.jsx'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACCESS_KEY
});

class _News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    axios.get(`https://gnews.io/api/v3/search?q=lgbt|gay|lesbian|trans|queer&token=${GNEWS_API_KEY}`)
      .then(response => {
        let articles = response.data.articles;
        for (let i = 0; i < articles.length; i++) {
          if (!articles[i].image) {
            unsplash.photos.getRandomPhoto({ query: 'lgbt' })
              .then(toJson)
              .then(json => {
                articles[i].image = json.links.html
              })
          }
        }
        this.setState({
          articles: articles,
        }, () => {
          console.log(this.state.articles)
        })
      })
      .catch(err => console.log(err))
  }

  renderItem = ({ item }) =>
    <View style={this.props.themedStyle.card}>
      <Image
        source={{ uri: item.image }}
        style={this.props.themedStyle.cardImage} />
      <View style={this.props.themedStyle.cardHeader}>
        <Text category='s1' style={this.props.themedStyle.cardTitle}>{item.title}</Text>
      </View>
      <View style={this.props.themedStyle.sourceTitle}>
        <Text category='p1'>{item.source.name}</Text>
      </View>
      <View style={this.props.themedStyle.cardContent}>
        <Text category='c1'>{item.description}</Text>
      </View>
    </View>

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        {this.state.articles.length ? (<List style={this.props.themedStyle.container}
          data={this.state.articles}
          renderItem={item => this.renderItem(item)} />)
          : (<Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Newsfeed </Text>
          </Layout>)}
      </React.Fragment>
    )
  }

}

export const News = withStyles(_News, theme => ({
  container: {
    flex: 1
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    marginBottom: 20
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: theme['color-basic-1000']
  },
  sourceTitle: {
    color: theme['color-basic-1000'],
    fontStyle: 'italic',
    paddingLeft: 10,
  },
  cardContent: {
    padding: 10,
  }
}))
