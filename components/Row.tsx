import React from "react";
import { svg } from "@/utils/svg";
import SvgCard from "@/components/SvgCard";

interface RowProps {
  index: number;
  style: React.CSSProperties;
  itemsPerRow: number;
}

const Row = ({ index, style, itemsPerRow }: RowProps) => {
  const startIndex = index * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, svg.length);
  const cards = React.useMemo(() => {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
      result.push(<SvgCard key={i} svg={svg[i]} />);
    }
    return result;
  }, [startIndex, endIndex]);

  return (
    <div style={style} className="flex justify-start gap-4">
      {cards.map((card) => (
        <div key={card.key}>{card}</div>
      ))}
    </div>
  );
};

export default React.memo(Row);
