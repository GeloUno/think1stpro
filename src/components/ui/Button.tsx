import type { ComponentProps } from 'react';

type ButtonProps = Omit<ComponentProps<'button'>, 'color'> & {
  fullWidth?: boolean;
  loading?: boolean;
  inactive?: boolean;
};

export default function Button({
  fullWidth = true,
  loading = false,
  inactive = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = inactive || loading || !!rest.disabled;

  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={[
        'h-11 px-4 rounded-md',
        'text-white font-medium',
        'bg-button-default hover:bg-button-hover',
        'disabled:bg-button-inactive disabled:text-white disabled:cursor-not-allowed',
        'disabled:hover:bg-button-inactive',
        'transition-colors focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary/30',
        fullWidth ? 'w-full' : 'w-auto',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
}
