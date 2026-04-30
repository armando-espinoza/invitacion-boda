import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const pases = {
  "Mer5T": 2,
  "Bod8X": 3,
  "Fst2K": 4,
};

function pad2(n) {
  return String(n).padStart(2, '0');
}

function splitMs(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function App() {
  const [showMaps, setShowMaps] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const claveUrl = window.location.hash.replace('#', '') || null;
  const invitados = claveUrl ? (pases[claveUrl] ?? null) : null;

  const targetDate = useMemo(() => new Date(2026, 10, 28, 18, 0, 0), []);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diffMs = targetDate.getTime() - now.getTime();
  const time = splitMs(Math.max(0, diffMs));
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
        <div className="WelcomePaper" role="button" tabIndex={0} onClick={handleStart} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleStart()}>
          <p className="TextoInicio">Por que el amor merece ser celebrado!!!</p>
          <p className="Nombre">Liliana y Ramon</p>
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
  }



    return (
    <div className='Parent'>
      <audio ref={audioRef} src="/Hastamifinal.mp3" loop autoPlay={isPlaying} />
      
      <div className="blur-blob"></div>
      <div className="blur-blob-2"></div>

      <p className='FraseSuperior'>NOS DIRÍAMOS QUE SÍ UN MILLÓN DE VECES, ¡ACOMPAÑANOS A CELEBRAR LA PRIMERA!</p>
      <p className="Nombre">Liliana y Ramon</p>

      <div className='DIVImagen2'>
        <img className='Anillos' src="esposos.jpeg" alt="Nuestra Foto" />
      </div>

      <div className='ContentCard'>
        <div className='Seccion'>
          <p className='SubtituloSeccion'>Nuestra Boda</p>
          <p className='TextoSubtitulo'>Lo que empezó como una locura se convirtió en lo mejor de nuestras vidas.</p>
        </div>

        <div classname="separadorfloral"><span classname="simbolo"></span></div>

        <div className='Seccion'>
          <p className='SubtituloSeccion'>Save the Date</p>
          <p className='TextoSubtitulo'>28 de Noviembre, 2026</p>
          
          <div id="countdown">
            <div><span>{pad2(time.days)}</span><small>Días</small></div>
            <div><span>{pad2(time.hours)}</span><small>Hrs</small></div>
            <div><span>{pad2(time.minutes)}</span><small>Min</small></div>
            <div><span>{pad2(time.seconds)}</span><small>Seg</small></div>
          </div>
        </div>

        <div className="SeparadorFloral"><span className="Simbolo"></span></div>

        <div className='Seccion'>
          <p className='SubtituloSeccion'>Nuestros Padres</p>
          <div className='ContenedorPadres'>
            <div className='BloquePadres'>
              <p className='TituloRol'>Novia</p>
              <p className='NombreFamiliar'>Adela Medina Reyes</p>
              <p className='NombreFamiliar'>Benito Ramos Vargas</p>
            </div>
          </div>
        </div>
         <div className='Seccion'>
           <p className='TituloRol'> Novio </p>
           <p className='NombreFamiliar'> Maria Olivia Castillo Plata <span className="cruz">†</span></p>
           <p className='NombreFamiliar'> Casildo Espinoza Gómez </p>
         </div>


        <div className='Seccion'>
          <p className='SubtituloSeccion'>Padrinos de Velación</p>
          <div className='ContenedorPadres'>
            <div className='BloquePadres'>
              <p className='TituloRol'> Novia</p>
              <p className='NombreFamiliar'> Rubí Esmeralda Ramos Medina </p>
              <p className='NombreFamiliar'>Oscar Omar García Navarrete</p>
            </div>
          </div>
        </div>


        <div className='Seccion'>
          <p className='TituloRol'> Novio </p>
          <p className='NombreFamiliar'> Esmeralda Yamilet Sepulveda Quedvedo </p>
          <p className='NombreFamiliar'> Javier Borboa Montes </p>
        </div>

        <div className="SeparadorFloral"><span className="Simbolo"></span></div>

        <div className='SeccionItinerario'>
          <p className='SubtituloSeccion'>Itinerario</p>
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

          <div className='ContenedorDireccion'>
            <button className='button' onClick={() => setShowMaps(!showMaps)}>
               <span className="lable">Ver Ubicaciones</span>
            </button>
            {showMaps && (
              <div className='SubMenuMapas'>
                <a href="https://maps.app.goo.gl/1ceZTfJoWgFymBXp9?g_st=iw" target="_blank" target="_blank" className='SubBoton' rel="noreferrer">Misa</a>
                <a href="https://maps.app.goo.gl/6hL9J18fZykK76Xz9?g_st=iw" target="_blank" target="_blank" className='SubBoton' rel="noreferrer">Jardín</a>
              </div>
            )}
          </div>
        </div>

        <div className="SeparadorFloral"><span className="Simbolo"></span></div>

        <div className='Seccion'>
          <p className='SubtituloSeccion'>Código de Vestimenta</p>
          <p className='TextoSubtitulo'>Formal</p>
          <div className='DIVImagen2'>
            <img className='CodigoQr' src="Vestido.png" alt="Icono Vestimenta" />
            <img className='CodigoQr' src="dressCode.png" alt="Icono Traje" />
          </div>
          <p className='TextoSubtitulo' style={{fontSize: '0.7rem', color: '#8d5d6a'}}>NOS RESERVAMOS EL BLANCO PARA LA NOVIA</p>
        </div>


        <div className="SeparadorFloral"><span className="Simbolo"></span></div>
        <div className='Seccion'>
           <p className='TextoSubtitulo'>Amamos a sus pequeños, pero queremos que en este día sólo tengan que preocuparse por pasarla increíble.</p>
        </div>

        <div className='Seccion'> 
            <p className='TextoSubtitulo'> Solo adultos </p>
        </div>


        <div className='SeccionPase'>
          <div className='TarjetaPase'>
            <p className='TituloRol'>🎟 Pase de Invitado</p>
            <p className='NombreFamiliar'>
              {(!invitados || invitados === 1) 
                ? "Este pase es válido para 1 persona" 
                : `Este pase es válido para ${invitados} personas`}
            </p>
          </div>
        </div>


        <a href="https://docs.google.com/forms/d/e/1FAIpQLSebFGFqqRE9t3XssG7lhhkHuYL3QswdFmZgIFnJ0-p4KyWLJA/viewform?usp=preview" target="_blank" className="button" rel="noreferrer">
          <span className="lable">Confirmar Asistencia</span>
        </a>

        <p className='TextoSubtitulo' style={{marginTop: '20px'}}>
          Tu presencia es lo más importante, pero si deseas hacernos un presente, agradeceríamos que fuera en efectivo.
        </p>
      </div>
    </div>
  );
}

export default App;
