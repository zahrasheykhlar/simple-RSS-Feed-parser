import React from 'react';

export default class RssFeedParserForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {rss: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({rss: event.target.value});
  }

  handleSubmit(event) {
    alert('A RSS was submitted: ' + this.state.rss);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          RSS:
          <input type="text" value={this.state.rss} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Parse" />
      </form>
    );
  }
}