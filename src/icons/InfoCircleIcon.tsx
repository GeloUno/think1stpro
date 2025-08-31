export interface InfoCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}

export default function InfoCircleIcon({
  size = 16,
  className,
  title,
  ...rest
}: InfoCircleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role="img"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <rect x="7.25" y="6" width="1.5" height="5" rx="0.75" fill="white" />
      <rect x="7.25" y="4" width="1.5" height="1.5" rx="0.75" fill="white" />
    </svg>
  );
}
