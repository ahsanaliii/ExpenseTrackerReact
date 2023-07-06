import React from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
    const dropdownChangeHandler = e => {
        props.chnageHandler(e.target.value)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Select Year</label>
        <select value={props.slected} onChange={dropdownChangeHandler}>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
        </select>
      </div>
    </div>
  )
}
