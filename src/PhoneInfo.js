import React from 'react';

class PhoneInfo extends React.Component {
    // info 값을 받아오지 않으면 component가 크래쉬된다 -> defaultProps 통해 info 기본값 설정
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
    };

    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true로 설정해줄 것
        // 이 값이 true일 때, 기존에 텍스트 형태로 보여주던 값들을 input 형태로 보여주게된다.
        editing: false,
        // input의 값은 유동적이다. input값을 담기 위해서 각 필드를 위한 값도 설정
        name: '',
        phone: '',
    };

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    };

    // editing 값을 반전시키는 함수
    // true -> false, false -> true
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    };

    // input에서 onChange 이벤트가 발생될 때
    // 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우엔 리렌더링 한다.
        return true;

    }

    componentDidUpdate(prevProps, prevState) {
        // editing값이 바뀔 때 처리할 로직
        // 수정을 눌렀으면 -> 기존 값이 input에 나타나고
        // 수정을 적용했으면 -> input의 값이 부모에게 전달함
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 전환
            // info의 값을 state에 넣어줌
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 전환
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    // info 객체를 props로 받아와서 렌더링 해준다.
    // 수정 버튼 누를 때 한번 누르는데 왜 리렌더링은 두 번 될까....
    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        // 수정모드
        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>저장</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        // 일반모드
        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;