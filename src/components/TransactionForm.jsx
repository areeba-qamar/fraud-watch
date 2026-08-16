import { useState } from "react";

function TransactionForm({onAddTransaction}) {

    // BR-2: Form input state
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

 // BR-3: Create a new transaction object
   const newTransaction={
    merchant,
    amount,
  };

    // BR-3: Send the new transaction to App
  onAddTransaction(newTransaction); 
   };

  return (
       
    <form className="transaction-form" onSubmit={handleSubmit}>      <h2>Add Transaction</h2>

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
       {/* BR-2: Submit the form  */}
      <button type="submit" >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;