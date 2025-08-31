import Label from './ui/Label';
import InputPhoto from './ui/InputPhoto';

interface FieldPhotoProps {
  id: string;
  label: string;
  error?: string;
}

function FieldPhoto({ id, label }: FieldPhotoProps) {
  return (
    <div className="my-10">
      <Label label={label} htmlForm={id} />
      <InputPhoto id={id} />
    </div>
  );
}

export default FieldPhoto;
