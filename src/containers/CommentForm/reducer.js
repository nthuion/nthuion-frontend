import { handleActions } from 'redux-actions';
import { EditorState } from 'draft-js';
import {
  EDIT_COMMENT,
  SEND_COMMENT_SUCCESS,
} from './actionTypes';

const initialState = {
  editorState: EditorState.createEmpty(),
};

const reducer = handleActions({
  [EDIT_COMMENT]: (state, { editorState }) => ({
    ...state,
    editorState,
  }),
  [SEND_COMMENT_SUCCESS]: (state) => ({
    ...state,
    editorState: EditorState.createEmpty(),
  }),
}, initialState);

export default reducer;

