// import React, { Component } from 'react';
// class ContactForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     numbers: '',
//   };
//   onChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   render() {
//     const { name, numbers } = this.state;
//     return (
//       <form>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={this.onChange}
//         />
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={numbers}
//           onChange={this.onChange}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
