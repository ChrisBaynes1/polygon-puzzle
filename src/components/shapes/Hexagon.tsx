import Base, { IPolygonProps } from "./Base";

export default function Hexagon(props: IPolygonProps) {
  return (
    <Base
      points="93.30127018922194,75 50,100 6.698729810778076,75.00000000000001 6.698729810778062,25.000000000000014 49.99999999999999,0 93.30127018922194,25.000000000000018"
      {...props}
    />
  );
}
