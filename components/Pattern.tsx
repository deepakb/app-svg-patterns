import React from "react";
import svgToDataUri from "mini-svg-data-uri";
import useSvg from "@/hooks/useSvg";
import Control from "./Control";
import ReactDOMServer from "react-dom/server";

import CustomSvg from "./svg/Line";

export default function Pattern() {
  const { svg, svgElements } = useSvg();
  console.log({ svgElements });
  const customSvgString = ReactDOMServer.renderToString(
    <CustomSvg fillColor="trasnsparent" strokeColor="green" strokeWidth={2} />
  );
  const customSvgDataUri = svgToDataUri(customSvgString);

  return (
    <div
      className="flex flex-1 justify-center elative p-4 px-20 leading-6"
      style={{
        minHeight: "100vh",
        backgroundImage: `url("${customSvgDataUri}")`,
      }}
    >
      <Control />
    </div>
  );
}
