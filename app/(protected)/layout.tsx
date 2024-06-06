import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex gap-y-10 h-full w-full items-center justify-center flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
