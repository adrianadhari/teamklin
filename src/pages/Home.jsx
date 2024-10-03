import delivering from "../assets/img/delivering.png";
import logoCenter from "../assets/img/logo-center.png";
import clientTrusted from "../assets/img/client-trusted.png";
import checklist from "../assets/img/checklist.png";
import partner1 from '../assets/img/partners/1.png'
import partner2 from '../assets/img/partners/2.png'
import partner3 from '../assets/img/partners/3.png'
import partner4 from '../assets/img/partners/4.png'
import partner5 from '../assets/img/partners/5.png'
import partner6 from '../assets/img/partners/6.png'
import partner7 from '../assets/img/partners/7.png'
import partner8 from '../assets/img/partners/8.png'
import partner9 from '../assets/img/partners/9.png'
import partner10 from '../assets/img/partners/10.png'
import partner11 from '../assets/img/partners/11.png'

const Home = () => {
  return (
    <div className="pt-10 pb-32" id="home">
      <div className="container">
        <h1 className="text-[40px] font-bold text-center">
          Choose The Right Decision
          <br />
          For Your Business
        </h1>
        <div className="flex justify-between items-center">
          <img
            src={delivering}
            alt="Delivering Environmental Issue Solutions"
            className="-mt-5"
          />
          <img src={logoCenter} alt="Logo KLIN" />
          <img src={clientTrusted} alt="Client Trusted" />
        </div>
        <div className="text-center">
          <h1 className="text-[40px] font-bold mt-10">
            Tentang Perusahaan
          </h1>
          <p className="text-2xl font-extrabold mt-3">PT Khabir Lingkungan Indonesia</p>
          <p className="text-2xl font-bold">
            Dibentuk pada tahun 2018, oleh kelompok yang memiliki semangat
            tinggi
            <br />
            dan sangat berpengalaman dalam menyelesaikan permasalah di bidang
            lingkungan.
          </p>
        </div>
        <div className="bg-[#00A600] text-center flex flex-col space-y-4 text-white mt-6 pt-20 pb-10 rounded-t-full">
            <p className="text-2xl font-bold">&quot;Our Company Identify is Our Business Philosophy&quot;</p>
            <p className="font-semibold text-xl">Mengapa anda memilih kami?</p>
            <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center">
                    <img src={checklist} alt="Icon Checklist" />
                    <p className="font-semibold text-xl">INTEGRITAS</p>
                </div>
                <div className="flex items-center">
                    <img src={checklist} alt="Icon Checklist" />
                    <p className="font-semibold text-xl">AKUNTABILITAS</p>
                </div>
                <div className="flex items-center">
                    <img src={checklist} alt="Icon Checklist" />
                    <p className="font-semibold text-xl">PROFESIONAL</p>
                </div>
                <div className="flex items-center">
                    <img src={checklist} alt="Icon Checklist" />
                    <p className="font-semibold text-xl">KEJUJURAN</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-8 place-items-center">
            <img src={partner1} />
            <img src={partner2} />
            <img src={partner3} />
            <img src={partner4} />
            <img src={partner5} />
            <img src={partner6} />
            <img src={partner7} />
            <img src={partner8} />
            <img src={partner9} />
            <img src={partner10} />
            <img src={partner11} />
        </div>
      </div>
    </div>
  );
};

export default Home;
