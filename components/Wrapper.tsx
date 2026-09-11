import type { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`mx-auto max-w-screen-lg p-4 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
