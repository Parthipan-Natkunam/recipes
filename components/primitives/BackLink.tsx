import * as React from "react";
import Link from "next/link";

interface BackLinkProps {
  link: string;
  as: string;
  text: string;
}

const BackLink: React.FC<BackLinkProps> = ({ link, as, text }) => (
  <Link href={link} as={as}>
    <a data-testid="$recipe-app-back-link-anchor">{text}</a>
  </Link>
);

export default BackLink;
