import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";

import "./variants/close.scss";
import "./variants/reset.scss";

export type ButtonVariant =
  | "primary"
  | "outline-primary"
  | "secondary"
  | "outline-secondary"
  | "link"
  | "close"
  | "reset"
  | "clear";

export type ButtonSize = "sm" | "lg";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // If variant is defined we will add the .btn class as well
  variant?: ButtonVariant;
  size?: ButtonSize;
  // String of className's for the left icon
  iconLeft?: string;
  // String of className's for the right icon
  iconRight?: string;
};

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      className,
      children,
      variant,
      size,
      type = "button",
      iconLeft,
      iconRight,
      ...props
    },
    ref,
  ) => {
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
  },
);
