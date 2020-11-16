import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeTransaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext)

	return (
		<li className="transaction">
			<span className="transaction-text">{transaction.incomeText}</span>
			<span className="transaction-amount">{transaction.incomeAmount}</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}><i className="fas fa-trash"></i></button>
		</li>
	)
}

export default IncomeTransaction
