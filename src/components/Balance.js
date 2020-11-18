import React, { useContext } from 'react'
import { GlobalContext, GlobalCOntext } from '../context/GlobalContext'
const Balance = () => {
	const { incomeTransactions, expenseTransactions } = useContext(GlobalContext)

	const incomeAmounts = incomeTransactions.map(
		transaction => transaction.incomeAmount
	)

	const expenseAmounts = expenseTransactions.map(
		transaction => transaction.expenseAmount
	)

	const totalIncome = incomeAmounts.reduce((acc, elem) => (acc += elem), 0).toFixed(2)
	const totalExpense = expenseAmounts.reduce((acc, elem) => (acc += elem), 0).toFixed(2)

	return (
		<div className='balance'>
			<h2>Your Balance</h2>
			<h3>$0.00</h3>
			<div className="income-expense">
				<div className="plus">
					<h3>Income</h3>
					<p>+${totalIncome}</p>
				</div>
				<div className="minus">
					<h3>Exprenses</h3>
					<p>-${totalExpense}</p>
				</div>
			</div>
		</div>
	)
}

export default Balance
