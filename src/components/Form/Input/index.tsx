//Styles import
import style from './Input.module.scss'

//Type import
import { inputPadrao } from 'types/inputPadrao'

//Lib import
import classNames from 'classnames'


//Create and export component CampoTexto
export default function CampoTexto(props: inputPadrao) {

    return (
        <div className={style.campoTexto}>
            <label
                htmlFor={props.name}
                className={classNames({
                    [style.label]: props.label, //Sempre que houver uma label está classe será usada
                    [style.label__numero]: props.label && props.type === 'number', //Sempre que houver uma label e o type do input for number está classe será usada
                })}
            >
                {props.label}
            </label>
            <input
                value={props.value}
                onChange={(evento) => props.setValue(evento.target.value)}
                required={props.required}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                className={classNames({
                    [style.input]: true, //Está classe sempre será usada
                    [style.input__numero]: props.type === 'number', //Está classe será usada caso o type do input seja number 
                })}
            />
        </div>
    )
}
