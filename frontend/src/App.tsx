import NavBar from 'components/NavBar/index';
import Footer from 'components/Footer/index'
import React from 'react';
import DataTable from 'components/DataTable';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
      </div>
      <DataTable/>
      <Footer/>
      
    </>

  );
}

export default App;
