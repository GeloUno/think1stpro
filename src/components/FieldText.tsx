import Input from './ui/InputText';
import Label from './ui/Label';

interface IFieldTextProps {
  id: string;
  type: 'text' | 'email';
  value: string;
  label: string;
  error?: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

function FieldText({
  id,
  label,
  type,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
}: IFieldTextProps) {
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div>
      <Label label={label} htmlForm={id} />
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        state={error ? 'error' : 'active'}
        error={error ?? ''}
        aria-invalid={!!error}
        aria-describedby={describedBy}
      />
    </div>
  );
}

export default FieldText;
