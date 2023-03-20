const initialState = {
  textVal: "",
  list: [],
  editId: "",
  toggle: false,
};

export const ReducerState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return { ...state, textVal: action.payload };
    }
    case "SET_LIST": {
      return { ...state, list: [...state.list, { ...action.payload }] };
    }
    case "SET_DELETE": {
      const filterData = state?.list.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, list: [...filterData] };
    }
    case "SET_EDIT": {
      return {
        ...state,
        textVal: action?.payload.textData,
        editId: action.payload.id,
      };
    }
    case "SET_TOGGLE": {
      return { ...state, toggle: action.payload };
    }
    case "SET_SAVE": {
      const editedData = state.list.map((ele) => {
        if (ele.id === state.editId) {
          return { ...ele, textData: state.textVal };
        } else {
          return { ...ele };
        }
      });
      return { ...state, list: editedData };
    }
    default: {
      return { ...state };
    }
  }
};
