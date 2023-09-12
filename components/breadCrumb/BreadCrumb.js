import React from "react";

const Breadrumb = (props) => {
  const list = props.list;

  const style = "text-blue-500 text-xs font-bold";

  return (
    <div className="lg:w-full sm:w-11/12 w-full max-w-[1250px] py-10 mx-auto">
      <div className="px-5">
        <div className="flex">
          {list.map((item, idx) => {
            if (idx < list.length - 1) {
              return (
                <p key={idx} className={style}>
                  <span className="underline underline-offset-2">
                    {item.toUpperCase()}
                  </span>{" "}
                  &gt; &nbsp;{" "}
                </p>
              );
            } else {
              return (
                <p key={idx} className={style}>
                  {item.toUpperCase()}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadrumb;
