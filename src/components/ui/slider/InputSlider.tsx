import { useState } from 'react';
import './inputSlider.css';

interface InputSliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

function InputSlider({ min, max, step, defaultValue }: InputSliderProps) {
  const [value, setValue] = useState(defaultValue);

  const handle = (v: number) => {
    const clamped = Math.min(max, Math.max(min, v));
    setValue(clamped);
  };
  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-0 translate-y-[8px]">
        <div className="text-xs mb-0 text-secondary-text">{min}</div>
        <div className="text-xs mb-0 text-secondary-text">{max}</div>
      </div>
      <div
        className="slider-wrap"
        style={
          {
            '--min': String(min),
            '--max': String(max),
            '--value': String(value),
          } as React.CSSProperties
        }
      >
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handle(Number(e.target.value))}
          className="input-range"
          style={
            {
              '--min': String(min),
              '--max': String(max),
              '--value': String(value),
            } as React.CSSProperties
          }
        />

        <div className="value-bubble mt-2">{value}</div>
      </div>
    </div>
  );
}

export default InputSlider;
