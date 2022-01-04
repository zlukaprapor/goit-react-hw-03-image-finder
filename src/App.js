import { Component } from 'react';
import Searchbar from './component/Searchbar';

export default class App extends Component {
  state = { searchRequest: '' };

  hendleFormSubmit = (searchRequest) => {
    this.setState({ searchRequest });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
      </div>
    );
  }
}
