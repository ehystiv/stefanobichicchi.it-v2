/** @type {import('./$types').Actions} */
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://my-test.pockethost.io/');

export const actions = {
	login: async ({ request }) => {
		// const data = await request.formData();

		// const email = String(data.get('email'));
		// const password = String(data.get('password'));

		// const res = await pb.admins.authWithPassword(email, password);

		// console.log(res);

		// return { admin: res.admin };

		return { ciao: request };
	}
};
