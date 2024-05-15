import React, { CSSProperties } from "react";

interface Props {
  url: string
}

function GuessImage(props: Props) {

  const style: CSSProperties = {
    borderRadius: "100px"
  }

  return (
    <section>
      <img
        width="80px"
        height="80px"
        src={"assets/members/" + props.url}
        alt=""
        style={style}
      />
    </section>
  );
}

export default GuessImage;
