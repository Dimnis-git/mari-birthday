import { useEffect } from 'react';
import HarryPotter from './assets/images/harry-potter-jumbotron.jpg';
import Jumbotron2 from './assets/images/jumbotron-2.jpg';
import Jumbotron3 from './assets/images/jumbotron-3.jpg';
import Jumbotron4 from './assets/images/jumbotron-4.jpg';
import Jumbotron5 from './assets/images/jumbotron-5.jpg';
import Qrcode from './assets/images/qrcode.jpeg';

import AudioTheme from './assets/audio/HarryPotter-music-theme.mp3';

import { BsFillGiftFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineCheck } from 'react-icons/ai';

export default function App() {

  // useEffect(() => {
  //   var audio = new Audio(AudioTheme)
  //   audio.loop = true;
  //   audio.play();
  // }, []);

  return (
    <div className='snap-both'>
      <div className="hero min-h-screen snap-start" style={{ backgroundImage: `url("${HarryPotter}")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col">
          <div>
            <h1 className="mb-2 text-[250px] font-harry drop-shadow-">Bem Vindos</h1>
            <h2 className='mb-20 text-5xl font-afterglow'>A Família Melo tem a honra de convidá-los para a festa de 15 anos da nossa debutante Marianne Lima de Melo 🕯️⚡🏰</h2>
            <p className='text-4xl font-light'>Clique nos botões abaixo para mais informações</p>
          </div>
          <div className='mt-10 flex justify-between w-7/12'>
            <div className='flex flex-col text-5xl items-center'>
              <button
                onClick={() => document.getElementById('jumbotron2')?.scrollIntoView({block: "center"})}
                className='btn btn-lg w-24 h-24 rounded-full bg-gradient-to-br from-gryffindor to-red-600 hover:to-red-700 border-none'>
                <BsFillGiftFill size={38} />
              </button>
              <span className=' font-harry'>Presentes</span>
            </div>
            <div className='flex flex-col text-5xl items-center'>
              <button
                onClick={() => document.getElementById('jumbotron3')?.scrollIntoView({block: "center"})}
                className='btn btn-lg w-24 h-24 rounded-full bg-gradient-to-br from-ravenclaw to-cyan-600 hover:to-cyan-700  border-none'>
                <GiClothes size={38} />
              </button>
              <span className=' font-harry'>Dresscode</span>
            </div>
            <div className='flex flex-col text-5xl items-center'>
              <button
                onClick={() => document.getElementById('jumbotron4')?.scrollIntoView({block: "center"})}
                className='btn btn-lg w-24 h-24 rounded-full bg-gradient-to-br from-slytherin to-green-700 hover:to-green-900 border-none'>
                <GoLocation size={38} />
              </button>
              <span className=' font-harry'>Local</span>
            </div>
            <div className='flex flex-col text-5xl items-center'>
              <button
                onClick={() => document.getElementById('jumbotron5')?.scrollIntoView({block: "center"})}
                className='btn btn-lg w-24 h-24 rounded-full bg-gradient-to-br from-hufflepuff to-yellow-500 hover:to-yellow-600 border-none'>
                <AiOutlineCheck size={38} />
              </button>
              <span className=' font-harry'>Confirmar</span>
            </div>
          </div>
        </div>
      </div>
      <div id='jumbotron2' className="hero min-h-screen bg-base-200 snap-start" style={{ backgroundImage: `url("${Jumbotron2}")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className='text-9xl font-harry mb-20'>Presentes</h1>
            <h2 className="text-6xl font-afterglow mb-10">Você pode começar a fazer magia desde já!</h2>
            <h3 className='text-5xl font-semibold mb-10'>Abrindo o app do seu banco de preferência, por meio de um PIX você pode garantir o presente da Mari 👑</h3>
            <h4 className='text-3xl font-semibold mb-10'>Basta apontar a câmera do seu celular para o QR Code abaixo:</h4>
            <div className='flex justify-center mb-10'>
              <img src={Qrcode} alt="QRCode" />
            </div>
            <p className='text-3xl font-semibold'>Mas se você ainda preferir trazer seu presente no modo convencional, será muito bem recebido pela aniversariante 🤗</p>
          </div>
        </div>
      </div>
      <div id='jumbotron3' className="hero min-h-screen bg-base-200 snap-start" style={{ backgroundImage: `url("${Jumbotron3}")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className='text-9xl font-harry mb-20'>Dresscode</h1>
            <h2 className='text-6xl font-afterglow mb-10'>Escolha uma das cores para o seu traje...</h2>
            <h3 className='text-5xl font-afterglow mb-20'>É muito importante para que você entre no clima da festa</h3>
            <div className='flex justify-evenly backdrop-blur-sm p-4 rounded-full'>
              <div className='bg-gryffindor w-28 h-28 rounded-full'></div>
              <div className='bg-ravenclaw w-28 h-28 rounded-full'></div>
              <div className='bg-hufflepuff w-28 h-28 rounded-full'></div>
              <div className='bg-yellow-900 w-28 h-28 rounded-full'></div>
              <div className='bg-slate-600 w-28 h-28 rounded-full'></div>
              <div className='bg-black w-28 h-28 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
      <div id='jumbotron4' className="hero min-h-screen bg-base-200 snap-start" style={{ backgroundImage: `url("${Jumbotron4}")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className='text-9xl font-harry mb-20'>Local</h1>
            <h2 className='text-5xl font-afterglow'>Nosso evento acontecerá no dia 11 de março - Espaço Aviv</h2>
            <h3 className='text-5xl font-afterglow mb-10'>Início: 18hrs</h3>
            <h3 className='text-4xl font-afterglow mb-10'>Av. Dona Cherubina Viana, 669 - Granja Viana, Cotia - SP, 06708-360</h3>
            <div className='flex justify-center'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3450454258145!2d-46.84515174833049!3d-23.591955268535116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaabd258b76b9%3A0x567a0fcd355051cf!2sEspa%C3%A7o%20Aviv%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1673555627458!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div id='jumbotron5' className="hero min-h-screen bg-base-200 snap-start" style={{ backgroundImage: `url("${Jumbotron5}")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=' pt-52'>
            <h1 className='text-9xl font-harry'>Confirmar</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSoXAZLVlhepll4BcWu6TlaqOpfVa4aY55MPrr4AUAu8Z0Sg/viewform?embedded=true" width="640" height="415" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
