import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAsyncUsers } from "../features/users/usersSlice";
import Modal from "./Modal/Modal";

const UserItem = ({ id, firstName, lastName, mobile, email, age }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [tempIdForDelete, setTempIdForDelete] = useState(null);
  //(e) => dispatch(deleteAsyncUsers({ id }))
  const openModal = (id) => {
    setTempIdForDelete(id);
    setIsOpen(true);
  };
  const deleteRecord = () => {
    console.log(tempIdForDelete);
    dispatch(deleteAsyncUsers({ id: tempIdForDelete }));
    setIsOpen(false);
    setTempIdForDelete(null);
  };

  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{mobile}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>99/03/22</td>
      <td>
        <Link to={`/editUser/${id}`}>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="editIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </Link>
      </td>
      <td>
        <button className="" onClick={() => openModal(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="trashIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} deleteRecord={deleteRecord} />}
      </td>
    </tr>
  );
};

export default UserItem;
