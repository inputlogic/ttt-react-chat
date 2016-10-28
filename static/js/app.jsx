
class Message extends React.Component {
  render() {
    return (
      <li>{this.props.message}</li>
    )
  }
}


class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let message = this.refs.textField.value;
    this.props.messageHandler(message);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="textField" />
      </form>
    );
  }
}


class Messenger extends React.Component {
  handleMessage(message) {
    console.log('handling message: ' + message);
  }

  render() {
    let messages = [
      "hi there",
      "hello",
      "what's up",
    ];

    let messageList = messages.map((message, index) => {
      return <Message message={message} key={index} />
    });

    return (
      <div>
       <ul> {messageList} </ul>
        <MessageInput messageHandler={this.handleMessage} />
      </div>
    )
  }
}


ReactDOM.render(
  <Messenger />,
  document.getElementById('app')
);
