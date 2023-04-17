import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const stopDisplayHandler = () => {
    setDisplay(false);
  };

  const startDisplayHandler = () => {
    setDisplay(true);
  };

  return (
    <div className="new-expense">
      {!display && (
        <button onClick={startDisplayHandler}>Add New Expense</button>
      )}
      {display && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopDisplayHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
