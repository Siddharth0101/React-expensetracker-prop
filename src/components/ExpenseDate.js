import "./ExpenseDate.css";
function ExpenseDate(prop) {
  const month = prop.date.toLocaleString("en", { month: "long" });
  const date = prop.date.toLocaleString("en", { day: "2-digit" });
  const year = prop.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}
export default ExpenseDate;
