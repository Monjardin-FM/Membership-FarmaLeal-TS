import clsx from "clsx";
import React from "react";
type AppFormLabelProps = {
  label: string;
  className?: string;
};
export const AppFormLabel = ({ label, className }: AppFormLabelProps) => {
  return (
    <label
      className={clsx(
        className,
        "text-gray-800 font-medium text-base  ml-1 max-sm:text-xs"
      )}
    >
      {label}
    </label>
  );
};
