import { useRef, useState } from 'react';
import CloseCircleIcon from '../../icons/CloseCircleIcon';

interface InputPhotoProps {
  id?: string;
  value?: File | null;
  onChange?: (file: File | null) => void;
  allowedExtensions?: string[];
  disabled?: boolean;
}

function InputPhoto({
  id,
  value,
  onChange,
  disabled = false,
}: InputPhotoProps) {
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg'];

  const [file, setFile] = useState<File | null>(value ?? null);
  const [error, setError] = useState<string>('');
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isImageExt = (name: string) => {
    const ext = name.split('.').pop()?.toLowerCase() ?? '';
    return allowedExtensions.includes(ext);
  };

  const applyFile = (f: File | null) => {
    setFile(f);
    onChange?.(f);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const f = files[0];

    if (!isImageExt(f.name) && !f.type.startsWith('image/')) {
      setError('Only image files are allowed (jpg, png, webp, gif, bmp, svg).');
      applyFile(null);
      return;
    }
    setError('');
    applyFile(f);
  };

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    applyFile(null);
    setError('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const openPicker = () => !disabled && inputRef.current?.click();

  return (
    <div className={`w-full`}>
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
        disabled={disabled}
      />

      <div
        role="button"
        tabIndex={0}
        onClick={openPicker}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPicker()}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          if (!disabled) handleFiles(e.dataTransfer.files);
        }}
        className={[
          'relative w-full rounded-xl border px-4 py-6 transition',
          'bg-white/70',
          drag ? 'border-primary ring-2 ring-primary' : 'border-accent',
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer hover:border-primary',
        ].join(' ')}
        aria-disabled={disabled}
      >
        {!file ? (
          <p className="text-center text-sm">
            <span className="underline text-primary">Upload a file</span>
            <span className="text-secondary-text"> or drag and drop here</span>
          </p>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <span className="truncate max-w-[85%] text-primary-text text-sm">
              {file.name}
            </span>
            <button
              type="button"
              onClick={handleStopPropagation}
              aria-label="Delete file"
              className="ml-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full hover:opacity-90 focus:outline-none cursor-pointer focus:ring-2 focus:ring-primary/50"
            >
              <CloseCircleIcon size={20} className="text-primary-text" />
            </button>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-xs text-error-primary" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputPhoto;
