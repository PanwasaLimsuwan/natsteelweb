import React from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons, color }) => {
  return (
    <div
      className="flex items-center justify-between pb-5"
      style={{ color: color }}
    >
      {icons ? (
        <>
          <h3 className="font-bold lg:text-xl">{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3 className="font-bold lg:text-xl">{title}</h3>
        </>
      )}
    </div>
  );
};

export default NavTitle;
