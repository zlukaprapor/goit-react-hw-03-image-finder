import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  hendleNameChange = (event) => {
    this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = (event) => {
    if (this.state.searchRequest.trim() === '') {
      alert('Please enter your request!!!');
      return;
    }
    event.preventDefault();
    this.props.onSubmit(this.state.searchRequest);
    this.setState({ searchRequest: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.searchRequest}
            onChange={this.hendleNameChange}
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
