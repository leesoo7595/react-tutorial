import React from 'react';

class PhoneForm extends React.Component {
    state = {
        name: ''
    };
    handleChange = (e) => {
        this.setState({
            // 이벤트 객체에 담겨있는 현재의 텍스트값을 읽어올 수 있다.
            name: e.target.value
        })
    };
    render() {
        return (
            // onChange : input의 텍스트값이 바뀔때마다 발생하는 이벤트(handleChange)
            // value : 데이터 등록 후 name값 초기화 -> 현재의 name값을 반영시키도록 value를 설정
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    // onChange 이벤트가 발생하면 e.target.value 실행
                    onChange={this.handleChange}
                />
                <div>{this.state.name}</div>
            </form>
        );
    }
}

export default PhoneForm;