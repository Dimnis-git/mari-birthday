import { useEffect } from 'react';
import { useCopyToClipboard } from 'usehooks-ts'

import AudioTheme from './assets/audio/HarryPotter-music-theme.mp3';

//Assets
import HarryPotter from './assets/images/harry-potter-jumbotron.jpg';
import Jumbotron2 from './assets/images/jumbotron-2.jpg';
import Jumbotron3 from './assets/images/jumbotron-3.jpg';
import Jumbotron4 from './assets/images/jumbotron-4.jpg';
import Jumbotron5 from './assets/images/jumbotron-5.jpg';
import Qrcode from './assets/images/qrcode.jpeg';

//Icons
import { BsFillGiftFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiClothes } from 'react-icons/gi';
import { BiCheckCircle, BiUpArrowCircle } from 'react-icons/bi';
import { MdContentCopy } from 'react-icons/md';

export default function App() {
  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    var audio = new Audio(AudioTheme)
    audio.loop = true;
    audio.play();
  }, []);

  const scrollToView = (element : string) => document.getElementById(element)?.scrollIntoView({block: 'center'})

  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-auto'>
      <button
        onClick={() => scrollToView('jumbotron1')}
        className='z-10 absolute bottom-2 md:right-5 lg:right-5 max-sm:right-2 button-rounded from-teal-500 to-teal-700'>
        <BiUpArrowCircle />
      </button>

      <div id='jumbotron1' className='hero min-h-screen snap-center' style={{ backgroundImage: `url('${HarryPotter}')` }}>
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-10'>
            <h1 className='title'>Bem-Vindo!</h1>
            <main>
              <h2 className='sub-title'>A Família Melo tem a honra de convidá-lo para a festa de 15 anos da nossa debutante Marianne Lima de Melo 🕯️⚡🏰</h2>
              <h3 className='sm:text-xl lg:text-3xl font-light mt-5'>Clique nos botões abaixo para mais informações</h3>
            </main>
            <footer className='flex justify-center lg:gap-20 gap-2'>
              <div className='button-group'>
                <button
                  onClick={() => scrollToView('jumbotron2')}
                  className='button-rounded from-gryffindor to-red-600 hover:to-red-700'>
                  <BsFillGiftFill />
                </button>
                <span className='button-label'>Presentes</span>
              </div>
              <div className='button-group'>
                <button
                  onClick={() => scrollToView('jumbotron3')}
                  className='button-rounded from-ravenclaw to-cyan-600 hover:to-cyan-700'>
                  <GiClothes />
                </button>
                <span className='button-label'>Dresscode</span>
              </div>
              <div className='button-group'>
                <button
                  onClick={() => scrollToView('jumbotron4')}
                  className='button-rounded from-slytherin to-green-700 hover:to-green-900'>
                  <GoLocation />
                </button>
                <span className='button-label'>Local</span>
              </div>
              <div className='button-group'>
                <button
                  onClick={() => scrollToView('jumbotron5')}
                  className='button-rounded from-hufflepuff to-yellow-500 hover:to-yellow-600'>
                  <BiCheckCircle className=' text-gray-700' />
                </button>
                <span className='button-label'>Confirmar</span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div id='jumbotron2' className='jumbotron snap-center' style={{ backgroundImage: `url('${Jumbotron2}')` }}>
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-10'>
            <h1 className='title'>Presentes</h1>
            <main>
              <p className='sub-title 2xl:text-5xl mb-4'>Você pode começar a fazer magia desde já!</p>
              <p className='sm:text-sm md:text-sm lg:text-2xl font-semibold'>Abrindo o app do seu banco de preferência, por meio de um PIX você pode garantir o presente da Mari 👑</p>
              <div className="flex flex-col mt-4">
                {!value
                  ?
                    <button className='btn bg-slate-600' onClick={() => copy('50657204870')}>
                      COPIAR CHAVE PIX CPF
                      <MdContentCopy className='ml-2'/>
                    </button>
                  :
                    <button className='btn bg-green-700 hover:bg-green-700' onClick={() => copy('50657204870')}>
                      COPIADO
                      <BiCheckCircle className='ml-2'/>
                    </button>
                }
                <div className=' max-sm:hidden  lg:visible'>
                  <div className="divider font-semibold">OU</div>
                  <div className='flex justify-center mb-10'>
                    <img src={Qrcode} alt='QRCode' />
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <p className='lg:text-2xl font-semibold'>Mas se você ainda preferir trazer seu presente no modo convencional, será muito bem recebido pela aniversariante 🤗</p>
            </footer>
          </div>
        </div>
      </div>

      <div id='jumbotron3' className='jumbotron snap-center' style={{ backgroundImage: `url('${Jumbotron3}')` }}>
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-10'>
            <h1 className='title'>Dresscode</h1>
            <main>
              <p className='sub-title 2xl:text-5xl mb-4'>Escolha uma das cores para o seu traje esporte fino!</p>
              <p className='sm:text-sm md:text-sm lg:text-2xl font-semibold'>É muito importante para que você entre no clima da festa 💃🕺</p>
            </main>
            <footer className='flex justify-evenly glass rounded-2xl p-2'>
              <div className='color-pallete bg-gryffindor'></div>
              <div className='color-pallete bg-ravenclaw'></div>
              <div className='color-pallete bg-hufflepuff'></div>
              <div className='color-pallete bg-yellow-900'></div>
              <div className='color-pallete bg-slate-600'></div>
              <div className='color-pallete bg-black'></div>
            </footer>
          </div>
        </div>
      </div>

      <div id='jumbotron4' className='jumbotron snap-center' style={{ backgroundImage: `url('${Jumbotron4}')` }}>
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-10'>
            <h1 className='title'>Local</h1>
            <main>
              <p className='sub-title 2xl:text-5xl mb-4'>Nosso evento acontecerá no dia 11 de março no Espaço Aviv com o início as 18hrs ⌚️</p>
              <p className='sm:text-sm md:text-sm lg:text-2xl font-semibold'>Av. Dona Cherubina Viana, 669 - Granja Viana, Cotia - SP, 06708-360</p>
            </main>
            <footer className='flex justify-center'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3450454258145!2d-46.84515174833049!3d-23.591955268535116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaabd258b76b9%3A0x567a0fcd355051cf!2sEspa%C3%A7o%20Aviv%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1673555627458!5m2!1spt-BR!2sbr' width='300' height='300' loading='lazy'></iframe>
            </footer>
          </div>
        </div>
      </div>

      <div id='jumbotron5' className='jumbotron snap-center' style={{ backgroundImage: `url('${Jumbotron5}')` }}>
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-10'>
            <h1 className='title'>Confirmar</h1>
            <main className='flex justify-center'>
              <iframe height='500px' className='sm:w-[300px] md:w-[500px] lg:w-[500px]' src='https://docs.google.com/forms/d/e/1FAIpQLScSoXAZLVlhepll4BcWu6TlaqOpfVa4aY55MPrr4AUAu8Z0Sg/viewform?embedded=true'>Carregando…</iframe>
            </main>
          </div>
        </div>
      </div>

    </div>
  )
}
