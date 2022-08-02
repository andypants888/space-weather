import React from "react";
import NoneIcon from "../../icons/alert-green.png";
import MinorIcon from "../../icons/alert-blue.png";
import ModerateIcon from "../../icons/alert-purple.png";
import StrongIcon from "../../icons/alert-red.png";
import FailedIcon from "../../icons/failed.png";

const DynamicRiskIcon = (props: { riskLevel: string }) => {
  switch (true) {
    case props.riskLevel === "null":
      return <img src={FailedIcon} alt="null data missing" />;
    case props.riskLevel === "no data":
      return <img src={FailedIcon} alt="data missing" />;
    case props.riskLevel === "none":
      return <img src={NoneIcon} alt="no risk" />;
    case props.riskLevel === "minor":
      return <img src={MinorIcon} alt="minor risk" />;
    case props.riskLevel === "moderate":
      return <img src={ModerateIcon} alt="no risk" />;
    case props.riskLevel === "strong":
      return <img src={StrongIcon} alt="strong risk" />;
    default:
      return null;
  }
};

export default DynamicRiskIcon;
