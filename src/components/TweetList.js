import React, { Component } from "react";
import { addTweet } from "../actions";

export default class TweetList extends Component {

    addNewTweet = () => {
        let tweet = {
            title: "Some title",
            text: "Some text",
            name: "VeryNiceName",
            imgUrl: "some img url"
        };
        addTweet(tweet);
    }

    render() {
        return (
          <div className="TweetList">
            <h3>Tweet List!</h3>
            <button onClick={this.addNewTweet}>Add new tweet</button>
          </div>
        );
      }
}
