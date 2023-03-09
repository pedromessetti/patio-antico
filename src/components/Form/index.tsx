//React Hook import
import { useState } from 'react'

//Styles import
import style from './Form.module.scss'
import './Calendar.css'

//Components import
import CampoTexto from 'components/Form/CampoTexto';
import Calendar from 'react-calendar'
import Times from './Time/Times';

//Lib import
import emailjs from '@emailjs/browser'

//Create and export Form Component
export default function Form() {

	//Variables used
	const maxDate = new Date(2023, 11, 31)
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [contato, setContato] = useState('');
	const [pessoas, setPessoas] = useState('');
	const [message, setMessage] = useState('');

	//Function to return variables to their default state
	const setDefaultState = () => {
		setDate(new Date());
		setTime('');
		setName('');
		setEmail('');
		setContato('');
		setPessoas('');
		setMessage('');
	}

	//Function to send email with the infos from the form
	const sendEmail = (event: React.FormEvent<HTMLFormElement> | HTMLFormElement) => {
		event.preventDefault();

		emailjs.sendForm('service_2zdwjg4', 'template_a8uolmw', event.currentTarget, 'aqduiPe1jPjZFQWpG');
		
		window.alert(`${name.split(" ")[0]}, ficamos felizes em informar que a sua reserva foi feita com sucesso!. Muito obrigado e até breve!`);

		setDefaultState();
	}

	return (
		<form onSubmit={sendEmail} className={style.form}>
			<div className={style.calendar__container}>
				<h3>Selecione a data</h3>
				<Calendar
					onChange={setDate}
					maxDate={maxDate}
					minDate={new Date()}
					value={date}
					defaultActiveStartDate={date}
					prev2Label=""
					next2Label=""
					showNeighboringMonth={false}
					calendarType="US"
				/>

				<Times date={date} setTime={setTime} />
			</div>

			<div></div>

			<div className={style.form__container}>
				<CampoTexto
					label='Quantidade de pessoas:'
					name='pessoas'
					value={pessoas}
					setValue={setPessoas}
					type='number'
					min={1}
					required
				/>
				<CampoTexto
					name='name'
					value={name}
					setValue={setName}
					type='text'
					placeholder='Informe o nome da reserva'
					required
				/>
				<CampoTexto
					name='contato'
					value={contato}
					setValue={setContato}
					type='tel'
					placeholder='Telefone de contacto'
					required
				/>
				<CampoTexto
					name='email'
					value={email}
					setValue={setEmail}
					type='email'
					placeholder='Email de contacto'
					required
				/>
				<textarea
					name='message'
					onChange={(event) => setMessage(event.target.value)}
					value={message}
					placeholder='Caso queira, escreva uma mensagem com alguma preferência para sua reserva. Por exemplo uma mesa ao pé da janela.'
					required={false}
				/>
				<input type="text" name="date" className={style.not_display} value={date.toLocaleDateString()} />
				<input type="text" name="time" className={style.not_display} value={time} />
				<button type="submit" className={style.button}>Fazer reserva</button>
			</div>
		</form >
	)
}
