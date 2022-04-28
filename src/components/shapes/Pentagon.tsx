import Base, { IPolygonProps } from "./Base";

export default function Pentagon(props: IPolygonProps) {
  return (
    <Base
      points="90.45084971874738,79.38926261462366 34.549150281252636,97.55282581475768 0,50.00000000000001 34.54915028125262,2.447174185242325 90.45084971874736,20.610737385376332"
      {...props}
    />
  );
}
