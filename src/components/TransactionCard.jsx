function TransactionCard({ merchant, amount, status , onDelete, }) {
  return (
    <article className={`transaction-card ${status.toLowerCase()}`}>
      {/* BR-4: Display transaction data received through props */}
      <div className="transaction-info">
        <h3>{merchant}</h3>
       { /*<p>{date}</p>*/}
      </div>

      {/* Transaction amount */}
      <strong>${amount}</strong>

      {/* Risk status */}
      <span className="risk-badge">{status}</span>

      {/* These buttons are UI-only for now */}
      <div className="transaction-actions">
        <button type="button">Edit</button>
        <button type="button"  onClick={onDelete}>Delete</button>
      </div>
    </article>
  );
}

export default TransactionCard;