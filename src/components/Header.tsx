import AuthButton from './AuthButton';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Aptitude Mastery
        </div>
        <AuthButton />
      </nav>
    </header>
  );
};

export default Header;