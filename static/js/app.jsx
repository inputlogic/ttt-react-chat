
class Message extends React.Component {
  render() {
    return (
      <li>{ this.props.message }</li>
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
    let target = this.refs.textField;
    this.props.messageHandler(target.value);
    target.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input type="text" ref="textField" />
      </form>
    )
  }
}


var Messenger = React.createClass({
  getInitialState() {
    return {messages: ['Hello? Type something already!']}
  },

  handleMessage(message) {
    this.setState({ messages: [...this.state.messages, message]});
  },

  render() {
    let messageList = this.state.messages.map((message, index) => {
      return <Message message={ message } key={ index } />
    });

    return (
      <div>
       <ul>{ messageList }</ul>
        <MessageInput messageHandler={ this.handleMessage } />
      </div>
    )
  }
})


ReactDOM.render(
  <Messenger />,
  document.getElementById('app')
);
