function TransactionForm() {
  return (
    <section className="transaction-form">
      <h2>Add Transaction</h2>

      {/* Form fields — functionality/state will come later */}
      <input
        type="text"
        placeholder="Merchant name"
      />

      <input
        type="number"
        placeholder="Amount"
      />

      <button type="button">
        Add Transaction
      </button>
    </section>
  );
}

export default TransactionForm;