import Expense from './Expense';

export default class Trip {
  id: number;
  expenses: Expense[]
  startDate: Date;
  endDate: Date;
  label: string;
  
  constructor(id: number, startDate: Date = new Date(), endDate: Date = new Date(), label: string) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.label = label;
    this.expenses = []
  }

  addExpense(expense: Expense): void { 
    this.expenses.push(expense);
  }
}