import Input from "../common/Input";
const FormDefinition = ({ formik, btnText }) => {
  return (
    <>
      <Input
        formik={formik}
        name="firstName"
        label="نام"
        type="text"
        placeholder="نام شما"
      />
      <Input
        formik={formik}
        name="lastName"
        label="نام خانوادگی"
        type="text"
        placeholder="نام خانوادگی شما"
      />
      <Input
        formik={formik}
        name="mobile"
        label="شماره موبایل"
        type="text"
        placeholder="شماره موبایل"
      />
      <Input
        formik={formik}
        name="age"
        label="سن"
        type="text"
        placeholder="سن شما"
      />
      <Input
        formik={formik}
        name="email"
        label="ایمیل"
        type="text"
        placeholder="ایمیل شما"
      />
      <button type="submit" disabled={!formik.isValid} className="">
        {btnText}
      </button>
    </>
  );
};

export default FormDefinition;
