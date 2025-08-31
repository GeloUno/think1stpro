import InputSlider from './slider/InputSlider';
import Label from './Label';

interface FieldSliderProps {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

function FieldSlider({
  id,
  label,
  min,
  max,
  step,
  defaultValue,
}: FieldSliderProps) {
  return (
    <div>
      <Label label={label} htmlForm={id} />
      <InputSlider
        min={min}
        step={step}
        max={max}
        defaultValue={defaultValue}
        label={label}
      />
    </div>
  );
}

export default FieldSlider;
