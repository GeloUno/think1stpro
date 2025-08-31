import Input from './ui/InputText';
import Label from './ui/Label';

interface IFieldTextProps {
  id: string;
  type: 'text' | 'email';
  label: string;
  error?: string;
}

function FieldText({ id, label, type }: IFieldTextProps) {
  function handlerChange() {}
  return (
    <div>
      <Label label={label} htmlForm={id} />
      <Input
        id={id}
        state={'active'}
        value={''}
        type={type}
        error={''}
        onChange={handlerChange}
      />
    </div>
  );
}

export default FieldText;
