import pemulihan from "../assets/img/business-scope/pemulihan-lingkungan.png";
import rekayasa from "../assets/img/business-scope/rekayasa-industri.png";
import wwtp from "../assets/img/business-scope/wwtp.png";
import dokumen from "../assets/img/business-scope/dokumen-lingkungan.png";
import izin from "../assets/img/business-scope/izin-operasional.png";
import monitoring from "../assets/img/business-scope/monitoring-lingkungan.png";

const BusinessScope = () => {
  return (
    <section className="py-32" id="business">
      <div className="container text-center">
        <h1 className="font-bold text-[40px] mb-10">Lingkup Bisnis</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-start justify-items-center gap-8">
          <div className="space-y-5">
            <img
              src={pemulihan}
              alt="Pemulihan Lingkungan"
              className="mx-auto"
            />
            <p className="text-[#1584C9] font-bold text-xl">
              Pemulihan Lingkungan
            </p>
            <p className="text-justify">
              Melayani pengurusan pemulihan lahan yang terkontaminasi limbah B3,
              menggunakan metode yang sesuai dengan peraturan atau undang undang
              yang berlaku saat ini.
            </p>
          </div>
          <div className="space-y-5">
            <img src={rekayasa} alt="Rekayasa Industri" className="mx-auto" />
            <p className="text-[#1584C9] font-bold text-xl">
              Rekayasa Industri
            </p>
            <p className="text-justify">
              Melayani pembuatan dan rekayasa:{" "}
              <strong>
                Incinerator Limbah B3 dan Non B3 WWTP (Waste Water Treatment
                Plant) WTP (Water Treatment Plant) APC (Air Pollution Control),
                dll.
              </strong>
            </p>
          </div>
          <div className="space-y-5">
            <img src={izin} alt="Izin Operasional" className="mx-auto" />
            <p className="text-[#1584C9] font-bold text-xl">Izin Operasional</p>
            <p className="text-justify">
              Melayani pengurusan perizinan pengelolaan B3 dan juga Perizinan
              Operasional (Pertek & SLO) di Kementerian Lingkungan Hidup dan
              Kehutanan dan Dinas Lingkungan Hidup setempat: Pertek (Persetujuan
              Teknis) SLO (Surat Kelayakan Operasional)
            </p>
          </div>
          <div className="space-y-5">
            <img src={dokumen} alt="Dokumen Lingkungan" className="mx-auto" />
            <p className="text-[#1584C9] font-bold text-xl">
              Dokumen Lingkungan
            </p>
            <p className="text-justify">
              Melayani pembuatan dokumen lingkungan:{" "}
              <strong>
                AMDAL (Analisa Dampak Lingkungan)
                <br />
                UKL - UPL
                <br />
                DPLH
                <br />
                DELH
                <br />
                SPPL
              </strong>
            </p>
          </div>
          <div className="space-y-5">
            <img
              src={wwtp}
              alt="Pemulihan WWTP, WTP, STP"
              className="mx-auto"
            />
          </div>
          <div className="space-y-5">
            <img
              src={monitoring}
              alt="Monitoring Lingkungan"
              className="mx-auto"
            />
            <p className="text-[#1584C9] font-bold text-xl">
              Monitoring Lingkungan
            </p>
            <p className="text-justify">
              Melayani pembuatan dokumen monitoring lingkungan rutin beserta
              sampling dan Analisa di laboratorium yang terakreditasi KAN dan
              terdaftar di KLHK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessScope;
