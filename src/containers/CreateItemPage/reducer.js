import { handleActions } from 'redux-actions';
import { EditorState } from 'draft-js';
import {
  EDIT_CONTENT,
  CREATE_ITEM_SUCCESS,
} from './actionTypes';

const initialState = {
  editorState: EditorState.createEmpty(),
};

const reducer = handleActions({
  [EDIT_CONTENT]: (state, { editorState }) => ({
    editorState,
  }),
  [CREATE_ITEM_SUCCESS]: (state) => ({
    ...state,
    editorState: EditorState.createEmpty(),
  }),
}, initialState);

export default reducer;

