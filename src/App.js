import React from 'react';
import PhoneForm from "./PhoneForm";
import PhoneInfoList from "./PhoneInfoList";

class App extends React.Component {
    id = 2;
    state = {
        information: [
            {
                id: 0,
                name: '천이수',
                phone: '010-2129-7510'
            },
            {
                id: 1,
                name: '천이현',
                phone: '010-6690-7510'
            }
        ]
    };

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data})
        })
    };

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            // id가 제외된 information 배열을 만듦
            information: information.filter(info => info.id !== id)
        })
    };

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data를 덮어씀
                : info // 기존의 값을 그대로 유지
            )
        })
    };

    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList
                    data={information}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;