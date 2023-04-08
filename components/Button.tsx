import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button ref={ref} className={`button ${className}`} {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button';

export default Button;
