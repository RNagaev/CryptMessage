import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/Litera/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msgArray: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    if (!text.length) return;
    fetch('api/crypt/encrypt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(text),
    })
      .then((responce) => responce.json())
      .then((encrypted) => this.setState((state) => ({
        msgArray: state.msgArray.concat({
          id: Date.now(), text: encrypted, date: new Date().toLocaleTimeString(),
        }),
      })))
      .then(this.setState({ text: '' }));
  }

  render() {
    const { msgArray } = this.state;
    const { text } = this.state;
    return (
      <div className="mx-auto">
        <div className="col-lg-3 jumbotron">
          <MessageDisplayArea items={msgArray} />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Введите сообщение:</label>
              <textarea className="form-control" id="exampleTextarea" rows="3" onChange={this.handleChange} value={text} />
            </div>
            <input type="submit" className="btn btn-primary float-right" value="Отправить" />
          </form>
        </div>
      </div>
    );
  }
}

const MessageDisplayArea = (props) => (
  <div className="card border-primary mb-3">
    <div className="card-header">
      Зашифрованные сообщения:
      {props.items.length}
    </div>
    <div className="card-body">
      {props.items.map((item) => (
        <p className="card-text">{`${item.date} ${item.text}`}</p>
      ))}
    </div>
  </div>
);

export default App;
