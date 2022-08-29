import { useEffect } from 'react';
import './App.css';

import {Route,Switch,useHistory,useLocation} from 'react-router-dom'

import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';

import Home from './pages/home/home';
import Sales from './pages/sales/sales';

import Medicines from './pages/medicines/medicines';
import Customers from './pages/customers/customers';
import Billing from './pages/billing/billing';

import Sidebar from './components/sidebar/sidebar';



function App() {
  const history = useHistory()
  console.log(useLocation().pathname)

  useEffect(() => {
  if(localStorage.getItem('token') == null){
     console.log('access denied')
     history.push('/signin')
  }  
  }, [localStorage.getItem('token')])

  return (
    <div className="App">
         <div className="container">
         <Sidebar/>

       <Switch>
         <Route path='/signup' exact component={Signup}/>
         <Route path='/signin' exact component={Signin}/>
         <Route path='/' exact component={Home}/>
         <Route path='/medicines' exact component={Medicines}/>
         <Route path='/customers' exact component={Customers}/>
         <Route path='/billing' exact component={Billing}/>
         <Route path='/sales' exact component={Sales}/>
         <Route path='*' exact component={Home}/>
       </Switch>
   
      </div>
    </div>
  );
}

export default App;
