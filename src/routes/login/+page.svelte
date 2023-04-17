<script lang="ts">
import { login } from '../../store/auth';
import Spinner from 'phosphor-svelte/lib/Spinner';

/** @type {import('./$types').PageData} */
export let data;


/** @type {import('./$types').ActionData} */
export let form;

let email = "";
let password = "";
let loading = false;
let error = {
  email: false,
  password: false
}

$: canLogin = !(email && password)

</script>

<div class="h-full w-screen grid place-content-center static">
  <div class="flex items-center flex-col p-4">
    <h1 class=" text-3xl mb-2 font-bold">Login</h1>
     <form class="bg-ctp-pink text-black p-3 rounded-md flex flex-col justify-between gap-2 w-[35vw] h-[15vh]" method="post" action="/login">
        <input bind:value={email} type="text" placeholder="Email" class="rounded-md px-2 h-1/4 placeholder:text-ctp-base" autocomplete="email">
        <input bind:value={password} type="password" placeholder="Password" class="rounded-md px-2 h-1/4 placeholder:text-ctp-base" autocomplete="current-password">
        <input type="submit" value="Login" class=" bg-ctp-red rounded-md shadow-md hover:shadow-2xl self-end px-4 text-lg disabled:bg-gray-300 transition-all" disabled={canLogin} />
     </form>
  </div>
</div>