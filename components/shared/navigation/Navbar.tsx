import NavLink from '@/components/shared/navigation/NavLink';
import { ThemeToggle } from '@/components/shared/navigation/ThemeToggle';
import SiteLogo from '@/components/shared/SiteLogo';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
      <SiteLogo href='/' />

      {/* Desktop Navigation */}
      <div className='hidden items-center gap-4 sm:flex'>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            label={link.label}
          />
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
