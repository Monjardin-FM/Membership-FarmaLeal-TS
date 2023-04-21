interface props {
  title: string;
  bgClass: string;
  icon: JSX.Element;
  disclaimer?: string;
}
export const BenefitItem = ({ title, bgClass, icon, disclaimer }: props) => {
  return (
    <div
      className={`${bgClass} text-white px-3 py-3 rounded benefits-grid-item`}
    >
      <div className="icon-container">{icon}</div>
      <div className="text-sm fw-500 ">{title}</div>
      <p className="text-xs font-extralight mt-2">{disclaimer}</p>
    </div>
  );
};
