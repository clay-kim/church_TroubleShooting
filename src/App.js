import React from 'react';
import Form from './Form';
import DataDisplay from './DataDisplay';
import { DataProvider } from './DataContext';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
      <h1>Trouble Shooting Manual</h1>

        <h2>문제 등록하기</h2>
        <Form />
        <DataDisplay />
      </div>
    </DataProvider>
  );
}

export default App;
