import "./ExpenseItem.css";
function ExpenseItem(prop) {
  const month = prop.date.toLocaleString("en", { month: "long" });
  const date = prop.date.toLocaleString("en", { day: "2-digit" });
  const year = prop.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{date}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">{prop.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
