import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionCard from "./components/TransactionCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

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

  {transactions.map((transaction, index) => (
  <TransactionCard
    key={index}
    merchant={transaction.merchant}
    amount={transaction.amount}
  />
))}

</section>
    </main>
  );
}

export default App;