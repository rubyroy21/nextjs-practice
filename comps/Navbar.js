/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/st1.png" height={77} width={128} />
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/strangerThings" legacyBehavior>
        <a>ST Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
