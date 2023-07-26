const Container = ({ children }) => {
    return (
      <div className="container mx-auto px-2 py-1 bg-inherit max-w-7xl">
        {children}
      </div>
    );
  };
  
  export default Container;
  