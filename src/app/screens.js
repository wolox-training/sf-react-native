// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { StackNavigator, TabNavigator } from 'react-navigation';

import * as Routes from '../constants/routes';
import { stackNavConfig, screensNavOptions } from '../config/navigation';

import Home from './screens/Home';
import Books from './screens/Books';
import BookDetails from './screens/BookDetails';

export default StackNavigator(
  {
    [Routes.Home]: {
      screen: TabNavigator({
        [Routes.Todo]: {
          screen: Home,
          navigationOptions: screensNavOptions[Routes.Todo]
        },
        [Routes.Books]: {
          screen: Books,
          navigationOptions: screensNavOptions[Routes.Books]
        }
      }),
      navigationOptions: screensNavOptions[Routes.Home]
    },
    [Routes.BookDetails]: {
      screen: BookDetails,
      navigationOptions: screensNavOptions[Routes.BookDetails]
    }
  },
  stackNavConfig
);
