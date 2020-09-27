import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import "./styles.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <PhonebookTitle />
        <ContactForm />

        {/* <CSSTransition
          in={showNotification}
          timeout={1000}
          classNames="Fade"
          unmountOnExit
        >
          <Notification name={sameName} />
        </CSSTransition> */}

        <h2 className={"Contacts"}>Contacts</h2>

        <CSSTransition in={true} timeout={1000} classNames="Fade" unmountOnExit>
          <Filter />
        </CSSTransition>
        {this.props.isLoadingContacts && <h3>Loading contacts...</h3>}
        <CSSTransition
          in={true}
          timeout={500}
          classNames="SlideIn"
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
