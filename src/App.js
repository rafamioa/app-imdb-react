import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Form from './Componentes/Form/Form';
import Filmes from './Componentes/Filmes/Filmes';


function App() {
  return (
    <div className="App bg-secondary">
      <Header />
      <Form />
      <Filmes />
      <Footer />
    </div>
  );
}

export default App;
