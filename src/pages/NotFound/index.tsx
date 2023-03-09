//React Router Hook import
import { useNavigate } from 'react-router-dom'

//Styles import
import style from './NotFound.module.scss'
import styleTema from 'styles/Tema.module.scss'

//Not Found image import
import NotFoundImage from 'assets/not_found.png'

//Lib import
import classNames from 'classnames'

//Create and export component Not Found
export default function NotFound() {

  const navigate = useNavigate()

  return (
    <div className={
      classNames({
        [style.container]: true,
        [styleTema.container]: true
    })}>
      <div className={style.voltar}>
        <button onClick={() =>
          navigate(-1) //Callback function that recive string or numbers, in this case we go back to the previous navigation page
        }>
          {'< Voltar'}
        </button>
      </div>
      <img src={NotFoundImage} alt='Chefe de cozinha confuso' />
      <h2>Ops! Parece que não encontramos o que estavas procurando.</h2>
    </div>
  )
}
