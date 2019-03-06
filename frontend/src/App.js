import React, {Component} from 'react';
import './App.css';

const testData = [
    {name: "Joy", avatar_url: "https://avatars3.githubusercontent.com/u/38506754?v=4", company: "1234!"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Joy", avatar_url: "https://avatars3.githubusercontent.com/u/38506754?v=4", company: "1234!"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Joy", avatar_url: "https://avatars3.githubusercontent.com/u/38506754?v=4", company: "1234!"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Joy", avatar_url: "https://avatars3.githubusercontent.com/u/38506754?v=4", company: "1234!"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {name: "Joy", avatar_url: "https://avatars3.githubusercontent.com/u/38506754?v=4", company: "1234!"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile}/>)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url}/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Github username"/>
                <button>Add card</button>
            </form>
        );
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <CardList/>
                <div className="header">{this.props.title}</div>
                <Form/>
            </div>
        );
    }

    // state = {ms1: [], ms2: []};
    //
    // componentDidMount() {
    //     setInterval(this.hello, 250);
    //     setInterval(this.welcome, 250);
    // }
    //
    // hello = () => {
    //     fetch('/api/hello')
    //         .then(response => response.text())
    //         .then(message => {
    //             this.setState({ms1: message});
    //         });
    // };
    //
    // welcome = () => {
    //     fetch('/api/user')
    //         .then(response => response.text())
    //         .then(welcome => {
    //             this.setState({ms2: welcome});
    //         });
    // };
    //
    // render() {
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo"/>
    //                 <h1 className="App-title">{this.state.ms1}</h1>
    //                 <h1>Gettings! {this.state.ms2}</h1>
    //                 <button>click me!</button>
    //             </header>
    //             <p className="App-intro">
    //                 Edit <code>src/App.js</code> and save to reload.
    //             </p>
    //         </div>
    //     );
    // }
}

export default App;
