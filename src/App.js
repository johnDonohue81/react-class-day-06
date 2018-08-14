import React, { Component } from 'react';
import Navbar from './components/Navbar';
import uuid from 'uuid';
import ContactCard from './components/ContactCard';

/*
  Contact Manager

  Application to keep a contact book with people and their information.

  Data about contacts:
    Id
    Name
    Email
    Phone
    Notes
    Company
    When you met


*/

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: uuid(),
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '111-111-1111',
          notes: 'Generic guy',
          company: 'Doe Inc',
          dateMet: '5-6-2015'
        },
        {
          id: uuid(),
          name: 'Sally Blogs',
          email: 'sblogs@gmail.com',
          phone: '222-222-2222',
          notes: 'Blogger',
          company: 'weBlog',
          dateMet: '8-14-2016'
        },
        {
          id: uuid(),
          name: 'Karen Syles',
          email: 'sylesk@gmail.com',
          phone: '333-333-3333',
          notes: 'Kyles for short',
          company: 'Starbucks',
          dateMet: '6-8-2015'
        },
        {
          id: uuid(),
          name: 'Jack Ford',
          email: 'ford2@gmail.com',
          phone: '444-444-4444',
          notes: 'Not a car guy',
          company: 'Honda',
          dateMet: '4-21-2017'
        }
      ],
      route: 'viewContacts'
    };
  }

  switchRouteParent = route => {
    this.setState({ route: route });
  };

  render() {
    let element;

    switch (this.state.route) {
      case 'viewContacts':
        element = (
          <div>
            {this.state.contacts.map(contact => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </div>
        );
        break;
      default:
        element = <div>404 Component not found</div>;
    }

    return (
      <div>
        <Navbar switchRouteChild={this.switchRouteParent} />
        <div className="container">{element}</div>
      </div>
    );
  }
}
