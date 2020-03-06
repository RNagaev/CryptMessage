import React, { Component } from "react";

import '../styles/App.css';
import '../styles/Litera/bootstrap.min.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { msgArray: [],text: '', msg: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    render() {
        return (
            <div className="mx-auto">
                <div className="col-lg-3 jumbotron">
                    <MessageDisplayArea items={this.state.msgArray}/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea">Введите сообщение:</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3" onChange={this.handleChange} value={this.state.text}/>
                        </div>
                        <input type="submit" className="btn btn-primary float-right" value="Отправить" />
                    </form>
                </div>
            </div>
        )
    };
    handleChange(e) {
        this.setState({ text: e.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length)
            return;
        const responce = fetch('api/crypt/encrypt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.text)
        })
        .then(responce => responce.json())
        .then(encrypted => this.setState(state => ({
                    msgArray: state.msgArray.concat({
                            id: Date.now(),text: encrypted, date: new Date().toLocaleTimeString()
                        })
                })
            ))
        .then(this.setState({text: ''}))
    }
};

class MessageDisplayArea extends React.Component {
    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">Зашифрованные сообщения: {this.props.items.length}</div>
                <div className="card-body">
                    {this.props.items.map(item => (
                        <p className="card-text">{item.date +' '+ item.text}</p>
                    ))}
                </div>
            </div>
        );
    };
};

export default App;
