const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`p-4 max-w-screen-lg mx-auto ${className}`}>{children}</div>;
};

export default Wrapper;
