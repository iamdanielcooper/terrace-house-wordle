import React, { CSSProperties } from "react";

interface Props {
  name: string;
}

function AnswerDisplay(props: Props) {
  const imageStyle: CSSProperties = {
    width: "80px",
    height: "80px",
    borderRadius: "100px",
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "30px"
  };

  const nameStyle: CSSProperties = {
    fontWeight: "light",
    color: "white",
    textAlign: "left",
    fontSize: "25px",
    margin: 0,
  };

  const hightlightedSection: CSSProperties = {
    color: "#409A32",
    fontWeight: "bold",
  };

  const taglineStyle: CSSProperties = {
    color: "white",
    fontWeight: "light",
    textAlign: "left",
    margin: 0,
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      <section>
        <img
          style={imageStyle}
          src="https://blancmagazine.com/wp-content/uploads/2019/01/WATT_MINORI_DSC02379_IG.jpg"
          alt=""
        />
      </section>
      <section>
        <p style={nameStyle}>
          It was <span style={hightlightedSection}>{props.name}</span>
        </p>
        <p style={taglineStyle}>Here goes the comment</p>
      </section>
    </div>
  );
}

export default AnswerDisplay;
