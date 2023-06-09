
import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.2,
      date: new Date(2022, 6, 14)

    },
    {
      id: "e2",
      title: "car insurance",
      amount: 450.2,
      date: new Date(2022, 3, 14)

    },
    {
      id: "e3",
      title: "new phone",
      amount: 700.25,
      date: new Date(2022, 2, 14)

    },
    {
      id: "e4",
      title: "new desktop",
      amount: 120.50,
      date: new Date(2022, 1, 14)

    }
  ];


  return (
    <div>
      <h1>First Application</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>


    </div>
  );
}

export default App;
