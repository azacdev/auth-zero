const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center flex-col bg-[#05050A]">
      {children}
    </div>
  );
};

export default AuthLayout;
