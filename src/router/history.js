import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';

import routerStore from './router.store';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

export default history;
