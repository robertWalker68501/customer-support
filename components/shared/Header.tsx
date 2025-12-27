import Navbar from '@/components/shared/navigation/Navbar';

const Header = () => {
  return (
    <header className='border-b border-indigo-400/10 backdrop-blur-md dark:bg-indigo-400/20'>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
