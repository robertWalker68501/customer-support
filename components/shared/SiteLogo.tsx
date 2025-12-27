import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const SiteLogo = ({
  href,
  text = 'Customer Support',
  linkClasses,
  imgSrc = '/assets/images/logo.png',
  imgAlt = 'Customer Support Logo',
  imgWidth = 40,
  imgHeight = 40,
  imgClasses,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 text-2xl font-semibold text-indigo-400',
        linkClasses
      )}
      aria-label={text}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          className={cn('', imgClasses)}
        />
      )}
      {text}
    </Link>
  );
};

export default SiteLogo;
