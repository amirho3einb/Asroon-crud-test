import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  addAsyncUsers,
  addUser,
  editAsyncUsers,
} from "../features/users/usersSlice";

import { useDispatch, useSelector } from "react-redux";
import FormDefinition from "./FormDefenition";
import UserItem from "./UserItem";
import { getUserService } from "../services/getUser";

const EditUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    age: "",
  });

  let params = useParams();
  const userId = params.id;

  useEffect(() => {
    const GetUserData = async () => {
      try {
        const { data } = await getUserService(userId);
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
          mobile: data.mobile,
          email: data.email,
          age: data.age,
        });
      } catch (error) {
        console.log(error);
      }
    };
    GetUserData();
  }, []);

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    mobile: user.mobile,
    email: user.email,
    age: user.age,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("لطفا نام خود را وارد نمایید."),
    lastName: Yup.string().required("لطفا نام خانوادگی خود را وارد نمایید."),
    mobile: Yup.string().required("لطفا شماره تماس خود را وارد نمایید."),
    email: Yup.string().required("لطفا ایمیل خود را وارد نمایید."),
    age: Yup.string().required("لطفا سن خود را وارد نمایید."),
  });
  const onSubmit = async (values) => {
    dispatch(
      editAsyncUsers({
        id: userId,
        userData: {
          firstName: values.firstName,
          lastName: values.lastName,
          mobile: values.mobile,
          email: values.email,
          age: values.age,
        },
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
      <h3 className="title">ویرایش</h3>
      <form onSubmit={formik.handleSubmit}>
        <FormDefinition formik={formik} btnText="ثبت اطلاعات" />
      </form>
    </div>
  );
};

export default EditUserForm;
