import * as React from "react";
import Link from "next/link";

interface BackLinkProps {
  link: string;
}

const BackLink: React.FC<BackLinkProps> = ({ link }) => (
  <Link href={link}>
    <a>{"<< Back to recipes list"}</a>
  </Link>
);

export default BackLink;
