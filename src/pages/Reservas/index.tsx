//Styles import
import styleTema from 'styles/Tema.module.scss'

//Component import
import Form from 'components/Form'

//Create and export Reservas page
export default function Reservas() {
  return (
    <section className={styleTema.container}>
      <h3 className={styleTema.titulo}>Faça a sua reserva conosco</h3>
        <Form />
    </section>
  )
}
