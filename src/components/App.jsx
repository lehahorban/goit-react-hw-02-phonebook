import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import style from '../components/Style.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = shortid.generate();
    // console.log(form);
    const addContact = this.state.contacts.find(
      contact => contact.name === this.state.name
    );
    // console.log(addContact);
    if (addContact) {
      alert(`${addContact.name} alredy is contact`);
      this.setState({ name: '', number: '' });
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { id: id, name: this.state.name, number: this.state.number },
        ],
        name: '',
        number: '',
      });
    }

    form.reset();
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ [event.target.name]: event.target.value });
  };

  deleteUser = user => {
    this.setState({
      contacts: this.state.contacts.filter(userName => userName !== user),
    });
  };

  render() {
    const { name, number, filter } = this.state;

    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    // console.log(filterContact);

    return (
      <div className={style.app}>
        <p>Phonebook</p>
        <ContactForm
          name={name}
          number={number}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />

        <Filter filter={filter} onChange={this.onChange} />

        <ContactList
          filterContact={filterContact}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default App;
