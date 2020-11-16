import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const ExpenseTransaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext)

	return (
		<li className="transaction">
			<span className="transaction-text">{transaction.expenseText}</span>
			<span className="transaction-amount">{transaction.expenseAmount}</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}><i className="fas fa-trash"></i></button>
		</li>
	)
}

export default ExpenseTransaction
