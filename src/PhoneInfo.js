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

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // info 객체를 props로 받아와서 렌더링 해준다.
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;