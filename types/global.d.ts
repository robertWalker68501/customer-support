declare global {
  type SiteLogoProps = {
    href: string;
    text?: string;
    linkClasses?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgClasses?: string;
  };

  type NavLinkProps = {
    id?: string;
    href: string;
    label: string;
    className?: string;
    isMobile?: boolean;
  };

  type MobileNavProps = {
    links: NavLinkProps[];
  };
}

export {};
