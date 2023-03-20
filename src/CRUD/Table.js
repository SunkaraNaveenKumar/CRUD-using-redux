import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, setEdit, setToggle } from "../Redux/actions";
import { Button } from "./Button";

const Table = ({ list }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(setDelete(id));
  };
  const handleEdit = (item) => {
    dispatch(setEdit(item));
    dispatch(setToggle(true));
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>text</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            const { id, textData } = item;
            return (
              <tr>
                <td>{id}</td>
                <td>{textData}</td>
                <td>
                  <Button
                    handleClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    handleClick={() => {
                      handleEdit(item);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
