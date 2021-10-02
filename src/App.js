import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>

          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>

          <Route exact path='/orderdetail'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
