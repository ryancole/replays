import * as ReplayActions from './ReplayActions';
import * as AccountActions from './AccountActions';
import * as SessionActions from './SessionActions';

const actions = {
  ...ReplayActions,
  ...AccountActions,
  ...SessionActions
};

export default actions;
