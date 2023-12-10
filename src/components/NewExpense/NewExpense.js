import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(prop) {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
