import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {
	const { addIncome, addExpense } = useContext(GlobalContext)
	const [income, setIncome] = useState({
		incomeText: '',
		incomeAmount: 0
	})
	const [expense, setExpense] = useState({
		expenseText: '',
		expenseAmount: 0
	})

	const onChangeIncome = e => {
		setIncome({ ...income, [e.target.name]: e.target.value })
	}

	const onSubmitIncome = e => {
		e.preventDefault()

		const newIncomeTransaction = {
			if: uuidv4(),
			incomeText: income.incomeText,
			incomeAmount: +income.incomeAmount
		}

		addIncome(newIncomeTransaction)

		setIncome({
			incomeText: '',
			incomeAmount: 0,
		})
	}

	const onChangeExpense = e => {
		setExpense({ ...expense, [e.target.name]: e.target.value })
	}

	const onSubmitExpense = e => {
		e.preventDefault()

		const newExpenseTransaction = {
			if: uuidv4(),
			expenseText: expense.expenseText,
			expenseAmount: +expense.expenseAmount
		}

		addExpense(newExpenseTransaction)


		setExpense({
			expenseText: '',
			expenseAmount: 0,
		})
	}

	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmitIncome}>
				<div className="input-group income">
					<input type="text" name="incomeText" value={income.incomeText} placeholder='Add income...' autoComplete="off" onChange={onChangeIncome} />
					<input type="number" name="incomeAmount" value={income.incomeAmount} placeholder='Amount' autoComplete="off" onChange={onChangeIncome} />
					<input type="submit" value="Submit" />
				</div>
			</form>
			<form onSubmit={onSubmitExpense}>
				<div className="input-group expense">
					<input type="text" name="expenseText" value={expense.expenseText} placeholder='Add expense...' autoComplete="off" onChange={onChangeExpense} />
					<input type="number" name="expenseAmount" value={expense.expenseAmount} placeholder='Amount' autoComplete="off" onChange={onChangeExpense} />
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	)
}

export default AddTransaction
