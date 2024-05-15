import React, { CSSProperties } from "react";

interface Props {
  name: string;
  img: string;
  taglines: string[];
  season: string | number;
}

function AnswerDisplay({ name, img, taglines, season }: Props) {
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
    margin: "30px",
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
        <img style={imageStyle} src={"assets/members/" + img} alt="" />
      </section>
      <section>
        <p style={nameStyle}>
          It was <span style={hightlightedSection}>{name}</span> from{" "}
          <span style={hightlightedSection}>{season}</span>
        </p>
        <p style={taglineStyle}>{taglines[0]}</p>
      </section>
    </div>
  );
}

export default AnswerDisplay;
