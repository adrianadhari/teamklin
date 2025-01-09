import dokumen from "../assets/img/business-scope/dokumen-lingkungan.png";
import izin from "../assets/img/business-scope/izin-operasional.png";
import monitoring from "../assets/img/business-scope/monitoring-lingkungan.png";
import rekayasa from "../assets/img/business-scope/rekayasa-industri.png";
import studio from "../assets/img/business-scope/studio.png";
import background1 from "../assets/img/bg1.png";
import background2 from "../assets/img/bg2.png";
import background3 from "../assets/img/bg3.png";
import background4 from "../assets/img/bg4.png";

const ProjectPortfolio = () => {
  return (
    <section className="py-32 bg-slate-50" id="project">
      <div className="container">
        <div className="mb-48">
          <h1
            className="text-4xl text-white font-bold mx-auto bg-opacity-75 p-10 rounded-lg w-fit bg-cover"
            style={{ backgroundImage: `url(${background1})` }}
          >
            Pembuatan Dokumen Lingkungan dan Pengurusan Izin
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center">
            <div>
              <img src={dokumen} alt="Dokumen Lingkungan" className="mx-auto" />
              <h3 className="text-2xl font-bold mb-3 text-center">
                DOKUMEN LINGKUNGAN
              </h3>
              <ul className="list-disc font-bold">
                <li>Revisi UKL UPL PT Karya Kita Jaya</li>
                <li>Revisi UKL UPL PT Van Oord Indonesia</li>
                <li>Revisi UKL UPL PT Central Fortuna Steel</li>
                <li>Revisi UKL UPL PT Sinta Prima Feedmill</li>
                <li>Pembuatan UKL UPL PT Nebraska</li>
                <li>Pembuatan UKL UPL PT Immortal</li>
                <li>Pembuatan UKL UPL PT Cilatexindo</li>
                <li>Pembuatan UKL UPL PT Anugerah Mitra Sentosa</li>
                <li>Pembuatan AMDAL PT Berkah Anugrah Ilahi</li>
                <li>Pembuatan AMDAL PT Perindustrian Sawit Synergi</li>
                <li>Pembuatan DELH PT Akasha Wira International</li>
                <li>Pembuatan DPLH PT Sumi Win Mukti</li>
                <li>Adendum AMDAL PT Sebamban Terminal Umum</li>
                <li>Adendum AMDAL PT Givaudan Indonesia</li>
                <li>Adendum AMDAL PT Indokordsa Tbk</li>
              </ul>
            </div>
            <div>
              <img
                src={izin}
                alt="IZIN PENGELOLAAN LIMBAH B3"
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                IZIN PENGELOLAAN LIMBAH B3
              </h3>
              <ul className="list-disc font-bold">
                <li>Pemanfaatan Limbah B3 PT JMM, Cikarang</li>
                <li>Pemanfaatan Limbah B3 PT New Ramon Star, Pati</li>
                <li>Izin Impor Limbah B3 PT GRI, Batam</li>
                <li>Pengumpulan Limbah B3 PT Karya Kita Jaya, Cikampek</li>
                <li>Pemanfaatan Limbah B3 PT Atrakana Mitra Sejati, Cianjur</li>
                <li>Pemanfaatan Limbah B3 PT Noor Annisa Kemikal, Pemalang</li>
                <li>Pemanfaatan Limbah B3 PT YKS Indonesia, Karawang</li>
                <li>Izin Transportasi Limbah B3 PT SAC, Karawang</li>
                <li>Pengolahan Limbah B3 PT BGS, Cikarang (Perpanjangan)</li>
                <li>Pengolahan Limbah B3 RSBCM, Kalimantan Selatan</li>
                <li>
                  Pengumpulan Limbah B3 PT Restu Ibu Kotabaru, Kalimantan
                  Selatan
                </li>
                <li>Pemanfaatan Limbah B3 PT Prima Bata Press, Bogor</li>
                <li>Pemanfaatan Limbah B3 PT Karya Jaya Logam, Bekasi</li>
                <li>Pemanfaatan Limbah B3 PT Sumi Win Mukti</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-48">
          <h1
            className="text-4xl text-white font-bold mx-auto bg-opacity-75 p-10 rounded-lg w-fit bg-cover"
            style={{ backgroundImage: `url(${background2})` }}
          >
            Pembuatan Dokumen Lingkungan dan Pengurusan Izin
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center">
            <div>
              <img src={dokumen} alt="Dokumen Lingkungan" className="mx-auto" />
              <h3 className="text-2xl font-bold mb-3 text-center">
                IZIN OPERASIONAL (PERTEK & SLO)
              </h3>
              <ul className="list-disc font-bold">
                <li>
                  Persetujuan Teknis Udara Emisi PT Perindustrian Sawit Synergi
                </li>
                <li>
                  Persetujuan Teknis Udara Emisi PT Sebamban Terminal Umum
                </li>
                <li>Persetujuan Teknis Udara Emisi PT Givaudan Indonesia</li>
                <li>Persetujuan Teknis Udara Emisi PT Indo Kordsa Tbk</li>
                <li>Persetujuan Teknis Udara Emisi PT Stretchline</li>
                <li>Persetujuan Air Limbah PT Sebamban Terminal Umum</li>
                <li>Persetujuan Teknis Air Limbah PT Pou Yuen Indonesia</li>
                <li>Persetujuan Teknis Air Limbah PT Givaudan Indonesia</li>
                <li>Persetujuan Teknis Air Limbah PT Indo Kordsa Tbk</li>
                <li>Persetujuan Teknis Air Limbah PT Stretchline</li>
                <li>Persetujuan Teknis Air Limbah PT Karya Makmur Abadi</li>
                <li>Persetujuan Teknis Air Limbah PT Mulia Agro Permai</li>
                <li>Persetujuan Teknis Air Limbah PT Van Oord Indonesia</li>
                <li>Persetujuan Teknis Air Limbah PT Central Fortuna Steel</li>
                <li>Persetujuan Teknis Air Limbah PT Sinta Prima Feedmill</li>
                <li>
                  Persetujuan Teknis Air Limbah PT Akasha Wira International
                </li>
                <li>SLO Air Limbah PT Givaudan Indonesia</li>
                <li>SLO Udara Emisi PT Givaudan Indonesia</li>
              </ul>
            </div>
            <div>
              <img
                src={monitoring}
                alt="MONITORING LINGKUNGAN"
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                MONITORING LINGKUNGAN
              </h3>
              <ul className="list-disc font-bold">
                <li>Sampling Ambient Air Quality di INALUM - Medan</li>
                <li>Pengujian Karakteristik LB3 INALUM</li>
                <li>Pemantauan Udara Emisi DLH Kota Bogor</li>
                <li>Pemantauan Rona Awal PT APN</li>
                <li>Pemantauan Rona Awal PT Buana Mukim Mandiri</li>
                <li>Pemantauan Rona Awal PT Atrakana Mitra Sejati</li>
                <li>Pemantauan Rona Awal PT Kreasi Lingkungan Indah</li>
                <li>Pemantauan Rona Awal PT Berkah Anugrah Ilahi</li>
                <li>Monitoring Lingkungan PT Nokti Mandiri Lestari</li>
                <li>Monitoring Lingkungan PT Noor Annisa Kemikal</li>
                <li>
                  Monitoring Lingkungan dan Industrial Hygiene PT CSD-ANTAM
                </li>
                <li>Sampling Tanah Terkontaminasi di KIIC</li>
                <li>Sampling LB3 Pendampingan KLHK di Marunda</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-48">
          <h1
            className="text-4xl text-white font-bold mx-auto max-w-5xl text-center bg-opacity-75 p-10 rounded-lg bg-cover"
            style={{ backgroundImage: `url(${background3})` }}
          >
            Project Lainnya
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center">
            <div>
              <img
                src={rekayasa}
                alt="REKAYASA INDUSTRI TERBATAS"
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                REKAYASA INDUSTRI TERBATAS
              </h3>
              <ul className="list-disc font-bold">
                <li>Optimalisasi Water Scrubber Incinerator RS Azra Bogor</li>
                <li>
                  Pembuatan Platform dan Titik Sampling PT Lucky Indah Keramik
                </li>
                <li>Pembuatan Cyclone Incinerator PT Nusa Halmahera Mining</li>
                <li>
                  Pembuatan dan Supervisi Lab Mikrobiologi PT Ciomas Adisatwa
                </li>
                <li>Pembuatan dan Supervisi Lab Produk PT Solenis</li>
                <li>Pembuatan Incinerator B3 PT Anugerah Berkah Ilahi</li>
                <li>Dewatering lumpur clarifier di PT. Fajar paper, Bekasi</li>
                <li>STP 10 m3/hari di Restoran Sentosa Seafood, Bogor</li>
                <li>STP 10 m3/hari di Restoran Fogo Brazillian, Bogor</li>
                <li>
                  Service and maintenance STP 12 m3/hari di Ranch Market,
                  Jakarta
                </li>
                <li>Slurry Handling di Adaro, Kalimantan</li>
                <li>Slurry Handling di Nusa Halmahera Minerals, Halmahera</li>
              </ul>
            </div>
            <div>
              <img
                src={monitoring}
                alt="MONITORING LINGKUNGAN"
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                MONITORING LINGKUNGAN
              </h3>
              <ul className="list-disc font-bold">
                <li>Pemulihan Fungsi Rawa Kalimati PT Indo Bharat Rayon</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center mt-10">
            <div>
              <img
                src={studio}
                alt="STUDIO dan JASA KONSULTASI"
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold mb-3 text-center">
                STUDIO dan JASA KONSULTASI
              </h3>
              <ul className="list-disc font-bold">
                <li>
                  Asistensi dan Training Persiapan Proper Hijau, PT Kaltim Prima
                  Coal
                </li>
                <li>
                  Asistensi dan Training Persiapan Proper Biru, PT Indokordsa
                  Tbk
                </li>
              </ul>
            </div>
            <div className="mt-28">
              <h1
                className="text-4xl text-white font-bold text-center bg-opacity-75 px-10 py-14 rounded-lg w-fit bg-cover"
                style={{ backgroundImage: `url(${background4})` }}
              >
                “The Earth is What We All Have in Common”
                <br />
                -wendell berry-
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
