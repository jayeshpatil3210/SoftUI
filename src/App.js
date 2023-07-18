import './App.css';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/sidebar/table/Table';
import { Layout } from './Layout';
import Dashboard from './components/sidebar/Hero/Dashboard';
import Billing from './components/sidebar/billing/Billing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path='/table' element={<Table />} />
            <Route path='/Billing' element={<Billing />} />
            <Route path='*' element={<Navigate to='/Dashboard' />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
