import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function mapContact(contact){
  return(
    <Card
      key = {contact.id}
      name = {contact.name}
      imageLink = {contact.imgURL}
      phone = {contact.phone}
      email = {contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imageLink = "https://www.ibad.me/images/logo2.png" />
      {contacts.map(mapContact)}
    </div>
  );
}

export default App;
