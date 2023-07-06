import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {
  return (
    <div>
      {props.items.length === 0 ? (
        <h2 className='expenses-list__fallback'>No Expense Found.</h2>
      ) : (
        props.items.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  )
}
