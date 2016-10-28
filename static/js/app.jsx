
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
  }
  static propTypes = {
    onTextChange: React.PropTypes.func.isRequired
  }

  textChange() {
    console.log("hereerererere");
  }

  render() {
    return (
      <input type="text" onChange={this.textChange}/>
    );
  }
}

class Messenger extends React.Component {
  onTextChange() {
    console.log("text changed");
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
        <MessageInput onTextChange={this.onTextChange} />
      </div>
    )
  }
}

ReactDOM.render(
  <Messenger />,
  document.getElementById('app')
);
