import PocketBase from 'pocketbase';
import { readable } from 'svelte/store';

const pb = new PocketBase('https://my-test.pockethost.io/');

export const isLogged = readable(false, (set) => {
	set(pb.authStore.isValid);
});

export async function login(email: string, password: string): Promise<boolean> {
	try {
		const res = await pb.admins.authWithPassword(email, password);
		return !!res.admin;
	} catch (error) {
		return false;
	}
}
