import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Index,
  })
);

export default Routes;