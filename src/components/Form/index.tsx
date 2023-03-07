import CampoTexto from 'components/CampoTexto';
import { useState } from 'react'
import style from './Form.module.scss'

export default function Form() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [contato, setContato] = useState('');
	const [pessoas, setPessoas] = useState('');
	
	function save(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		console.log('Nome:', name)
		console.log('Email:', email)
		console.log('Contacto:', contato)
		console.log('N° de pessoas:', pessoas)
	}

	return (
		<form onSubmit={save}>
			<CampoTexto
				label='Quantidade de pessoas:'
				name='pessoas'
				value={pessoas}
				setValue={setPessoas}
				type='number'
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

			<button type="submit" className={style.button}>Fazer reserva</button>
		</form>
	)
}
