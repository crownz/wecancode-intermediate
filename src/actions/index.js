import { tweetsRef } from '../config/firebase';

/**
 * Pass new tweet as object so it will be added
 */
export const addTweet = newTweet => {
    tweetsRef.push().set(newTweet);
};

/**
 *  Pass this method tweetId and following will be deleted 
 */
export const removeTweet = removeTweetId => {
    tweetsRef.child(removeTweetId).remove();
};

/**
 *  By doing following on method, it return live data from firebase as json object
 * (if new tweets is added, it returns new all tweets with new one automatically) 
 *  tweetsRef.on('value', snapshot => {
 *      tweets = snapshot.val();
 *  });
 */ 


