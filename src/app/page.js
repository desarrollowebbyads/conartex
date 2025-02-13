import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CONARTEX - Calidad y Confianza</title>
        <meta name="description" content="10 años transformando ideas en prendas de calidad." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="nav_bar">
        <div className="nav_bartitle">
          <h1>Conar<b>tex</b><b>S.A.S</b></h1>
        </div>
        <div className="nav_barredes">
          <Image
          src={"/Recurso_2.svg"}
          width={30} 
          height={30} 
          alt="Contartex_facebook" />
          <Image
          src={"/Recurso_3.svg"}
          width={30} 
          height={30} 
          alt="Contartex_instagram"/>
        </div>
      </header>

      <main className="body">
        <section className="Section1">
          <div className="section1_image">
            {/*<Image
            src={"/Recurso-21.webp"}
            
            width={700} 
            height={800} 
            alt="Contartex" /> */}
            <img src="/Recurso-21.webp" alt="banner1" className="section_images"/>
          </div> 

          <div className="section1_s">
              <div className="section1_info">
                <h2>Llevamos una decada en el mercado</h2>
                <p className="section1_text1">confeccionando calidad y confianza</p>
              </div>
              <div className="section1_info2">
                <p className="section1_text2">10 años transformando ideas en prendas de calidad.Somos expertos en confección de ropa en tejido de punto para hombres, mujeres y niños. </p>
                <p className="section1_text3"><b>Nuestro compromiso </b>con grandes marcas nos ha convertido en aliados confiables para ofrecer paquetes completos de producción.</p>
              </div>
          </div>
          
        </section>
        <section className="section_tex">
        
          <img
            src="/Recurso-22.webp"
            className="section_texti"
            alt="Contartex"
          />
        </section>

        <section className="section2">
        <img
          src={"/Recurso_4.svg"}
          className="section_icons1"
          alt="Contartex_icon1"/>
          <img
          src={"/Recurso_5.svg"}
          className="section_icons1"
          alt="Contartex_icon2"/>
          <img
          src={"/Recurso_6.svg"}
          className="section_icons1"
          alt="Contartex_icon3"/>
          <p>100%</p>
          <h3 className="section2_">Hecho en Mde.</h3>
          <img
          src={"/Recurso_7.svg"}
          className="section_icons2"
          alt="Contartex_barras"/>
        </section>

      
        <section className="section3">
          <div className="section3_efi">
          <h3 >Eficiencia</h3>
          <p >Trabajamos con procesos optimizados para garantizar resultados.</p></div>
          <div className="section3_cali">
          <h3 >Calidad Inigualable</h3>
          <p>Cada prenda pasa por un estricto control para superar tus expectativas.</p>
          </div>
          <div className="section_entre">
          <h3 >Entregas a Tiempo</h3>
          <p>Cumplimos siempre con los plazos acordados.</p></div>
        </section>
        <section className="sectionimage">
          <img
          src="/Recurso-24.webp"
          className="image_banner2"
          alt="Contartex_barras"/>
        </section>

        <section className="section4">
          <div className="section4_ns">
               <img
                  src="/Recurso_8.svg"
                  className="imagen_molde"
                  alt="Contartex_barras"/>
                <h2>NUESTROS SERVICIOS</h2>
          </div>
          <div className="section4_text">
            <p>Nos especializamos en la confección de prendas en tejido de punto, ofreciendo calidad, precisión y durabilidad en cada diseño. </p>
            <p>Nuestro enfoque está en transformar cada hilo en piezas cómodas, versátiles y de alto rendimiento, adaptándonos a las necesidades del mercado con excelencia y compromiso.</p>
          </div>
        </section>
      </main>

      <footer>
  
  <div className="footer-section footer-left">
    <h2>Conartex <span>S.A.S</span></h2>
    <p>Copyright © 2025</p>
    <p>Conartex S.A.S.</p>
    <p>Todos los derechos reservados.</p>
  </div>

  
  <div className="footer-section footer-center">
    <div className="footer-icons">
      <img src="/Recurso-2.svg" className="icons_redesfo" alt="Facebook" />
      <img src="/Recurso-3.svg" className="icons_redesfo" alt="Instagram" />
    </div>
    <h3>Contáctanos</h3>
    <p>Carrera 50 # 25-127</p>
    <p>4° piso</p>
    <p>Medellín, Colombia.</p>
  </div>

  
  <div className="footer-section footer-right">
    <p>conartexsas@hotmail.com</p>
  </div>
</footer>
    </div>
  );

  }
