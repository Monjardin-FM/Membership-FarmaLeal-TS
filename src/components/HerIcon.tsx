import React from "react";
import { Stack } from "react-bootstrap";
interface Props {
  icon: JSX.Element;
  label: string;
}
export const HeroIcon = ({ icon, label }: Props) => {
  return (
    <div className="w-96 d-flex flex flex-row justify-center items-center">
      <div className="hero-icon color-primary flex flex-col items-center">
        {icon}
        <p className="color-secondary fw-700 text-center text-sm">{label}</p>
      </div>
    </div>
  );
};
