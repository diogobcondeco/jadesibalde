const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 max-w-screen-lg mx-auto">{children}</div>;
};

export default Wrapper;
