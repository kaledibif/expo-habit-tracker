import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import AppNavigator from './AppNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AppNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(AppNavigator, { history: 'hash' });
