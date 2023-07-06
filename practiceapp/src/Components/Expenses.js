import React, { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChar from "./ExpensesChar";

export default function Expenses(props) {
  const [filterdyear, setfilteredyear] = useState("2020");
  const filteredChangeHandler = (selectedyear) => {
    // console.log("inside expenses", selectedyear);
    setfilteredyear(selectedyear);
  };

  const filteryear = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterdyear;
  });
  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter
        slected={filterdyear}
        chnageHandler={filteredChangeHandler}
      />
      <ExpensesChar expenses={filteryear}/>
      <ExpensesList items={filteryear}/>
    </Card>
    </li>
  );
}
