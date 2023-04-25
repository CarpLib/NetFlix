import React from "react";

export default function Section(props) {
  // console.log(props);
  return (
    <section>
      <h2>{props.category}</h2>
      <div className="carrousel">
        {props.images.map((item, index) => {
          return <img key={index} src={item} alt="Image Film" />;
        })}
      </div>
    </section>
  );
}
