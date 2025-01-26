import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AppRoutes } from './routes/AppRoutes';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout>
           <AppRoutes/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
