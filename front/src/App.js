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
import PrivateRouter from './components/privateRouter';
import Perfil from './pages/perfil/perfil';
import AlterarPerfil from './pages/perfil/alterarPerfil';


// App.js
function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route element={<PrivateRouter />}>
                      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
                      <Route path="/perfil" element={<DefaultLayout><Perfil /></DefaultLayout>} />
                      <Route path="/alterar-perfil" element={<DefaultLayout><AlterarPerfil /></DefaultLayout>} />
                  </Route>

                  <Route path="/login" element={<SimpleLayout><Login /></SimpleLayout>} />
                  <Route path="/novo-cadastro" element={<SimpleLayout><NovoCadastro /></SimpleLayout>} />
                  <Route path="/recuperar-senha" element={<SimpleLayout><RecuperarSenha /></SimpleLayout>} />
                  <Route path="/alterar-senha" element={<SimpleLayout><AlterarSenha /></SimpleLayout>} />
                  <Route path="/codigo" element={<SimpleLayout><Codigo /></SimpleLayout>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

