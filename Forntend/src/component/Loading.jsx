import React from "react";
import Lottie from "lottie-react";

const Loading = ({ animation }) => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animation.defaut,
  };
  const style = {
    height: 300,
  };
  return (
    <Lottie
      animationData={animation}
      defaultOption={defaultOption}
      style={style}
    />
  );
};

export default Loading;