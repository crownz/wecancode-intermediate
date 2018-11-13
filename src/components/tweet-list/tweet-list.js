import React from 'react';

import { tweetsRef } from '../../config/firebase';
import { removeTweet, toggleTweetLike, isTweetLiked } from '../../actions';
import Card from '../card';

import styles from './tweet-list.module.scss';

class TweetList extends React.Component {
  state = {
    tweets: null
  };

  componentDidMount() {
    tweetsRef.on('value', snapshot => {
      const tweets = snapshot.val();
      console.log('tweets:', tweets);
      this.setState({ tweets })
    });
  }

  renderTweets = () => {
    const { tweets } = this.state;
    return tweets ? Object.keys(tweets).map(id => (
      <Card
        key={id}
        imageSrc={tweets[id].imgUrl}
        title={tweets[id].title}
        onDelete={() => removeTweet(id)}
        toggleLike={() => toggleTweetLike(id)}
        likesCount={tweets[id].likesCount}
        isLiked={isTweetLiked(tweets[id])}
      />
    )) : null;
  };

  render() {
    return (
      <div className={styles.cardGrid}>
        <div className={styles.cards}>
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

export default TweetList;
