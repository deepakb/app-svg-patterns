import React from "react";
import { SketchPicker } from "react-color";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface ControlProps {}

export default function Control(props: ControlProps) {
  const [fillColor, setFillColor] = React.useState("blue");
  const [strokeColor, setStrokeColor] = React.useState("green");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const handleFillColorChange = (color: any) => {
    setFillColor(color.hex);
  };

  const handleStrokeColorChange = (color: any) => {
    setFillColor(color.hex);
  };

  return (
    <div className="absolute bottom-20 w-2/4 h-[60px] flex items-center justify-center">
      <div className="p-4 bg-primary-foreground w-full h-full rounded-md">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Label>Fill:</Label>
            <div className="relative">
              <div
                onClick={() => setShowColorPicker(true)}
                className="h-8 w-8 cursor-pointer rounded-md"
                style={{ backgroundColor: fillColor }}
              />
              {showColorPicker && (
                <div className="absolute z-10">
                  <div onClick={(event) => event.stopPropagation()} className="fixed inset-0 z-10">
                    <div onClick={() => setShowColorPicker(false)} className="absolute inset-0 bg-black opacity-50" />
                    <SketchPicker color={fillColor} onChange={handleFillColorChange} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Label>Stroke:</Label>
            <div className="relative">
              <div
                onClick={() => setShowColorPicker(true)}
                className="h-8 w-8 cursor-pointer rounded-md"
                style={{ backgroundColor: strokeColor }}
              />
              {showColorPicker && (
                <div className="absolute z-10">
                  <div onClick={(event) => event.stopPropagation()} className="fixed inset-0 z-10">
                    <div onClick={() => setShowColorPicker(false)} className="absolute inset-0 bg-black opacity-50" />
                    <SketchPicker color={strokeColor} onChange={handleStrokeColorChange} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Label className="col-span-4">Line Height:</Label>
            <Input id="line-height-input" type="number" value={2} onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
