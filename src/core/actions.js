import { push } from 'react-router-redux';

import * as auth from '../containers/Auth/actions';
import * as itemInfo from '../containers/ItemInfo/actions';
import * as itemList from '../containers/ItemListPage/actions';
import * as createItem from '../containers/CreateItemPage/actions';
import * as commentForm from '../containers/CommentForm/actions';
import * as userInfo from '../containers/UserInfoPage/actions';
export {
  auth,
  itemInfo,
  itemList,
  createItem,
  commentForm,
  userInfo,
};

export const routing = {
  push(path) {
    return push(path);
  },
};

