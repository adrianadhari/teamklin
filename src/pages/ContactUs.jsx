import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const ContactUs = () => {
  return (
    <div className="py-32" id="contact">
      <div className="container">
        <div className="flex justify-center space-x-12">
          <div className="space-y-7">
            <div>
              <p>CONTACT US</p>
              <p>
                Bukit Cimanggu City Blok Q4 No.2
                <br />
                Tanah Sareal, Kota Bogor
                <br />
                16166
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <MdEmail className="text-4xl" />
              <a href="mailto:prayuda@teamklin.com" target="_blank">prayuda@teamklin.com</a>
            </div>
            <div className="flex space-x-3 items-center">
              <MdOutlinePhoneInTalk className="text-4xl" />
              <div className="flex flex-col">
                <p>+62 811 8444 840 (Prayuda Satya)</p>
                <p>+62 812 9898 6867 (Endang Lunggana)</p>
              </div>
            </div>
          </div>
          <div className="h-96 border border-black"></div>
          <div className="space-y-7">
            <div className="flex space-x-3 items-center">
              <FaWhatsapp className="text-4xl" />
              <a href="https://wa.me/628118444840" className="rounded-lg px-7 py-3 border border-black" target="_blank">
                WA Admin Klik Disini
              </a>
            </div>
            <div className="flex space-x-3 items-center">
              <SiGooglemaps className="text-4xl" />
              <a href="https://maps.app.goo.gl/NLEXf374mWJxTgxm7" target="_blank" className="rounded-lg px-7 py-3 border border-black">
                Rute Maps Klik Disini
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.4258193939816!2d106.78193331610923!3d-6.543038802022297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3861f4136eb%3A0x5a253fc6bcc3b5a6!2sBlk.%20Q4%20Blok%20Q4%20No.2%2C%20RT.01%2FRW.10%2C%20Mekarwangi%2C%20Kec.%20Tanah%20Sereal%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016168!5e0!3m2!1sen!2sid!4v1727987672256!5m2!1sen!2sid"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
