import style from './Reservas.module.scss'
import styleTema from 'styles/Tema.module.scss'

import Form from 'components/Form'


export default function Reservas() {
  return (
    <section className={styleTema.container}>
      <h3 className={styleTema.titulo}>Faça a sua reserva conosco</h3>
        <Form />
    </section>
  )
}
