import classNames from 'classnames';
import { useState } from 'react';
import style from './Times.module.scss'

const time = ['12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

export default function Times(props) {

  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
    props.setTime(e.target.innerText);
  }

  return (
    <>
      <h3>Selecione o horário</h3>
      <div className={style.container}>
        {time.map(times => {
          return (
            <div className={style.times}>
              <button onClick={(e) => displayInfo(e)} className={classNames({[style.btn__active]: info})}> {times} </button>
            </div>
          )
        })}
        <div className={style.infos}>
          {info ? `Sua reserva será feita para às ${event} do dia ${props.date.toLocaleDateString()}` : null}
        </div>
      </div>
    </>
  )
}
