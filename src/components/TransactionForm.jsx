import { useState } from "react";

function TransactionForm({onAddTransaction, transactionToEdit,
  onUpdateTransaction,}) {

    // BR-7: Initialize form with existing transaction when editing
const [merchant, setMerchant] = useState(
  transactionToEdit?.merchant ?? ""
);

const [amount, setAmount] = useState(
  transactionToEdit ? String(transactionToEdit.amount) : ""
);

  const handleSubmit = (event) => {
    event.preventDefault();

 // BR-3: Create a new transaction object
   const newTransaction={
    merchant,
    // BR-5: Convert amount from input string to a number
    amount: Number(amount),
  };

    // BR-3: Send the new transaction to App
  //onAddTransaction(newTransaction); 

  // BR-7: Add a new transaction or update the selected one
  if (transactionToEdit) {
   onUpdateTransaction(newTransaction);
  } else {
  onAddTransaction(newTransaction);
   }
   };

  return (
       
    <form className="transaction-form" onSubmit={handleSubmit}> 
       <h2>{transactionToEdit ? "Edit Transaction" : "Add Transaction"}</h2>
         {/* BR-2: Controlled merchant input */}    
      <input
        type="text"
        placeholder="Merchant name"
        value={merchant}
        onChange={(event) => setMerchant(event.target.value)}
      />
       {/* BR-2: Controlled amount input */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
       <button type="submit">
         {transactionToEdit ? "Update Transaction" : "Add Transaction"}
       </button>
    </form>
  );
}

export default TransactionForm;