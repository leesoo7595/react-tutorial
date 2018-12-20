import React from 'react';

class PhoneForm extends React.Component {
    state = {
        name: '',
        phone: ''
    };
    handleChange = (e) => {
        this.setState({
            // 이벤트 객체에 담겨있는 현재의 텍스트값을 읽어올 수 있다.
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    };
    render() {
        return (
            // onChange : input의 텍스트값이 바뀔때마다 발생하는 이벤트(handleChange)
            // value : 데이터 등록 후 name값 초기화 -> 현재의 name값을 반영시키도록 value를 설정
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    // onChange 이벤트가 발생하면 e.target.value 실행
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;