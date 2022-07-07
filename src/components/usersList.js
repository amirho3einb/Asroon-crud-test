import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/users/usersSlice";
import UserItem from "./UserItem";

const UsersList = () => {
  const { users, loading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);
  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div>
        <table className="usersList">
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>شماره موبایل</th>
            <th>سن</th>
            <th>ایمیل</th>
            <th>تاریخ ایجاد</th>
            <th></th>
            <th></th>
          </tr>
          {users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              mobile={user.mobile}
              email={user.email}
              age={user.age}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default UsersList;
