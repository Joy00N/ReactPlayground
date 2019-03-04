import React from 'react';
import autoBind from 'react-autobind';
import {Input} from 'antd';
import Save from './Save.jsx';

const {TextArea} = Input;

export default class InfoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: null
        };
        autoBind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({inputValue: value});
    }

    handleClick = () => {
        this.save.isValid()
    }

    render() {
        return (
            <div>
                <TextArea
                    placeholder='Enter New Value'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                >
                </TextArea>
                <br/>
                <button onClick={this.handleClick}>Click me!</button>
                <Save onRef={ref => (this.save = ref)}/>
            </div>
        );
    }
}