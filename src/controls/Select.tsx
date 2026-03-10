import { forwardRef, type ForwardedRef } from "react";
import { type FieldError } from "react-hook-form";
import { type selectOptionType } from "../types/index";

type SelectFFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  lebel: string;
  error?: FieldError | undefined;
  options: selectOptionType[];
};

const Select = forwardRef(
  (props: SelectFFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { lebel, className = "", options, error, ...other } = props;
    return (
      <div className="form-floating">
        <select className={`form-select ${className}`} ref={ref} {...other}>
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <label>{lebel}</label>
        {error && <div className="error-feedback">{error.message}</div>}
      </div>
    );
  },
);

export default Select;
