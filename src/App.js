import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {
	return (
		<div className="container">
			<div className="app-wrapper">
				<GlobalContextProvider>
					<Header />
					<Balance />
					<AddTransaction />
					<IncomeList />
					<ExpenseList />
				</GlobalContextProvider>
			</div>
		</div>
	)
}

export default App
