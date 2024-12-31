import Image from "next/image";
const Header = () => (
  <header className="bg-bandp_red flex justify-center text-white text-center px-8 pt-4 pb-12">
    <div className="container">
      <div className={`flex flex-col lg:flex-row justify-center items-center`}>
        <Image
          src="/images/bandp-logo.png"
          width={534}
          height={76}
          alt="Logo"
          className="mx-8 mb-8 lg:mb-0"
        />
        <div>
          <a
            href="tel:+447624469934"
            role="button"
            className="bg-bandp_red border-2 border-white text-white py-2 px-4 rounded"
          >
            Call 07624 469934
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
