import Base, { IPolygonProps } from "./Base";

export default function Square(props: IPolygonProps) {
  return (
    <Base
      points="85.35533905932738,85.35533905932738 14.64466094067263,85.35533905932738 14.644660940672615,14.64466094067263 85.35533905932738,14.644660940672615"
      {...props}
    />
  );
}
