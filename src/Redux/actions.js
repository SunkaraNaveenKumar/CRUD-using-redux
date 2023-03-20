export const setText = (data) => {
  return {
    type: "SET_TEXT",
    payload: data,
  };
};
export const setToggle = (toggle) => {
  return {
    type: "SET_TOGGLE",
    payload: toggle,
  };
};

export const setList = (data) => {
  return {
    type: "SET_LIST",
    payload: data,
  };
};
export const setDelete = (id) => {
  return {
    type: "SET_DELETE",
    payload: id,
  };
};
export const setEdit = (item) => {
  return {
    type: "SET_EDIT",
    payload: item,
  };
};
export const setSave = () => {
  return {
    type: "SET_SAVE",
  };
};
