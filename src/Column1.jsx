import face from './assets/svgs/face.svg'
import face2 from './assets/svgs/face2.svg'
import vocento from './assets/svgs/vocento.svg'
import cheil from './assets/svgs/cheil.svg'
import amaris from './assets/svgs/amaris.svg'
import nateevo from './assets/svgs/nateevo.svg'
import ging from './assets/svgs/ging.svg'

function Column1() {

  return (

      <section className='col-1'>
        <img src={face2} className="face" alt="face vector"/>

        <div className='edu topic'>
          <h4>EDUCATION</h4>
          <div className='degree school'>
            <p><b>Graphic Design Degree</b> in the <b>Escuela Superior de Diseño de Madrid</b> (ESDM).<br></br>[2012 --- 2017]</p>
          </div>
          <div className='erasmus school'>
            <p><b>Erasmus+</b> in <b>Aalto University</b> school of arts, design and achitecture (Finland).<br></br> [2015 -- 5 months (1st semester)]</p>
          </div>
          <div className='master school'>
            <p><b>300h on-site course + final project</b> in web design and development. Escuela CICE.<br></br>[2016 -- 6 months]</p>
          </div>
          <div className='course start'>
            <p className='extra-info'>Then I started to work and<br></br>
            I realize that I can learn more<br></br>
            in a job than in a course so...<br></br>
            </p>
          </div>
          <div className='course school'>
            <p><b>50h on-site course</b> in Javascript.<br></br>
            Asociación Española de <br></br>Programadores Informáticos<br></br>[2019 - 2 months]
            </p>
          </div>
        </div>

        <div className='work topic'>
          <h4>WORK EXPERIENCE</h4>
          <div className='ging job'>
            <img src={ging} alt="ging logo" />
            <p>Research scholarship,<br></br> <b>GING</b> (ETSIT / UPM).<br></br> (2016 - 2017).</p>
          </div>
          <div className='nateevo job'>
            <img src={nateevo} alt="nateevo logo" />
            <p>Web designer (Front-end),<br></br> <b>Nateevo</b> (Vass Group).<br></br> (2018 - 5 months).</p>
          </div>
          <div className='amaris job'>
            <img src={amaris} alt="amaris logo" />
            <p>Web designer (Front-end),<br></br> <b>Amaris</b>.<br></br> (2018 - 6 months).</p>
          </div>
          <div className='cheil job'>
            <img src={cheil} alt="cheil logo" />
            <p>Digital Graphic Designer,<br></br> <b>Cheil Spain</b>.<br></br> (2020 - 2022).</p>
          </div>
          <div className='vocento job'>
            <img src={vocento} alt="vocento logo" />
            <p>Web designer (Front-end),<br></br> <b>Vocento</b>.<br></br> (2023 - current).</p>
          </div>
        </div>
      </section>

  )
}

export default Column1