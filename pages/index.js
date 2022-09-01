import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo1 from "../styles/logo-1.svg";
import Logo2 from "../styles/logo-2.svg";
import Logo3 from "../styles/abisKerja.svg";
import Img1 from "../styles/img-1.svg";
import fb from "../styles/img-fb.svg";
import ig from "../styles/img-ig.svg";
import yb from "../styles/img-yt.svg";
import ln from "../styles/img-in.svg";
import em from "../styles/img-mail.svg";
import wa from "../styles/img-wa.svg";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Topik_terbaru");

  return (
    <div className="">
      {/* Navbar */}
      <div className="container mx-auto">
        <div className="mx-auto items-center ">
          <Image src={Logo2} alt="logo ociskill" width={150} height={70} />
        </div>
      </div>
      {/* Hero */}
      <div className="container mx-auto flex row  bg-amber-400 rounded-lg h-[340px]">
        <div className="container mx-auto ml-[50px]">
          <span className="flex justify ml-[45px]  mt-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[30px] h-[30px] bg-white rounded p-1"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[20px] font-bold ml-[5px]">
              Pusat edukasi bisnis Ocistok by HabisKerja
            </p>
          </span>{" "}
          <br></br>
          <div className="ml-[40px]">
            <span className="text-[40px] font-Inter text-black font-bold">
              <p>
                saatnya <a className="text-[#FC6D1D] ">#JualanTanpaBatas</a>
              </p>
              <p>Update Skill Bisnismu</p>
              <p>Bersama OCI- skill Academy</p>
            </span>
          </div>
        </div>

        <div className="container flex flex-row ">
          <div className="pt-[25px]">
            <Image
              src={Img1}
              alt="logo ociskill"
              width={412}
              height={315}
              className="ml-[300px]"
            />{" "}
          </div>
          <div>
            {" "}
            <Image src={Logo3} alt="abiskerja" width={236} height={90} />{" "}
          </div>
        </div>

        {/* <div className="container mx-auto float-left ml-[80px]">
            <span className="text-[35px] font-Inter text-black font-bold">
              <p>
                saatnya <a className="text-[#FC6D1D] ">#JualanTanpaBatas</a>
              </p>
              <p>Update Skill Bisnismu</p>
              <p>Bersama OCI- skill Academy</p>
            </span>
          </div>

          <div className="container mx-auto ">
            <Image src={Img1} alt="logo ociskill" width={412} height={315} />
          </div> */}
      </div>
      {/* vidie */}
      <div className="container mx-auto mt-[54px] font-Poppins">
        {/* judul */}
        <div className="text-center">
          <span>
            <h1 className="text-[#FC6D1D] font-bold text-[40px]">
              Jelajahi Skill Baru
            </h1>
            <p className="font-semibold text-[25px]">
              Berbagai macam pilihan topik untuk meningkatkan skill bisnismu
            </p>
          </span>
        </div>

        {/* button */}
        <div className="flex flex-wrap justify-center gap-9 mt-[20px] ">
          <button
            type="button"
            onClick={() => setActive("Topik_terbaru")}
            className={`${
              active === "Topik_terbaru" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Topik Baru{" "}
          </button>
          <button
            type="button"
            onClick={() => setActive("semuaTopik")}
            className={`${
              active === "semuaTopik" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Semuah Topik{" "}
          </button>
          <button
            type="button"
            onClick={() => setActive("mpOptmize")}
            className={`${
              active === "mpOptmize" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Marketplace Optimization
          </button>
          <button
            type="button"
            onClick={() => setActive("sosialmar")}
            className={`${
              active === "sosialmar" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Social Media Marketing{" "}
          </button>
          <button
            type="button"
            onClick={() => setActive("brand")}
            className={`${
              active === "brand" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Branding{" "}
          </button>
          <button
            type="button"
            onClick={() => setActive("digitMar")}
            className={`${
              active === "digitMar" ? "bg-orange-400" : ""
            } w-[165px] h-[44] border border-black`}
          >
            {" "}
            Digital Marketing{" "}
          </button>
          {/* <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Topik Baru</a></p>
            <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Semuah Topik</a></p>
            <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Marketplace Optimization</a></p>
            <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Social Media Marketing</a></p>
            <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Branding</a></p>
            <p className='px-3 py-1  bg-amber-400 w-[150px] h-[44]'><a className='max-auto'> Digital Marketing</a></p> */}
        </div>

        {/* video */}

        <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className="flex-shrink-0 w-[20rem]">
            <div className="w-[20rem] h-[11rem] border border-black"></div>
            <p className="text-2xl font-extrabold mt-2">
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className="text-xl font-medium mt-1 text-gray-400">
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>
        </div>
      </div>
      {/* footer atas */}``
      <div className="container mx-auto  bg-amber-400 rounded-lg text-center h-[350px] font-Inter text-black">
        <div>
          <h1 className="text-[40px] mt-[44px] font-bold">
            Pengen belajar lebih mendalam?
          </h1>

          <p className="mt-[18px] text-[25px] leading-[24px]">
            Kunjungi Handbook HabisKerja untuk mendapatkan skill bisnis di-era
            digital yang{" "}
          </p>
          <p className="mt-[18px] text-[25px] leading-[24px]">
            {" "}
            lebih lengkap dengan ahlinya!
          </p>
        </div>
        <div>
          <button
            type="button"
            className="w-[350px] h-[60px] bg-black/70 hover:bg-black/80 text-white text-[40px] font-Inter  text-center mt-[93px]"
          >
            Lihat Handbook
          </button>
        </div>
      </div>
      {/* footer terngah */}
      <div className="container mx-auto bg-amber-400 font-Inter text-white h-[550px] mt-[21px]">
        <div className="flex space-x-[178px] pt-[44px]">
          <div>
            <Image
              src={Logo2}
              alt="logo ociskill"
              width={250}
              height={70}
              className="mt-[44px]"
            />
          </div>

          <div>
            <ul>
              <li>AKUN SAYA</li>
              <li className="mt-[20px]">Keranjang</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>TENTANG KAMI</li>
              <li className="mt-[20px]">Syarat & Ketentuan</li>
              <li>Kebijakan Refund</li>
              <li>Kebijakan Privasi</li>
              <li>Tentang Ocistok</li>
              <li>Blogs</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>LOKASI KAMI</li>
              <li className="mt-[20px]">
                Jalan Daan Mogot no.73, Tanjung Duren Utara, Grogol <br></br>{" "}
                petamburan, jakarta barat, 11470
              </li>
              <li>021-50867088</li>
              <li>info@ocistok.com</li>
            </ul>
          </div>
          {/* <div className='type:none'>
            <li>TENTANG KAMI</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Refund</li>
            <li>Kebijakan Privasi</li>
            <li>Tentang Ocistok</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </div> */}
        </div>

        <div>
          <div className="text-center mt-[50px]">
            <p>Follow Akun Media Sosial Kita </p>
          </div>

          <div className="flex justify-center gap-8">
            <div>
              <Image src={wa} alt="whatsaap" width={45} height={70} />
            </div>

            <div>
              <Image src={fb} alt="logo ociskill" width={45} height={70} />
            </div>

            <div>
              <Image src={ig} alt="logo ociskill" width={45} height={70} />
            </div>

            <div>
              <Image src={em} alt="logo ociskill" width={45} height={70} />
            </div>

            <div>
              <Image src={yb} alt="logo ociskill" width={45} height={70} />
            </div>

            <div>
              <Image src={ln} alt="logo ociskill" width={45} height={70} />
            </div>
          </div>

          <div className="text-center text-lg">
            <p>Layanan Pengaduan Konsumen</p>
            <p>PT. Ocommerce Capital Indonesia</p>
            <p>Email: info@ocistok.com</p>
            <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</p>
            <p>Kementerian Perdagangan Republik Indonesia</p>
            <p>Whatsapp Ditjen PKTN: 0853 1111 1010 </p>
          </div>
        </div>
      </div>
      {/* Footer bawah */}
      <div className=" text-gray-600 text-center ">
        <div>
          <p>Copyright &copy; Ocommerce Capital Indonesia</p>
        </div>
      </div>
    </div>
  );
}
