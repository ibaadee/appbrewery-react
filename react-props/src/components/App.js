import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imageLink = "https://www.ibad.me/images/logo2.png" />
      <Card 
          name = {contacts[0].name}
          imageLink = {contacts[0].imgURL}
          phone = {contacts[0].phone}
          email = {contacts[0].email}
      />
      <Card 
          name = {contacts[1].name}
          imageLink = {contacts[1].imgURL}
          phone = {contacts[1].phone}
          email = {contacts[1].email}
      />
      <Card 
          name = {contacts[2].name}
          imageLink = {contacts[2].imgURL}
          phone = {contacts[2].phone}
          email = {contacts[2].email}
      />
    </div>
  );
}

export default App;
