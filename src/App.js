import './App.css';
import Layout from './pageComponents/Layout';
import Header from './pageComponents/Header';
import Landing from './pageComponents/Landing';
import Table from './pageComponents/Table';
import Footer from './pageComponents/Footer';

function App() {
  return (
    <Layout>
      <Header/>
      <Landing/>
      <Table/>
      <Footer/>
    </Layout>
  );
}

export default App;
