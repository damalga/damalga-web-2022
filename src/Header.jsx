import hello from './assets/svgs/hello.svg'

function Header() {

  return (
    <header>
      <section className='first'>
        <div className='hello'>
          <h1>
            <img src={hello} alt="hello friend"/>
          </h1>
        </div>
        <div className='intro'>
          <h2>WHO I AM</h2>
          <p>I'm Damalga (that's an acronym of my full name). Hailing from Madrid. I have a deep affinity for crafting simple and functional designs, with a penchant for removing the unnecessary to produce smart code and clean aesthetics. My commitment to honing my design and development skills is well ingrained and I thrive on embracing new experiences.</p>
        </div>
      </section>
      <section className='second'>
        <div className='name'>
          <h3>GRAPHIC DESIGNER AND CREATIVE WEB DEVELOPER</h3>
        </div>
      </section>
    </header>
  )
}

export default Header