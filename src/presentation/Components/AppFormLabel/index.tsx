import clsx from "clsx";
import React from "react";
type AppFormLabelProps = {
  label: string;
  className?: string;
};
export const AppFormLabel = ({ label, className }: AppFormLabelProps) => {
  return (
    <label
      className={clsx(className, "text-base font-normal ml-1 max-sm:text-xs")}
    >
      {label}
    </label>
  );
};
