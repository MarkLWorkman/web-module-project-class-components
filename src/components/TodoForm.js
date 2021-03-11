import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            Text: ''
        };
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDeafault();
        this.props.addTask(this.state.text);
        this.setState({
            itemText: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type= 'text'
                        name= 'text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.props.clearCompleted}> Clear Completed</button>
            </div>
        );
    }
}

export default Form;