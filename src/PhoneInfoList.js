import React from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends React.Component {
    // data라는 배열을 가져와서 map을 통해 jsx로 변환해준다.
    static defaultProps = {
        data: [],
        // onRemove 함수가 전달되지 않았을 경우의 defaultProps
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    };

    // App이 리렌더링됨에 따라 PhoneInfoList도 리렌더링되는 자원을 아끼기위해!
    shouldComponentUpdate(nextProps, nextState) {
        // 다음 받아올 데이터가 현제 데이터와 다른 배열일 때 true로 설정하도록
        // 이렇게 되면 변화가 필요하지 않을 때는 render함수 호출이 되지않는다.
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            // key는 리액트에서 배열을 렌더링할 때 꼭 필요한 값
            // key를 부여하지 않으면, 배열의 index 값이 key로 설정이 된다. 그렇게 된다면 매우 비효율적이다!
            // 배열값 중간에 새로운 data를 넣을 때, 배열의 index를 key로 가지게 되기 때문에 중간에 값이 들어가서
            // index 값도 함께 바꿔버림 -> 그 아래 값이 index가 다 바뀌게 됨
            // 그래서 key를 배열의 index값으로 사용하는게 아니라, 데이터를 추가할 때마다 고정적인 고유값을 부여주는 것이 좋다
            // 그렇게 되면 새로운 배열 값이 추가됏을때 새로운 DOM은 하나만 생성된다. 나머지는 바뀌지않고 모두 유지
            // key값은 항상 고유해야한다.
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;