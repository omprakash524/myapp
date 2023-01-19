import './ExpenseItem.css';
function ExpenseItem() {
  const expenseDate = new Date(2023,2,28);
  const expenseTitle = "Car insurance";
  const expenseAmount = 244.2;
  return (
    <div className='expense-item'>
      <div>{expenseDate.toString()}</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>$294.5</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
