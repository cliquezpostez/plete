import clearSuggestions from "./clear-suggestions.js";
import filter from "./filter.js";
import render from "./render.js";
import select from "./select.js";

export default suggest;

async function suggest(state) {
  clearSuggestions(state);
  state.selectedIndex = -1;
  select(state, state.selectedIndex);
  notifyBusy(state);

  const inputEmpty = state.input.value === "";
  const inputTooShort =
    typeof state.dataSrc === "function" &&
    state.input.value.length < state.minChars;

  if (inputEmpty || inputTooShort) {
    notifyReady(state);
    return;
  }

  abortRequest(state);

  const filterResult = filter(state);
  saveAbortFunction(state, filterResult);

  const filteredData = await getPromise(filterResult);

  const data = filteredData.slice(0, state.maxItems);

  render(state, data);
  notifyReady(state);
}

function getPromise(filterResult) {
  if (filterResult instanceof Promise) {
    return filterResult;
  }

  if (filterResult.promise instanceof Promise) {
    return filterResult.promise;
  }

  return filterResult;
}

function abortRequest(state) {
  if (!state.abortCurrentRequest) {
    return;
  }

  state.abortCurrentRequest();
  delete state.abortCurrentRequest;
}

function saveAbortFunction(state, filterResult) {
  if (!filterResult.abort) {
    return;
  }

  state.abortCurrentRequest = filterResult.abort;
}

function notifyBusy(state) {
  if (typeof state.busy === "function") {
    state.busy();
  }
}

function notifyReady(state) {
  if (typeof state.ready === "function") {
    state.ready();
  }
}
