import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div className="App"> 
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda de los audiófilos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Filtros aplicados'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>           
        </BrowserRouter>         
    </div>
  );
}

export default App;
