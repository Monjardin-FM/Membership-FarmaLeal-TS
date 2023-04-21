import clsx from "clsx";
import React from "react";

export type AppTextFieldProps = {
  placeholder: string;
  dataOpenCard?: any;
  name: string;
  onChange: (e: any) => void;
  value: any;
  className: string;
  disabled?: boolean;
  type?: string;
  onBlur?: any;
  onFocus?: any;
  inputMode?:
    | "decimal"
    | "email"
    | "numeric"
    | "search"
    | "tel"
    | "text"
    | "url";
};

export const AppTextField = ({
  placeholder,
  dataOpenCard,
  name,
  onChange,
  value,
  className,
  disabled = false,
  type = "text",
  onBlur,
  onFocus,
  inputMode,
}: AppTextFieldProps) => {
  return (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      min={0}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      data-openpay-card={dataOpenCard}
      name={name}
      value={value}
      onChange={onChange}
      className={clsx(
        className,
        "h-8 rounded-md border border-slate-300 p-2 text-sm max-sm:text-xs"
      )}
      inputMode={inputMode}
    />
  );
};
