import NavBar from 'components/NavBar/index';
import Footer from 'components/Footer/index'
import React from 'react';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <DonutChart/>
          </div>
          <div className="py-3"><h2 className="text-primary">Todas as vendas</h2></div>

         
          
        </div>

        
      </div>
      <DataTable />
      <Footer />

    </>

  );
}

export default App;
