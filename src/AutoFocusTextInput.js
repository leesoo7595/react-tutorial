import React from 'react';
import CustomTextInput from "./CustomTextInput";

class AutoFocusTextInput extends React.Component {
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    // 마운트 되자마자 input창에 포커싱이 될 수 있도록 해주는 것
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );

    }
}

export default AutoFocusTextInput;