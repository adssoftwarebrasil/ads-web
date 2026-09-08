import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import NossaHistoria from './pages/NossaHistoria';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Receitas from './pages/Receitas';
import Contato from './pages/Contato';

export default function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nossa-historia" element={<NossaHistoria />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="/receitas" element={<Receitas />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
