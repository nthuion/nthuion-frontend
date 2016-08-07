import { handleActions } from 'redux-actions';
import { EditorState } from 'draft-js';
import {
  EDIT_CONTENT,
} from './actionTypes';

const initialState = {
  editorState: EditorState.createEmpty(),
};

const reducer = handleActions({
  [EDIT_CONTENT]: (state, { editorState }) => ({
    editorState,
  }),
}, initialState);

export default reducer;

