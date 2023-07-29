"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Pencil, Download } from "lucide-react";
import { Svg } from "@/types/model";
import Image from "next/image";

interface SvgCardProps {
  svg: Svg;
}

export default function SvgCard({ svg }: SvgCardProps) {
  return (
    <Card className="hover:bg-secondary group cursor-pointer">
      <CardContent className="p-2">
        <Image
          src={`data:image/svg+xml;base64,${btoa(svg.svg)}`}
          className="flex items-center justify-between shadow-lg w-[100%] h-auto"
          width={0}
          height={0}
          alt={svg.name}
        />
        <div className="flex items-start justify-between pt-3 pb-3 gap-2">
          <div className="flex flex-col items-start gap-2 text-sm flex-1">
            <span className=" font-semibold">{svg.name}</span>
            <span className="bg-card-foreground/25 text-muted-foreground font-bold p-0.5 px-2 text-xs lowercase rounded-md">
              {svg.type}
            </span>
          </div>
          <Heart className="w-5 h-5" />
          <Pencil className="w-5 h-5" />
          <Download className="w-5 h-5" />
        </div>
      </CardContent>
    </Card>
  );
}
