import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [showMaps, setShowMaps] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStart = () => {
    setStarted(true);
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

if (!started) {
  return (
    <div className="WelcomeScreen">
      <audio ref={audioRef} src="/Hastamifinal.mp3" loop />
      <div className="WelcomeContent">
        <p className="subtitulo">Tenemos el honor de invitarte a nuestra boda</p>
        <p className="nombres">Ramón & Liliana</p>
        <div className="envelope-wrapper" onClick={handleStart}>
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <p className="envelope-text">💌</p>
            </div>
          </div>
          <p className="tap-hint">Toca para abrir</p>
        </div>
      </div>
    </div>
  );
}  return (
    <>
      <div className='Parent'>
        
        <audio ref={audioRef} src="/Hastamifinal.mp3" loop />
        
        <div className="blur-blob"></div>
        <div className="blur-blob-2"></div>
        
        <div className='DIVImagen'>
          <img className='Anillos' src="fondoooo.jpeg" alt="Anillos" />
        </div>
        
        <div className='ContentCard'>
          <div className='Seccion'>
            <p>Te esperamos para celebrar nuestro amor</p>
          </div>

          <div className='BloquePadrinos'>
            <p className='NombrePadrino'>Ramón y Liliana</p>
          </div>          
          
          <button 
            className={`botonNombres ${isPlaying ? 'reproduciendo' : ''}`} 
            onClick={toggleMusic}
          >
            {isPlaying ? 'Pausar canción' : 'Escucha nuestra canción'}
          </button>
          
          <div id="countdown" className="contador">
            <div><span id="days">00</span><small>Días</small></div>
            <div><span id="hours">00</span><small>Horas</small></div>
            <div><span id="minutes">00</span><small>Min</small></div>
            <div><span id="seconds">00</span><small>Seg</small></div>
          </div>
          
          <div className='SeccionFamilia'>
            <div className='ContenedorPadres'>
              <div className='BloquePadres'>
                <p className='TituloRol'>Papás de la Novia</p>
                <p className='NombreFamiliar'>Adela Medina Reyes</p>
                <p className='NombreFamiliar'>Benito Ramos Vargas</p>
              </div>
              <div className='BloquePadres'>
                <p className='TituloRol'>Papás del Novio</p>
                <p className='NombreFamiliar'>María Olivia Castillo Plata</p>
                <p className='NombreFamiliar'>Casildo Espinoza Gómez</p>
              </div>
            </div>
            <div className='DivisorSutil'></div>
            <div className='BloquePadrinos'>
              <p className='TituloRol'>Padrinos de Velación</p>
              <p className='NombrePadrino'>Rubí Esmeralda Ramos Medina</p>
              <p className='NombrePadrino'> y </p>
              <p className='NombrePadrino'>Oscar Omar García Navarrete</p>
            </div>
            <div className='DivisorSutil'></div>
            <div className='BloquePadrinos'>
              <p className='TituloRol'>Padrinos del novio</p>
              <p className='NombrePadrino'>Esmeralda Yamilet Zepulveda Quevedo</p>
              <p className='NombrePadrino'> y </p>
              <p className='NombrePadrino'>Javier Borboa Montes</p>
            </div>
          </div>

          <div className='DIVImagen2'>
            <img className='CodigoQr' src="Vestido.png" alt="Traje" />
            <img className='CodigoQr' src="dressCode.png" alt="Vestido" />
            <p>Te esperamos con vestimenta formal</p>
          </div>
          
          <div className='SeccionItinerario'>
            <p className='TituloRol' style={{ fontSize: '1rem', marginBottom: '20px' }}>Nuestro Itinerario</p>
            <div className='Timeline'>
              <div className='TimelineItem'>
                <div className='Time'>18:00</div>
                <div className='Dot'></div>
                <div className='ContentTimeline'>
                  <p className='EventTitle'>Ceremonia</p>
                  <p className='EventDesc'>Parroquia de San Felipe de Jesús</p>
                </div>
              </div>
              <div className='TimelineItem'>
                <div className='Time'>19:45</div>
                <div className='Dot'></div>
                <div className='ContentTimeline'>
                  <p className='EventTitle'>Recepción</p>
                  <p className='EventDesc'>Jardín Rancho Campestre</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='ContenedorDireccion'>
            <button className='button' onClick={() => setShowMaps(!showMaps)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="svg-icon">
                <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#fff">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </g>
              </svg>
              <span className="lable">Ubicaciones</span>
            </button>
            {showMaps && (
              <div className='SubMenuMapas'>
                <a href="https://maps.app.goo.gl/1ceZTfJoWgFymBXp9?g_st=iw" target="_blank" className='SubBoton'>Misa</a>
                <a href="https://maps.app.goo.gl/6hL9J18fZykK76Xz9?g_st=iw" target="_blank" className='SubBoton'>Jardín</a>
              </div>
           <a href="https://maps.app.goo.gl/1ceZTfJoWgFymBXp9?g_st=iw" target="_blank" className='SubBoton'>Misa</a>
                <a href="https://maps.app.goo.gl/6hL9J18fZykK76Xz9?g_st=iw" target="_blank" className='SubBoton'>Jardín</a>    </div>
 92ebaac (Sobre de inicio y canción final)
            )}
          </div>
 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEm4944jIyXny2czKgdQrZHHT54ydrQvvgQPEXZRj36rsn5g/viewform" target="_blank" className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svg-icon">
              <g strokeWidth="2" strokeLinecap="round" stroke="#fff">
                <rect y="5" x="4" width="16" rx="2" height="16"></rect>
                <path d="m8 3v4"></path>
                <path d="m16 3v4"></path>
                <path d="m4 11h16"></path>
              </g>
            </svg>
            <span className="lable">Confirma Asistencia</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
