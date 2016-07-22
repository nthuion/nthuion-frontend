import { push } from 'react-router-redux';

import * as auth from '../containers/Auth/actions';
export { auth };

export const routing = {
  push(path) {
    return push(path);
  },
};

