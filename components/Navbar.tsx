import Link from "next/link";

const Navbar = () => (
  <nav className="bg-bandp_red text-white p-4">
    <div className="container mx-auto flex justify-center text-xs lg:text-lg text-center">
      <Link className={`mx-2`} href="/">
        <div>Home</div>
      </Link>
      <Link className={`mx-2`} href="/contact-us">
        <div>Contact Us</div>
      </Link>
      <Link className={`mx-2`} href="/about-us">
        <div>About Us</div>
      </Link>
      <Link className={`mx-2`} href="/services">
        <div>Services</div>
      </Link>
      <Link className={`mx-2`} href="/gallery">
        <div>Gallery</div>
      </Link>
    </div>
  </nav>
);

export default Navbar;
