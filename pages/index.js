import Image from 'next/image';
import Logo2 from '../styles/logo-2.svg';
import Logo3 from '../styles/abisKerja.svg';
import Img1 from '../styles/img-1.svg';
import fb from '../styles/img-fb.svg';
import ig from '../styles/img-ig.svg';
import yb from '../styles/img-yt.svg';
import ln from '../styles/img-in.svg';
import em from '../styles/img-mail.svg';
import wa from '../styles/img-wa.svg';

import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState('topikBaru');

  return (
    <div className=''>
      {/* Navbar */}
      <div className='container mx-auto'>
        <div className='pl-4'>
          <Image src={Logo2} alt='logo ociskill' width={150} height={70} />
        </div>
      </div>
      {/* Hero */}
      <div className='container mx-auto bg-amber-400 h-[380px] grid grid-cols-2'>
        <div className='pt-16 pl-20'>
          <div className='flex justify-start items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-[30px] h-[30px] bg-white rounded p-1'
            >
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                clipRule='evenodd'
              />
            </svg>
            <p className='text-lg font-semibold ml-4'>
              Pusat edukasi bisnis Ocistok by HabisKerja
            </p>
          </div>

          <div className='text-4xl font-semibold leading-normal mt-6'>
            <p>
              Saatnya
              <span className='text-[#FC6D1D] '> #JualanTanpaBatas</span>
            </p>
            <p>Update Skill Bisnismu</p>
            <p>Bersama OCI- skill Academy</p>
          </div>
        </div>
        <div className=''>
          <div className='float-right mr-24'>
            <Image src={Logo3} alt='abiskerja' width={236} height={80} />
          </div>
          <div className='mt-[82px] ml-[120px]'>
            <Image
              src={Img1}
              alt='logo ociskill'
              width={300}
              height={290}
              className='ml-[300px]'
            />
          </div>
        </div>
      </div>
      {/* video */}
      <div className='container mx-auto mt-12'>
        {/* judul */}
        <div className='text-center'>
          <span>
            <h1 className='text-[#FC6D1D] font-bold text-4xl'>
              Jelajahi Skill Baru
            </h1>
            <p className='font-medium text-lg mt-2'>
              Berbagai macam pilihan topik untuk meningkatkan skill bisnismu
            </p>
          </span>
        </div>

        {/* button */}
        <div className='flex flex-wrap justify-center items-center gap-9 mt-8 '>
          <p
            type='button'
            onClick={() => setActive('topikBaru')}
            className={`${
              active === 'topikBaru' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Topik Baru</a>
          </p>
          <p
            type='button'
            onClick={() => setActive('semuaTopik')}
            className={`${
              active === 'semuaTopik' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Semua Topik</a>
          </p>
          <p
            type='button'
            onClick={() => setActive('mpOptimize')}
            className={`${
              active === 'mpOptimize' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Marketplace Optimization</a>
          </p>
          <p
            type='button'
            onClick={() => setActive('socmedMarketing')}
            className={`${
              active === 'socmedMarketing' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Social Media Marketing</a>
          </p>
          <p
            type='button'
            onClick={() => setActive('Branding')}
            className={`${
              active === 'Branding' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Branding</a>
          </p>
          <p
            type='button'
            onClick={() => setActive('digitalMarketing')}
            className={`${
              active === 'digitalMarketing' ? 'bg-orange-400 text-white' : ''
            } px-6 py-1 rounded-md text-md border font-medium border-black`}
          >
            <a>Digital Marketing</a>
          </p>
        </div>

        {/* video */}
        <div className='flex flex-wrap justify-center gap-8 mt-[40px]'>
          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>

          <div className='flex-shrink-0 w-[20rem]'>
            <div className='w-[20rem] h-[11rem] border border-black'></div>
            <p className='text-2xl font-extrabold mt-2'>
              Belajar Tentang Hal Baru Dengan Ociskill
            </p>
            <p className='text-xl font-medium mt-1 text-gray-400'>
              Belajar tentang hal baru dengan ociskill
            </p>
          </div>
        </div>
      </div>

      {/* footer atas */}
      <div className='container mx-auto mt-12 bg-amber-400 rounded-xl text-center h-[320px] text-black'>
        <div>
          <h1 className='text-4xl pt-12 font-bold'>
            Pengen belajar lebih mendalam?
          </h1>

          <p className='px-36 mt-4 text-xl font-semibold leading-relaxed'>
            Kunjungi Handbook HabisKerja untuk mendapatkan skill bisnis di-era
            digital yang lebih <br /> lengkap dengan ahlinya!
          </p>
        </div>
        <button
          type='button'
          className='px-9 py-3 bg-black/70 hover:bg-black/80 text-white text-2xl font-medium rounded-md text-center mt-12'
        >
          Lihat Handbook
        </button>
      </div>
      {/* footer terngah */}
      <div className='container mx-auto bg-amber-400 text-white py-2 mt-[21px]'>
        <div className='flex space-x-[178px] pt-[44px]'>
          <div>
            <Image
              src={Logo2}
              alt='logo ociskill'
              width={250}
              height={70}
              className='mt-[44px]'
            />
          </div>

          <div>
            <ul>
              <li>
                <b>AKUN SAYA</b>
              </li>
              <li className='mt-[20px]'>Keranjang</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <b>TENTANG KAMI</b>
              </li>
              <li className='mt-[20px]'>Syarat & Ketentuan</li>
              <li>Kebijakan Refund</li>
              <li>Kebijakan Privasi</li>
              <li>Tentang Ocistok</li>
              <li>Blogs</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <b>LOKASI KAMI</b>
              </li>
              <li className='mt-[20px]'>
                Jalan Daan Mogot no.73, Tanjung Duren Utara, Grogol <br></br>{' '}
                petamburan, jakarta barat, 11470
              </li>
              <li>021-50867088</li>
              <li>info@ocistok.com</li>
            </ul>
          </div>
        </div>

        <div>
          <div className='text-center mt-[50px]'>
            <p>
              <b>FOLLOW AKUN MEDIA SOSIAL KITA</b>
            </p>
          </div>

          <div className='flex justify-center gap-8'>
            <div>
              <Image src={wa} alt='whatsaap' width={45} height={70} />
            </div>

            <div>
              <Image src={fb} alt='logo ociskill' width={45} height={70} />
            </div>

            <div>
              <Image src={ig} alt='logo ociskill' width={45} height={70} />
            </div>

            <div>
              <Image src={em} alt='logo ociskill' width={45} height={70} />
            </div>

            <div>
              <Image src={yb} alt='logo ociskill' width={45} height={70} />
            </div>

            <div>
              <Image src={ln} alt='logo ociskill' width={45} height={70} />
            </div>
          </div>

          <div className='text-center text-lg my-6'>
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
      <div className='text-gray-600 text-center my-5'>
        <div>
          <p>Copyright &copy; Ocommerce Capital Indonesia</p>
        </div>
      </div>
    </div>
  );
}
