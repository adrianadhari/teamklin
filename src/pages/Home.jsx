import deliveringg from "../assets/img/deliveringg.png";
import logoCenter from "../assets/img/logo-center.png";
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
import partner12 from "../assets/img/partners/12.png";
import arrow from "../assets/img/arrow.png";
import arrowleft from "../assets/img/arrow-left.png";

const Home = () => {
  return (
    <>
      <section className="pt-10 pb-32" id="home">
        <div className="container">
          <h1 className="text-3xl md:text-[40px] font-bold text-center animate__animated animate__fadeInDown leading-relaxed">
            Choose The Right Decision
            <br />
            For Your Business
          </h1>

          <div className="flex md:flex-row flex-col justify-between items-center py-7">
            <div className="flex flex-col space-y-4 items-center md:-mt-10">
              <img
                src={arrowleft}
                alt="Client Trusted"
                className="mt-9 md:mt-0 animate__animated animate__fadeInLeftBig  animate__slow"
              />
              <div className="shadow-xl rounded-3xl mt-5 overflow-hidden animate__animated animate__fadeInLeftBig animate__slower">
                <img
                  src={deliveringg}
                  alt="Delivering Environmental Issue Solutions"
                  className=" w-[340px]"
                />
                <p className="max-w-[340px] font-bold text-lg p-5 leading-relaxed text-justify">
                  Memberikan solusi atas segala permasalahan lingkungan anda
                  dengan pilihan tepat, terbaik, dan efisien. Sehingga
                  menghasilkan proses yang efektif.
                </p>
              </div>
            </div>
            <img src={logoCenter} alt="Logo KLIN" className="hidden md:block" />
            <div className="flex flex-col space-y-4 items-start mt-0 md:-mt-64 ">
              <img
                src={arrow}
                alt="Client Trusted"
                className="mt-9 md:mt-0 animate__animated animate__fadeInRightBig  animate__slow"
              />
              <p className="font-bold text-xl animate__animated animate__fadeInRightBig  animate__slow">
                Mengapa anda memilih kami?
              </p>
              <div className="flex flex-col space-y-3 p-5 shadow-xl rounded-3xl animate__animated animate__fadeInRightBig  animate__slower">
                <div className="flex items-center space-x-3">
                  <img src={checklist} alt="Checlist" />
                  <p className="font-bold text-xl">INTEGRITAS</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={checklist} alt="Checlist" />
                  <p className="font-bold text-xl">AKUNTABILITAS</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={checklist} alt="Checlist" />
                  <p className="font-bold text-xl">PROFESIONAL</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={checklist} alt="Checlist" />
                  <p className="font-bold text-xl">KEJUJURAN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate__animated animate__fadeInDown animate__slow">
            <h1 className="text-3xl md:text-[40px] font-bold mt-10">
              Tentang Perusahaan
            </h1>
            <p className="text-lg md:text-2xl font-bold mt-3">
              PT Khabir Lingkungan Indonesia
            </p>
            <p className="text-lg md:text-center text-justify md:text-2xl font-medium">
              Dibentuk pada tahun 2018, oleh kelompok yang memiliki semangat
              tinggi
              <br />
              dan sangat berpengalaman dalam menyelesaikan permasalahan di
              bidang lingkungan.
            </p>
          </div>
          <div className="bg-[#00A600] mx-auto max-w-4xl text-center flex flex-col space-y-4 text-white mt-14  pt-16 pb-8 md:py-24 rounded-t-full animate__animated animate__bounceInUp animate__slower">
            <p className="text-base md:text-2xl font-bold">
              &quot;Our Company Identify is Our Business Philosophy&quot;
            </p>
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
            <div
              className="px-7 py-3 shadow rounded-2xl w-56 h-36 flex items-center justify-center bg-white"
              data-aos="fade-up-left"
              data-aos-duration="2300"
            >
              <img src={partner12} className="w-2/5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
