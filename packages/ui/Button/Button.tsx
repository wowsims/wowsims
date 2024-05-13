import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // If variant is defined we will add the .btn class as well
  variant?:
    | "primary"
    | "outline-primary"
    | "secondary"
    | "outline-secondary"
    | "link"
    | "close"
    | "reset"
    | "clear";
};

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(({ className, children, variant, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(variant && `btn btn-${variant}`, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});
