// import useFormContext from '../../hooks/useFormContext';
import ExclamationBadgeIcon from '../../icons/ExclamationIcon';

interface IInputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  state: 'default' | 'active' | 'error';
  type: 'text' | 'email';
  error?: string;
}

function InputText({ type, state, error, ...props }: IInputTextProps) {
  const variants: Record<typeof state, string> = {
    default: 'border border-accent bg-white',
    active: 'border-2 border-primary bg-white',
    error: 'border-2 border-error-primary bg-error-secondary',
  };

  return (
    <div>
      <input
        {...props}
        type="text"
        className={`block w-full rounded-md px-3 py-1 text-base text-primary-text focus:outline-none ${variants[state]}`}
      ></input>
      {error && error.trim().length > 0 && (
        <div className="flex items-center gap-2 text-sm mt-1">
          <ExclamationBadgeIcon />{' '}
          <div className="text-xs">
            {type === 'text' ? (
              <div>
                <p>{error}</p>
              </div>
            ) : (
              <div>
                <p>Please use correct formatting.</p>
                <p>Example: address@email.com</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputText;
