import Label from './ui/Label';
import InputPhoto from './ui/InputPhoto';
import ExclamationBadgeIcon from '../icons/ExclamationIcon';

interface FieldPhotoProps {
  id: string;
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}

function FieldPhoto({
  id,
  label,
  value,
  onChange,
  error,
  disabled = false,
}: FieldPhotoProps) {
  return (
    <div>
      <Label label={label} htmlForm={id} />
      <InputPhoto
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && error.trim().length > 0 && (
        <div className="flex items-center gap-2 text-sm mt-1">
          <ExclamationBadgeIcon />{' '}
          <div className="text-xs">
            <div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FieldPhoto;
