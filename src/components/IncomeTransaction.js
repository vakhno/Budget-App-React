import React from 'react'

const IncomeTransaction = ({ transaction }) => {
	return (
		<li className="transaction">
			<span className="transaction-text">{transaction.incomeText}</span>
			<span className="transaction-amount">{transaction.incomeAmount}</span>
			<button className="delete-btn"><i className="fas fa-trash"></i></button>
		</li>
	)
}

export default IncomeTransaction
