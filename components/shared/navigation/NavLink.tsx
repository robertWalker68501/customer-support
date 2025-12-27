'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const NavLink = ({ href, label, className, isMobile }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors duration-300 hover:text-indigo-400',
        isActive && 'text-indigo-400',
        isMobile && 'text-2xl',
        className
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
