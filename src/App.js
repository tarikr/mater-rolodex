import React, { Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'



// returns block of code
class App extends Component {

  constructor(){
    super();
    this.state={
      contacts: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
     response.json())
     .then(users => this.setState({contacts: users}));
    
  }

  handleChange= (e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const { contacts, searchField} = this.state;
   const filteredContacts = contacts.filter(contact =>
     contact.name.toLowerCase().includes(searchField.toLocaleLowerCase()) 
    );
  return (
    <div className="App">
      <h1>Master Contact Rolodex</h1>
  
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
             {this.state.string}
             {this.state.string}
        </p>
        <button onClick={() => this.setState({string: 'Hello Taha'})}>Change Text</button>
    
      </header> */}
      <SearchBox 
        placeholder='search conteact'
        handleChange={this.handleChange}
        />
      <CardList contacts= {filteredContacts} >
      
          </CardList>

    </div>
  );
}

}

export default App;
