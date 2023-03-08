import CampoTexto from 'components/CampoTexto';
import { useState } from 'react'
import style from './Form.module.scss'

export default function Form() {
	
	const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [contato, setContato] = useState('');
	const [pessoas, setPessoas] = useState('');
	const [message, setMessage] = useState('');
	
	function save(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		console.log('Nome:', name)
		console.log('Email:', email)
		console.log('Contacto:', contato)
		console.log('N° de pessoas:', pessoas)
		console.log('Mensagem:', message)

		setName('');
		setEmail('');
		setContato('');
		setPessoas('');
		setMessage('');
	}

	return (
		<form onSubmit={save} className={style.form}>
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
			<button type="submit" className={style.button}>Fazer reserva</button>
		</form>
	)
}
