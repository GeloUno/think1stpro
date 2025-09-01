import InputSlider from './slider/InputSlider';
import Label from './Label';

type FieldSliderProps = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

export default function FieldSlider({
  id,
  label,
  min,
  max,
  step,
  value,
  onChange,
}: FieldSliderProps) {
  return (
    <div>
      <Label label={label} htmlForm={id} />
      <InputSlider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        label={label}
        id={id}
      />
    </div>
  );
}
