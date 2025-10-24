import * as React from "react";
type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean };
export default function NextImage(props: ImgProps) {
  const { fill, ...rest } = props as any;
  return <img {...rest} />;
}
