const Footer = () => {
  return (
    <div className="footer bg-[#333333] text-white" id="footer">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="desc">
            <h3 className="font-bold text-xl">
              PT. KHABIB LINGKUNGAN INDONESIA
            </h3>
            <p className="leading-relaxed my-5">
              “Our Company Identity is Our Business
              <br />
              Philosophy”
            </p>
          </div>
          <div>
            <ul className="grid gap-y-3">
              <li>
                <a href="#home" className="hover:text-color-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-color-secondary">
                  Business Scope
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-color-secondary">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-color-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-1">Contact</p>
            <p className="mb-4">
              Bukit Cimanggu City Blok Q4 No.2 Tanah Sereal, Kota Bogor 16166
            </p>
            <p className="mb-4">prayuda@teamklin.com</p>
            <p>+62 811 8444 840 (Prayuda Satya)</p>
            <p>+62 812 9898 687 (Endang Lunggana)</p>
          </div>
          <div className="newsletter">
            <h3 className="font-bold text-xl">Regulation</h3>
            <p className="leading-relaxed my-6">
              List of regulation that are used as our
              <br />
              reference in laboratory test
            </p>
            <a
              href="#"
              className="px-7 py-4 bg-white text-black rounded-lg font-medium"
            >
              Regulation List
            </a>
          </div>
        </div>

        <div className="flex justify-end pt-10">
          <p className="font-semibold">&copy; {new Date().getFullYear()} KLIN</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
