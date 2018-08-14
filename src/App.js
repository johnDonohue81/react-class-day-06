import React, { Component } from 'react';
import Navbar from './components/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'viewContacts'
    };
  }

  switchRouteParent = route => {
    this.setState({ route: route });
  };

  render() {
    let element;

    switch (this.state.route) {
      default:
        element = <div>404 Component not found</div>;
    }

    return (
      <div>
        <Navbar />
        <div className="container">{element}</div>
      </div>
    );
  }
}

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
