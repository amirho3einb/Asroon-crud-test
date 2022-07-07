import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addAsyncUsers, addUser } from "../features/users/usersSlice";

import { useDispatch, useSelector } from "react-redux";
import FormDefinition from "./FormDefenition";
import UserItem from "./UserItem";

const initialValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  age: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("لطفا نام خود را وارد نمایید."),
  lastName: Yup.string().required("لطفا نام خانوادگی خود را وارد نمایید."),
  mobile: Yup.string().required("لطفا شماره تماس خود را وارد نمایید."),
  email: Yup.string().required("لطفا ایمیل خود را وارد نمایید."),
  age: Yup.string().required("لطفا سن خود را وارد نمایید."),
});

const AddUserForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(
      addAsyncUsers({
        firstName: values.firstName,
        lastName: values.lastName,
        mobile: values.mobile,
        email: values.email,
        age: values.age,
      })
    );
    navigate("/");
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="form">
      <h3 className="title">فرم زیر را پر کنید.</h3>
      <form onSubmit={formik.handleSubmit}>
        <FormDefinition
          formik={formik}
          btnText="ساخت اکانت"
        />
      </form>
    </div>
  );
};

export default AddUserForm;
