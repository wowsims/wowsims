import clsx from "clsx";

import "./variants/close.scss";
import "./variants/reset.scss";

export type ButtonVariant =
  | "primary"
  | "outline-primary"
  | "secondary"
  | "outline-secondary"
  | "link"
  | "warning"
  | "danger"
  | "close"
  | "reset"
  | "clear";

export type ButtonSize = "sm" | "lg";
export type ButtonProps = JSX.HTMLElementProps<"button"> & {
  // If variant is defined we will add the .btn class as well
  variant?: ButtonVariant;
  size?: ButtonSize;
  // String of className's for the left icon
  iconLeft?: string;
  // String of className's for the right icon
  iconRight?: string;
};

export const Button = ({
  ref,
  className,
  children,
  variant,
  size,
  type = "button",
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      className={clsx(
        variant && variant !== "close" && `btn`,
        variant && `btn-${variant}`,
        size && `btn-${size}`,
        className,
      )}
      type={type}
      {...props}
    >
      {iconLeft && <i className={iconLeft} />}
      {children}
      {iconRight && <i className={iconRight} />}
    </button>
  );
};
