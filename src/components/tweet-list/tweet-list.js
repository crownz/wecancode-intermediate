import React from 'react';

import { tweetsRef } from '../../config/firebase';
import { removeTweet, toggleTweetLike, isTweetLiked, isTweetOwner } from '../../actions';
import Card from '../card';

import styles from './tweet-list.module.scss';

class TweetList extends React.Component {
  state = {
    tweets: null
  };

  componentDidMount() {
    tweetsRef.on('value', snapshot => {
      const tweets = snapshot.val();
      this.setState({ tweets });
    });
  }

  renderTweets = () => {
    const { tweets } = this.state;
    return tweets ? Object.keys(tweets).map(id => (
      <Card
        key={id}
        imageSrc={tweets[id].imageUrl}
        title={tweets[id].title}
        description={tweets[id].description}
        onDelete={() => removeTweet(id)}
        toggleLike={() => toggleTweetLike(id)}
        likesCount={tweets[id].likesCount}
        isLiked={isTweetLiked(tweets[id])}
        isMine={isTweetOwner(tweets[id])}
      />
    )) : null;
  };

  render() {
    return (
      <div className={styles.tweetListContainer}>
        <div className={styles.cardGrid}>
          {this.renderTweets()}
        </div>
      </div>
    );
  }
}

export default TweetList;
