import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [enteredtitle , setenteredtitle] = useState('')
    const [enteredamount , setenteredamount] = useState('')
    const [entereddate , setentereddate] = useState('')
    const HandleChange = (event)=>{
        setenteredtitle(event.target.value)
    }
    const HandleChangeAmount = e =>{
        setenteredamount(e.target.value)
    }
    const HandleChangeDate = e =>{
        setentereddate(e.target.value)

    }
    const HandleSubmit = e => {
        e.preventDefault();
        const expenseData = {
            title : enteredtitle,
            amount : +enteredamount,
            date : new Date(entereddate)
        }
        // console.log("inside expense form")
        props.onSaveExpenseData(expenseData);
        setenteredamount('');
        setentereddate('');
        setenteredtitle('');
    }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input value={enteredtitle} type="text" onChange={HandleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input value={enteredamount} type="number" min="0.01" step="0.01" onChange={HandleChangeAmount} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input value={entereddate} type="date" min="2019-01-01" max="2022-12-31" onChange={HandleChangeDate} />
          </div>
          <div className="new-expense__actions">
            <button>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}
