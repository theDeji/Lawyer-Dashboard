import React from 'react'
import Cases from './components/Cases'
import Header from './components/Header'
import Chart from './components/Chart'
import CaseContextProvider from './contexts/CaseContext'

function App() {
  return (
    <div className="App">
      <Header />
      <CaseContextProvider>
        <Cases />
        <Chart />
      </CaseContextProvider>
    </div>
  );
}

export default App;
