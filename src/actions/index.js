import { tweetsRef } from '../config/firebase';

/**
 * Pass new tweet as object so it will be added
 */
export const addTweet = newTweet => {
  return new Promise((resolve, reject) => {
    tweetsRef.push().set(newTweet, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
};

/**
 *  Pass this method tweetId and following will be deleted 
 */
export const removeTweet = removeTweetId => {
    tweetsRef.child(removeTweetId).remove();
};

/**
 *  By doing following on method, it return live data from firebase as json
 *  (if new tweets is added, it returns new all tweets with new one automatically) 
 *  Should be added in place where tweets will be fetched, on ComponentDidMount
 *  needs import: 
 *  import { tweetsRef } from '../config/firebase';
 * 
 *  tweetsRef.on('value', snapshot => {
 *      tweets = snapshot.val();
 *  });
 */ 
