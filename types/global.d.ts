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
    href: string;
    label: string;
    className?: string;
  };
}

export {};
