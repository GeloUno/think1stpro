export interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}

export function ArrowRightIcon({
  size = 14,
  className,
  title,
  ...rest
}: ArrowIconProps) {
  const width = (size / 14) * 11;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 11 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role="img"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M0.5 7.86602C-0.166668 7.48112 -0.166667 6.51888 0.5 6.13397L9.5 0.937821C10.1667 0.552921 11 1.03405 11 1.80385V12.1962C11 12.966 10.1667 13.4471 9.5 13.0622L0.5 7.86602Z"
        fill="currentColor"
      />
    </svg>
  );
}
