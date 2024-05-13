import React, { CSSProperties } from "react";

interface Props {
  name: string;
  nickname?: string | undefined;
}

function GuessName(props: Props) {
  const style: CSSProperties = {
    color: "white",
    fontWeight: "bold",
    fontSize: "27px",
  };

  const getFirstName = (name: string): string => {
    return name.split(" ")[0];
  }

  return (
    <div>
      <p style={style}>{props.nickname ? props.nickname : getFirstName(props.name)}</p>
    </div>
  );
}

export default GuessName;
