import React from "react";
import { ColorGroup } from "../../constants/shapes/colors.enum";

export interface IPolygonProps {
  stroke?: ColorGroup;
  fill: ColorGroup;
}

export interface IBaseProps extends IPolygonProps {
  points: string;
}

export default function Base(props: IBaseProps) {
  const { points, fill, stroke } = props;
  return (
    <svg width={"100"} height="100">
      <polygon
        points={points}
        fill={fill || ColorGroup.Black}
        stroke={stroke || ColorGroup.Black}
      />
    </svg>
  );
}
