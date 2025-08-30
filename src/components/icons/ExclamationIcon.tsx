import React from 'react';

export interface ExclamationBadgeIconProps
  extends React.SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}

export default function ExclamationBadgeIcon({
  size = 16,
  className,
  title = 'Exclamation badge',
  ...rest
}: ExclamationBadgeIconProps) {
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
      <circle cx="8" cy="8" r="8" fill="#ED4545" />
      <rect x="7.25" y="3" width="1.5" height="6" rx="0.75" fill="white" />
      <circle cx="8" cy="11.5" r="1" fill="white" />
    </svg>
  );
}
