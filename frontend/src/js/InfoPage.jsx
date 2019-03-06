import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import autoBind from 'react-autobind';
import {Input} from 'antd';
import Save from './Save.jsx';


const {TextArea} = Input;

class InfoPage extends React.Component {

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
                <button onClick={this.props.action.validate2}>Click me!</button>
                <Save />
            </div>
        );
    }
}

function mapStateToProps(state, prop){
    return {
        save: state.save
    }
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(Save, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);