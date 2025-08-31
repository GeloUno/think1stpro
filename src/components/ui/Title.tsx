interface ITitleProps {
  title: string;
}

function Title({ title }: ITitleProps) {
  return (
    <div className="font-sans font-medium text-xl leading-none">{title}</div>
  );
}

export default Title;
