import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';
import Cadastrar from './pages/cadastrar';
import Recover from './pages/Recover';
import Home from './pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Index,
    Cadastrar,
    Recover,
    Home,
  })
);

export default Routes;