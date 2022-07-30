import React, { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    });
  };
  onChange = event => {
    // const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteUser = user => {
    this.setState({
      contacts: this.state.contacts.filter(userName => userName !== user),
    });
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <p>Phonebook</p>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChange}
            value={name}
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChange}
            value={number}
          />
          <label>Find contact by name</label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.onChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          Contact
          {this.state.contacts.map(item => (
            <li key={shortid.generate()}>
              {item.name}: {item.number}
              <button onClick={() => this.deleteUser(item)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
