const Header = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex flex-col gap-3">
        <img
          src="tiktak.jpg"
          alt="tik-tak-toe image"
          className="h-30 w-30 ml-15 top-0"
        />
        <p className="flex justify-center text-5xl font-bold">Tik-Tak-Toe</p>
      </div>
    </div>
  );
};

export default Header;
