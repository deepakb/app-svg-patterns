import React from "react";
import { Context } from "@/context/Context";
import xmljs from "xml-js";

interface SvgElement {
  type: string;
  attributes: Record<string, string>;
}

function parseSvg(svgString: string): SvgElement[] | null {
  const svgObject = xmljs.xml2js(svgString, { compact: true });
  const svgElements = svgObject.svg._children;

  if (!Array.isArray(svgElements)) {
    return null;
  }

  return svgElements.map((element: any) => ({
    type: element._attributes["data-type"],
    attributes: element._attributes,
  }));
}

export default function useSvg() {
  const { svg, setSvg } = React.useContext(Context);
  const svgElements = React.useMemo(() => {
    if (!svg) {
      return null;
    }
    return parseSvg(svg);
  }, [svg]);

  return {
    svg,
    setSvg,
    svgElements,
  };
}
