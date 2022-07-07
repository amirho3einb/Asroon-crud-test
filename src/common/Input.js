const Input = ({ label, name, formik, type, disabled, placeholder }) => {
  return (
    <div className="formControl">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps({ name })}
        name={name}
        disabled={disabled}
        className=""
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="formError">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
