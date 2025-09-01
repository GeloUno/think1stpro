import './inputSlider.css';

interface InputSliderProps {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange(move: number): void;
}

function InputSlider({
  id,
  min,
  max,
  step,
  value,
  onChange,
}: InputSliderProps) {
  const handle = (v: number) => {
    const clamped = Math.min(max, Math.max(min, v));
    onChange(clamped);
  };
  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-0 translate-y-[8px]">
        <div className="text-xs mb-0 text-primary-text">{min}</div>
        <div className="text-xs mb-0 text-primary-text">{max}</div>
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
          id={id}
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
