const client = require('twilio')();

client.messages.create({
	from: 'whatsapp:+351924686213',
	to: 'whatsapp:' + {contato},
	body: 'Hello World'
}).then((message) => console.log(message.sid))

const account_sid = 'AC839ef94fe5b3f14cbae3dcc518c4d95f';
const auth_token = '3eaa8b3aee4e2ad685f0ca74d8f7ce21';

