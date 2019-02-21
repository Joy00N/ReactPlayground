import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {ms1: [], ms2: []};

    componentDidMount() {
        setInterval(this.hello, 250);
        setInterval(this.welcome, 250);
    }

    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({ms1: message});
            });
    };

    welcome = () => {
        fetch('/api/user')
            .then(response => response.text())
            .then(welcome => {
                this.setState({ms2: welcome});
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.ms1}</h1>
                    <h1>Gettings! {this.state.ms2}</h1>
                </header>
                <p className="App-intro">
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
