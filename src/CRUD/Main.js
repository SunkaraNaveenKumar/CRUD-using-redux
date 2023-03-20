import React from "react";
import { useSelector } from "react-redux";
import InputComp from "./InputComp";
import Table from "./Table";

const Main = () => {
  const list = useSelector((state) => {
    return state.crudState.list;
  });
  return (
    <div>
      <InputComp />
      {list.length ? <Table list={list} /> : <p>Please add the data</p>}
    </div>
  );
};

export default Main;
