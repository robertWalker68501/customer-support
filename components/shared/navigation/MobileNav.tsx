import { MenuIcon } from 'lucide-react';

import NavLink from '@/components/shared/navigation/NavLink';
import SiteLogo from '@/components/shared/SiteLogo';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <SiteLogo href='/' />
          </SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea et
            fugiat in inventore maxime modi sunt tempora ullam veniam voluptate.
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-4 px-4'>
          {links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isMobile
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
