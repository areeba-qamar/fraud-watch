import shieldIcon from "../assets/shield.svg";

function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={shieldIcon} alt="FraudWatch shield" />
        
        <div className="brand-text">
          <h1>FraudWatch</h1>
          <p>Transaction Risk Monitoring</p>
        </div>
      </div>
    </header>
  );
}

export default Header;