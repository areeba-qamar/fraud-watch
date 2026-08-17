import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionCard from "./components/TransactionCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

   // BR-6: Delete a transaction from state
  const handleDeleteTransaction = (indexToDelete) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };
  
  return (
    <main className="app">
      <Header />

      {/*Add to the previous transactions (array) , and spread operator to keep that were already there */}

   <TransactionForm
      onAddTransaction={(transaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);
    }}
    />

  <section className="transactions">
  <h2>Transactions</h2>


{/* BR-4: Render a card for every transaction in state */}

  {transactions.map((transaction, index) =>{

    // BR-5: Determine risk based on transaction amount
  let status;

  if (transaction.amount < 2000) {
    status = "Safe";
  } else if (transaction.amount <= 5000) {
    status = "Suspicious";
  } else {
    status = "Fraud";
  }
  return(
  <TransactionCard
    key={index}
    merchant={transaction.merchant}
    amount={transaction.amount}
    status={status}
    onDelete={()=>handleDeleteTransaction(index)}

  />
  )
})}
</section>

</main>
  );
}

export default App;