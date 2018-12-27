import React from 'react';

class RefSample extends React.Component {
    state = {
        height: 0
    };

    input = React.createRef();
    box = null;


    handleClick = () => {
      this.input.focus();
    };

    componentDidMount() {
        this.setState({
            height: this.box.clientHeight
        });
    }

    render() {
        return (
            <div>
                <input
                    ref={this.input}
                />
                <button onClick={this.handleClick}>Focus Input</button>
                <div
                    ref={ref => {
                        this.box = ref;
                    }}
                >
                    <h2>TITLE</h2>
                    <p>Content</p>
                </div>
                <p>
                    <b>height:</b> {this.state.height}
                </p>
            </div>
        );
    }
}

export default RefSample;