import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [entereddate, setenteredate] = useState("");

  /*  const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    /*  setuserInput({
            ...userInput,
            enteredTitle: event.target.value, 
        }); */
    /* setuserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }) */
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    /*   setuserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */
    /* setuserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        }) */
  };

  const dateChangeHandler = (event) => {
    setenteredate(event.target.value);
    /*  setuserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */
    /* setuserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        }) */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
        date: new Date(entereddate),
      };
      
      props.onSaveExpenseData(expenseData);
      setenteredTitle('');
      setenteredAmount('');
      setenteredate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick ={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
