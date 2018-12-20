import React from 'react';
import PhoneForm from "./PhoneForm";

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

    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                {JSON.stringify(information)}
            </div>
        );
    }
}

export default App;