import React from 'react';

class SearchForm extends React.Component {

    constructor() {

        super();

        this.state = {
            searchParams: {},
            searching: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            searchParams:{
                subject: this.refs.subject.value
            }
        }, function() {
            this.props.newQuery(this.state); // Send the Query to Home Component
            this.setState({
                searching: true
            }, () => setTimeout(() => this.setState({ searching: null }), 1000));
        });
    }

    render() {
        return(
            <div className="col s12 m12 l6">
            <div className="card-panel">
            <h2 className="header center">Search for a New York Time Article</h2>

            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="subject">Article subject</label>
                            <input type="text" ref="subject" id="subject" required="required" className="validate" />
                        </div>
                    </div>

                    <div className="row">
                        <button className="btn grey darken-4 waves-effect waves-light right" type="submit" name="submitBtn">Submit</button>
                    </div>

                </form>
            </div>

            </div>
            </div>
        )
    }
}

export default SearchForm;