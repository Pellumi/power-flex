import * as React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { cn } from "@/utils/class-names";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full px-3 py-2 rounded-md border border-border bg-white outline-none focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 not-placeholder-shown:border-primary md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  searchClassName?: string;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  searchClassName = "",
  ...props
}) => {
  return (
    <div className={cn("relative", className)}>
      <MdOutlineSearch
        className="absolute left-2.5 top-[50%] -translate-y-1/2"
        size={24}
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full h-full pl-10 py-2 rounded-md bg-neutral-bg/60 placeholder-neutral-mediumGray",
          searchClassName
        )}
        {...props}
      />
    </div>
  );
};

interface PasswordProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  searchClassName?: string;
}

const Password: React.FC<PasswordProps> = ({
  value,
  onChange,
  className = "",
  error = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative w-full h-max">
      <input
        required
        className={`w-full px-3 py-2  rounded-md bg-white border placeholder:text-neutral-placeholder not-placeholder-shown:border-primary outline-none focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 ${className} ${
          error ? "border-destructive" : "border-border"
        }`}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        {...props}
      />
      <div
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
          error && "translate-y-[calc(-50%_-_12px)]"
        }`}
        onClick={togglePasswordVisibility}
      >
        {!showPassword ? (
          <FiEye size={25} color="gray" />
        ) : (
          <FiEyeOff size={25} color="gray" />
        )}
      </div>
      {error && <p className="text-sm text-primary-brightRed mt-1">{error}</p>}
    </div>
  );
};

export { Input, Search, Password };
