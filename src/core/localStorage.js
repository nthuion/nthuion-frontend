export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify({
      auth: {
        fbToken: state.auth.fbToken,
        apiToken: state.auth.apiToken,
        me: state.auth.me,
      },
    });
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore the errors.
  }
}

