import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessageHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MessageHeader />

        <Segment>
          <Comment.Group className="messages"></Comment.Group>
        </Segment>
        <MessageForm />
      </React.Fragment>
    );
  }
}
export default Messages;
