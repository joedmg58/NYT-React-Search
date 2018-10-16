import React from 'react';

class SearchForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            searchTopic: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.searchTopic);
    }

    handleChange(event) {
        this.setState({searchTopic: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Topic Search:
                    <input type="text" value={this.state.searchTopic} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchForm;