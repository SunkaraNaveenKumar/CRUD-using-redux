import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList, setSave, setText, setToggle } from "../Redux/actions";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";
const InputComp = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => {
    return state.crudState.toggle;
  });
  const text = useSelector((state) => {
    return state.crudState.textVal;
  });
  const handleAdd = () => {
    const formData = {
      id: uuidv4(),
      textData: text,
    };
    console.log("formData", formData);
    dispatch(setList(formData));
    dispatch(setText(""));
  };
  const handleSave = () => {
    dispatch(setSave());
    dispatch(setToggle(false));
    dispatch(setText(""));
  };
  const handleCancel = () => {
    dispatch(setToggle(false));
    dispatch(setText(""));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch(setText(e.target.value));
        }}
        value={text}
      />
      {toggle ? (
        <>
          <Button handleClick={handleSave}>Save</Button>
          <Button handleClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <Button
          handleClick={() => {
            handleAdd();
          }}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default InputComp;
