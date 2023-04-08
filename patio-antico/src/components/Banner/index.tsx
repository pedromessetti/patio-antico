//Styles import
import style from './Banner.module.scss'
import styleTema from 'styles/Tema.module.scss'

//React Router Components import
import { Link, Outlet } from 'react-router-dom'

//Create and export component Banner
export default function Banner() {
  return (
    <>
      <div className={style.banner}>
        <div className={style.banner__texto}>
          A melhor massa está aqui
        </div>
        <Link to='/reservas' className={style.banner__btn}>
          <span>Faça a sua reserva</span>
        </Link>
      </div>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  )
}
