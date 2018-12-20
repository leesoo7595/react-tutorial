import React from 'react';

class PhoneForm extends React.Component {
    state = {
        name: ''
    };
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    // onChange 이벤트가 발생하면 e.target.value 값을 통해
                    // 이벤트 객체에 담겨있는 현재의 텍스트값을 읽어온다
                    onChange={this.handleChange}
                />
                <div>{this.state.name}</div>
            </form>
        );
    }
}

export default PhoneForm;