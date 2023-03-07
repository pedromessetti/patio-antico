//Import of styles
import style from './Footer.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Import of the icons
import { RiCopyrightLine } from 'react-icons/ri'
import { MdEmail, MdPhone, MdLocationOn, MdCalendarToday } from 'react-icons/md'
import { SiUbereats } from 'react-icons/si'
import { VscDash } from 'react-icons/vsc'
import { HiClock } from 'react-icons/hi'
import { FaFacebookSquare, FaInstagramSquare, FaTripadvisor } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footer__top}>
        <div className={style.contacto}>
          <h3 className={styleTema.titulo}>Contactos</h3>
          <a href='https://www.ubereats.com/store/patio-antico-paco-de-arcos/yMVo5Dj3TIuxyVIU7FJqxg?utm_medium=cpc-localads&utm_source=google&utm_campaign=CM2143835-search-nonbrand-google-localads_140_-99_PT-National_e_all_acq_cpc_pt_PPA_Exact_0_f%3Aaggregator_serp%3Afeature_id_fprint%3D10073525846132700720_kwd-1053772177571_649714450944_146734436619__c&campaign_id=14249952190&adg_id=146734436619&fi_id=&match=&net=g&dev=c&dev_m=&ad_id=649714450944&cre=649714450944&kwid=kwd-1053772177571&kw=f%3Aaggregator_serp%3Afeature_id_fprint%3D10073525846132700720&placement=&tar=&&&&&gclsrc=aw.ds&gclid=CjwKCAiAu5agBhBzEiwAdiR5tLsQ5wlq2CMrc46kUkC00P2u07TNq9Hz1z0QUVAVnz4xtdF-Z1OV6hoCrIEQAvD_BwE' target='_blank' rel="noopener noreferrer"> 
            <SiUbereats className={style.icon__ubereats}/> Faça seu pedido com Uber Eats
          </a>
          <a href='mailto:patioantico@gmail.com' target='_blank' rel="noopener noreferrer">
            <MdEmail className={style.icon__mail}/>patioantico@gmail.com
          </a>
          <a href='tel:+351214428924'>
            <MdPhone className={style.icon__tel}/>+351 214 428 924
          </a>
        </div>
        <div className={style.infos}>
          <h3 className={styleTema.titulo}>Informações úteis</h3>
          <a href="https://www.google.com.br/maps/place/P%C3%A1tio+Antico/@38.6958969,-9.2930392,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ec94e0b82ecdd:0x8bcc5a629e74b630!8m2!3d38.6958969!4d-9.2908505!16s%2Fg%2F1tdb0z8y" target="_blank" rel="noopener noreferrer">
            <MdLocationOn className={style.icon__location}/>Praça República n°6, Paço de Arcos, Oeiras
          </a>
          <p><MdCalendarToday />Aberto todos os dias</p>
          <p><HiClock />Almoço: 12:30 às 15:30<VscDash />Jantar: 19:30 às 22:30</p>
        </div>
        <div className={style.siga}>
          <h3 className={styleTema.titulo}>Redes</h3>
          <a href='https://www.facebook.com/PatioAntico/?locale=pt_PT' target='_blank' rel="noopener noreferrer">
            <FaFacebookSquare className={style.icon__facebook}/> Facebook
          </a>
          <a href='https://www.instagram.com/patioantico/' target='_blank' rel="noopener noreferrer">
            <FaInstagramSquare className={style.icon__instagram}/>Instagram
          </a>
          <a href="https://www.tripadvisor.pt/Restaurant_Review-g1212457-d4554050-Reviews-Patio_Antico_Restaurante_Italiano-Paco_de_Arcos_Oeiras_Lisbon_District_Central_P.html" target="_blank" rel="noopener noreferrer">
            <FaTripadvisor className={style.icon__tripadvisor}/>TripAdvisor
          </a>
        </div>
      </section>
      <section className={style.footer__bottom}>
        <p>Pátio Antico<VscDash />Todos os direitos reservados<RiCopyrightLine />2023</p>
        <p>Developed by Pedro Messetti</p>
      </section>
    </footer>
  )
}
