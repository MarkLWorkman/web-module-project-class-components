import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
        };
    };

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
            itemText: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='itemText'
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;