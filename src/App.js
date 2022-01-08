import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from "./components/Budget";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="container">
      <h1 className="mt-3">Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <Balance />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <Expenses />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
    </div>
    </AppProvider>
  );
}

export default App;
