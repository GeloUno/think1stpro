interface ILabelProps {
  label: string;
  htmlForm?: string;
}

function Label({ label, htmlForm }: ILabelProps) {
  return (
    <label
      htmlFor={htmlForm}
      className="block text-xs font-semibold text-primary-text"
    >
      {label}
    </label>
  );
}

export default Label;
