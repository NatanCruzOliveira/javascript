import Header from './components/Header';
import Article from './components/Article';

import {useState} from 'react'


function App() {

  let [carrinho, setcarrinho] = useState(0);

  function additem(){
    setcarrinho(carrinho +1);
    console.log(carrinho);
  }

  function removeitem(){

    if(carrinho > 0) {
      setcarrinho(carrinho -1);
    }
    
    console.log(carrinho);
  }

  return (
    <>
      <Header></Header>
      <Article></Article>

      <h3>
        Adicione a quantidade no carrinho: {carrinho}
      </h3>

    <div className='flex'>
      <button className='additens' onClick = {additem}>+</button>
      <button className ='removeitens' onClick = {removeitem}>-</button>
    </div>

    </>
    
  );
}

export default App;
