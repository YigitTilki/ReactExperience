
import './App.css';
import React from 'react';
import User from './components/User';
import NavBar from './NavBar';

function App() {
  return (
    <div className="container">
       <NavBar title='User App'/>
       <hr />
       <User
       name = "Yiğit Tilki"
       salary = "10000$"
       department = "Computer Engineering"
       
       />
       <User
       name = "Birol Tilki"
       department = "Head Teacher"
       
       />
        </div>
  );
}

export default App;
