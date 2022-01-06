const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="dark:bg-slate-800 dark:text-white min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default MainLayout;
