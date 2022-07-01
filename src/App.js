import logo from './logo.svg';
import './App.css';
import {Link,Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeping App</h1>
      <nav style={{ 
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            paddingRight:"1px"
            
      }}>
          
          <Link to = "expenses">Expenses</Link>
          <Link to = "invoices">Invoices</Link>
          

      </nav>
      <Outlet />
    </div>
  );
}

export default App;
