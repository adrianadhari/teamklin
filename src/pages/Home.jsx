import delivering from "../assets/img/delivering.png";
import logoCenter from "../assets/img/logo-center.png";
import clientTrusted from "../assets/img/client-trusted.png";
import checklist from "../assets/img/checklist.png";
import partner1 from "../assets/img/partners/1.png";
import partner2 from "../assets/img/partners/2.png";
import partner3 from "../assets/img/partners/3.png";
import partner4 from "../assets/img/partners/4.png";
import partner5 from "../assets/img/partners/5.png";
import partner6 from "../assets/img/partners/6.png";
import partner7 from "../assets/img/partners/7.png";
import partner8 from "../assets/img/partners/8.png";
import partner9 from "../assets/img/partners/9.png";
import partner10 from "../assets/img/partners/10.png";
import partner11 from "../assets/img/partners/11.png";

const Home = () => {
  return (
    <>
      <section className="pt-10 pb-32" id="home">
        <div className="container">
          <h1 className="text-3xl md:text-[40px] font-bold text-center animate__animated animate__fadeInDown">
            Choose The Right Decision
            <br />
            For Your Business
          </h1>

          <div className="flex md:flex-row flex-col justify-between items-center py-7">
            <img
              src={delivering}
              alt="Delivering Environmental Issue Solutions"
              className="md:-mt-5 animate__animated animate__fadeInLeftBig animate__slow mt-5"
            />
            <img
              src={logoCenter}
              alt="Logo KLIN"
              className="animate__animated animate__fadeInDown hidden md:block"
            />
            <img
              src={clientTrusted}
              alt="Client Trusted"
              className="animate__animated animate__fadeInRightBig  animate__slow mt-9 md:mt-0"
            />
          </div>

          <div className="text-center animate__animated animate__fadeInDown animate__slow">
            <h1 className="text-3xl md:text-[40px] font-bold mt-10">
              Tentang Perusahaan
            </h1>
            <p className="text-lg md:text-2xl font-extrabold mt-3">
              PT Khabir Lingkungan Indonesia
            </p>
            <p className="text-lg md:text-center text-justify md:text-2xl font-medium">
              Dibentuk pada tahun 2018, oleh kelompok yang memiliki semangat
              tinggi
              <br />
              dan sangat berpengalaman dalam menyelesaikan permasalah di bidang
              lingkungan.
            </p>
          </div>
          <div className="bg-[#00A600] text-center flex flex-col space-y-4 text-white mt-14 pt-32 md:pt-20 pb-10 rounded-t-full animate__animated animate__bounceInUp animate__slower">
            <p className="text-lg md:text-2xl font-bold">
              &quot;Our Company Identify is Our Business Philosophy&quot;
            </p>
            <p className="font-semibold text-base md:text-xl">
              Mengapa anda memilih kami?
            </p>
            <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8">
              <div className="flex items-center">
                <img src={checklist} alt="Icon Checklist" />
                <p className="font-semibold text-sm md:text-xl">INTEGRITAS</p>
              </div>
              <div className="flex items-center">
                <img src={checklist} alt="Icon Checklist" />
                <p className="font-semibold text-sm md:text-xl">
                  AKUNTABILITAS
                </p>
              </div>
              <div className="flex items-center">
                <img src={checklist} alt="Icon Checklist" />
                <p className="font-semibold text-sm md:text-xl">PROFESIONAL</p>
              </div>
              <div className="flex items-center">
                <img src={checklist} alt="Icon Checklist" />
                <p className="font-semibold text-sm md:text-xl">KEJUJURAN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5  bg-slate-50">
        <div className="container">
          <h1 className="text-3xl md:text-[40px] font-bold text-center mt-24">
            Business Partner
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center mt-6 border py-7">
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="300"
            >
              <img src={partner1} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="500"
            >
              <img src={partner2} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="700"
            >
              <img src={partner3} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="900"
            >
              <img src={partner4} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="1100"
            >
              <img src={partner5} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="1300"
            >
              <img src={partner6} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <img src={partner7} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="1700"
            >
              <img src={partner8} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="1900"
            >
              <img src={partner9} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="2100"
            >
              <img src={partner10} />
            </div>
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="2300"
            >
              <img src={partner11} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
