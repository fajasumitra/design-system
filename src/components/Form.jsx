import React from "react";
import clsx from "clsx";
import propTypes from "prop-types";

const Form = ({
  children,
  onSubmit,
  action,
  target,
  method,
  autocomplete,
  id,
  ...rest
}) => {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      target={target}
      method={method}
      autoComplete={autocomplete}
      id={id}
      name={id}
      {...rest}
    >
      {children}
    </form>
  );
};

Form.Input = ({ type, id, readOnly, disabled, placeholder, ...rest }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      aria-describedby={id}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      className={clsx(
        "flex w-full rounded-lg shadow-sm",
        "min-h-[2.25rem] mt-2 py-0 px-3 md:min-h-[2.5rem]",
        "border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
        (readOnly || disabled) &&
          "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0 focus:outline-none"
      )}
      {...rest}
    />
  );
};

Form.Checkbox = ({ id, readOnly, disabled, label, ...rest }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={id}
        aria-describedby={id}
        readOnly={readOnly}
        disabled={disabled}
        className={clsx(
          "rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-200 focus:ring-opacity-50",
          (readOnly || disabled) &&
            "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0 focus:outline-none"
        )}
        {...rest}
      />
      <label htmlFor={id} id={id}>
        {label}
      </label>
    </div>
  );
};

Form.Label = ({ id, children, ...rest }) => {
  return (
    <label htmlFor={id} id={id} {...rest}>
      {children}
    </label>
  );
};

Form.Textarea = ({ id, readOnly, disabled, placeholder, ...rest }) => {
  return (
    <textarea
      id={id}
      name={id}
      aria-describedby={id}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      className={clsx(
        "flex w-full rounded-lg shadow-sm",
        "min-h-[2.25rem] mt-2 py-0 px-3 md:min-h-[2.5rem]",
        "border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
        (readOnly || disabled) &&
          "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0 focus:outline-none"
      )}
      {...rest}
    />
  );
};

Form.Select = ({ id, children, ...rest }) => {
  return (
    <select id={id} name={id} aria-describedby={id} 
    className={clsx(
      "flex w-full rounded-lg shadow-sm",
      "min-h-[2.25rem] mt-2 py-0 px-3 md:min-h-[2.5rem]",
      "border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
    )}
    {...rest}>
      <label htmlFor={id} id={id}>
        {children}
      </label>
    </select>
  );
};

Form.Option = ({ value, children, ...rest }) => {
  return (
    <option value={value} {...rest}>
      <label htmlFor={value} id={value}>
        {children}
      </label>
    </option>
  );
};

Form.Button = ({ type, children, ...rest }) => {
  return (
    <button type={type} 
    className={clsx(
      ''
    )}
    {...rest}>
      {children}
    </button>
  );
};

Form.propTypes = {
  children: propTypes.node,
  onSubmit: propTypes.func,
  action: propTypes.string,
  target: propTypes.string,
  method: propTypes.string,
  autocomplete: propTypes.string,
  id: propTypes.string,
};

Form.Input.propTypes = {
  type: propTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "search",
    "tel",
    "url",
  ]),
  id: propTypes.string,
  readOnly: propTypes.bool,
  disabled: propTypes.bool,
  placeholder: propTypes.string,
};

Form.Label.propTypes = {
  id: propTypes.string,
};

Form.Textarea.propTypes = {
  id: propTypes.string,
  readOnly: propTypes.bool,
  disabled: propTypes.bool,
  placeholder: propTypes.string,
};

Form.Select.propTypes = {
  id: propTypes.string,
};

Form.Option.propTypes = {
  value: propTypes.string,
};

Form.Button.propTypes = {
  type: propTypes.oneOf(["button", "submit", "reset"]),
};

export default Form;
