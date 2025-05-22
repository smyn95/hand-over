import Link, { LinkProps } from 'next/link';

import { FC, ReactNode } from 'react';

interface ModifiedLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {
  children: ReactNode;
}
const NextLink: FC<ModifiedLinkProps> = ({
  children,
  prefetch = false,
  ...props
}) => {
  return (
    <Link {...props} {...{ prefetch }}>
      {children}
    </Link>
  );
};

export default NextLink;
