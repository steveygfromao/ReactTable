import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilterTable } from './components/FilterTable';
import { ButtonTable } from './components/ButtonTable';

function App() {
  return (
    <>
    <div className="App">
        <BasicTable></BasicTable>
        <div></div>
        <FilterTable></FilterTable>
        <div>
        </div>
        <ButtonTable></ButtonTable>
    </div>
    </>
  );
}

export default App;
