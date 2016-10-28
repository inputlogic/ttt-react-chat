
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


class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {messages: ['Hello? Type something already!']}
    this.ws = new WebSocket("ws://localhost:3000");
  }

  handleMessage(message) {
    this.setState({messages: [...this.state.messages, message]});
    this.ws.send(message);
  }

  receiveMessage() {

  }

  componentDidMount() {
    // ws.receive(
    var self = this;
    self.ws.onmessage = function(msg) {
      self.setState({messages: [...self.state.messages, msg.data]});
      console.log(msg);
      // this.handleMessage(message)
    };
  }

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
}


ReactDOM.render(
  <Messenger />,
  document.getElementById('app')
);
