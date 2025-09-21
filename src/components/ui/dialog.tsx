import {
  cloneElement,
  useEffect,
  useRef,
  type ReactNode,
  type ReactElement,
} from "react";
import ReactDOM from "react-dom";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => any;
  maxWidth?: string;
  height?: string;
  children: ReactNode;
}

export const ButtonDismissDialog = ({
  open,
  onOpenChange,
  maxWidth = "448px",
  height = "max-content",
  children,
}: DialogProps) => {
  // const dispatch = useDispatch();

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5000] !m-0">
      <div
        className="bg-white rounded-lg shadow-lg w-full relative"
        style={{ maxWidth, height }}
      >
        {children}
        <button
          className="absolute top-6 right-6 text-[24px] text-gray-500 hover:text-gray-800 flex items-center justify-start"
          onClick={() => onOpenChange(false)}
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
};

interface OutsideDismissDialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => any;
  maxWidth?: string;
  height?: string;
  children: ReactNode;
}

export const OutsideDismissDialog = ({
  open,
  onOpenChange,
  maxWidth = "448px",
  height = "max-content",
  children,
}: OutsideDismissDialogProps) => {
  // const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // dispatch(onOpenChange(false));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenChange]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-30 z-[5000] cursor-pointer"
      onClick={() => onOpenChange}
    >
      <div
        ref={ref}
        className="bg-white cursor-default rounded-lg shadow-lg w-full relative max-md:w-[90%]"
        style={{ maxWidth, height }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export const CustomBlurBgDialog = ({
  open,
  onOpenChange,
  children,
  maxWidth = "448px",
  height = "max-content",
}: DialogProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // dispatch(onOpenChange(false));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed max-w-[100vw] pt-6 h-screen overflow-y-auto inset-0 flex items-center bg-white/10 justify-center backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-150 z-[5000] cursor-pointer"
      onClick={() => onOpenChange(false)}
    >
      <div
        ref={ref}
        className="bg-white overflow-hidden cursor-default rounded-[20px] shadow-2xl w-full relative md:max-w-[448px] max-w-[85vw]"
        style={{ maxWidth, height }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface DialogTriggerProps {
  children: ReactElement;
  onClick: (open: boolean) => any;
}

export const DialogTrigger = ({ children, onClick }: DialogTriggerProps) => {
  return cloneElement(children, { // @ts-ignore
    onClick: () => onClick(true),
  });
};

interface DialogContentProps {
  children: ReactNode;
  className: string;
}

export const DialogContent = ({ children, className }: DialogContentProps) => (
  <div className={`dialog-content ${className}`}>{children}</div>
);

interface DialogHeaderProps {
  children?: ReactNode;
}

export const DialogHeader = ({ children }: DialogHeaderProps) => (
  <div className="dialog-header mb-4 p-6 pb-0 flex flex-col gap-2">
    {children}
  </div>
);

interface DialogTitleProps {
  children: string;
}

export const DialogTitle = ({ children }: DialogTitleProps) => (
  <h2 className="text-xl font-medium">{children}</h2>
);

interface DialogSubTitleProps {
  children: string;
}

export const DialogSubTitle = ({ children }: DialogSubTitleProps) => (
  <p className="text-sm text-text-placeholder">{children}</p>
);
