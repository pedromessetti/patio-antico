//React Router imports
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

//Components import
import Header from 'components/Header'
import Banner from 'components/Banner'
import Footer from 'components/Footer'

//Pages import
import Cardapio from 'pages/Cardapio'
import Home from 'pages/Home'
import Reservas from 'pages/Reservas'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'

//Create and export the base of the aplication
export default function AppRouter() {
  
  const Wrapper = ({children}: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <Router>
      <Wrapper>        
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Banner />} >
              <Route index element={<Home />} />
            </Route>
            <Route path='ementa' element={<Cardapio />} />
            <Route path='reservas' element={<Reservas />} />
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  )
}
