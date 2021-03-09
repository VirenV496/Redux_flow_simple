import React from 'react'
import './App.css';


import { Provider} from 'react-redux'
import store from './redux/store'
import AComp from './components/AComp';


function App() {

return(

 <Provider  store={store}>

        <AComp/>


  </Provider>


  );
}

export default App;
