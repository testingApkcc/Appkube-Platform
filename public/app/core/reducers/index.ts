import { navIndexReducer as navIndex } from './navModel';
import { navTreeReducer as navBarTree } from './navBarTree';
import { appNotificationsReducer as appNotifications } from './appNotification';
import { locationReducer as location } from './location';

export default {
  navBarTree,
  navIndex,
  location,
  appNotifications,
};
