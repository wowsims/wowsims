import clsx from "clsx";
import { AnchorHTMLAttributes, PropsWithChildren, forwardRef } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: undefined;
};

export const Link = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<LinkProps>
>(({ className, children, variant, href, role, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={clsx("btn", variant && `btn-${variant}`, className)}
      role={role}
      {...props}
    >
      {children}
    </a>
  );
});
