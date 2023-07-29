"use client";
import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import useResizeObserver from "use-resize-observer";

import { svg } from "@/utils/svg";
import Row from "@/components/Row";

export default function Home() {
  const [itemsPerRow, setItemsPerRow] = useState(5);
  const { ref: containerRef, width: containerWidth = 0 } = useResizeObserver<HTMLDivElement>();

  React.useEffect(() => {
    const newItemsPerRow = Math.floor(containerWidth / 250);
    setItemsPerRow(newItemsPerRow);
  }, [containerWidth]);

  return (
    <div
      className="flex-1 bg-stripes-slate relative p-4 px-20 leading-6"
      style={{ minHeight: "100vh" }}
      ref={containerRef}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={Math.ceil(svg.length / itemsPerRow)}
            itemSize={270}
            width={width}
            className="scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2 gap-2 overflow-auto leading-6"
          >
            {({ index, style }) => <Row index={index} style={style} itemsPerRow={itemsPerRow} />}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
