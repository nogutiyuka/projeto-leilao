import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import DefaultLayout from './components/defaultLayout';
import SimpleLayout from './components/simpleLayout';
import NovoCadastro from './pages/login/novoCadastro/novoCadastro';
import RecuperarSenha from './pages/login/recuperarSenha/recuperarSenha';
import AlterarSenha from './pages/login/alterarSenha/alterarSenha';
import Codigo from './pages/login/alterarSenha/codigo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout><Home></Home></DefaultLayout>}></Route>
          <Route path="/login" element={<SimpleLayout><Login></Login></SimpleLayout>}></Route>
          <Route path="/novo-cadastro" element={<SimpleLayout><NovoCadastro></NovoCadastro></SimpleLayout>}></Route>
          <Route path="/recuperar-senha" element={<SimpleLayout><RecuperarSenha></RecuperarSenha></SimpleLayout>}></Route>
          <Route path="/alterar-senha" element={<SimpleLayout><AlterarSenha></AlterarSenha></SimpleLayout>}></Route>
          <Route path="/codigo" element={<SimpleLayout><Codigo></Codigo></SimpleLayout>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
