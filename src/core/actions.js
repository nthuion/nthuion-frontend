import { push } from 'react-router-redux';

import * as auth from '../containers/Auth/actions';
import * as itemInfo from '../containers/ItemInfo/actions';
import * as itemList from '../containers/ItemListPage/actions';
// import * as itemDetail from '../containers/ItemDetailPage/actions';
import * as createItem from '../containers/CreateItemPage/actions';
import * as commentForm from '../containers/CommentForm/actions';
export {
  auth,
  itemInfo,
  itemList,
  createItem,
  commentForm,
};

export const routing = {
  push(path) {
    return push(path);
  },
};

