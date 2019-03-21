import React from 'react';
import autoBind from "react-autobind/src/autoBind";

export default class Save extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            errorMessage: ''
        };
    }

    validationInput(props) {
        if (props.value.length !== 4)
            return 'ERROR!';
    }

    validate2 = (item) => {
        console.log(item);

    }

    isValid() {
        window.alert("hello");
    }

    render() {
        return (
            <div>
                {this.state.errorMessage}
            </div>
        );
    }
}