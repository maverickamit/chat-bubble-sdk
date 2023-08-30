<script lang="ts">
	import ChatWindow from '$lib/ChatWindow.svelte';
	import type Message from '$lib/types.js';

	let messages: Message[] = [
		{
			text: 'hi',
			sender: 'user'
		},
		{
			text: 'hello',
			sender: 'agent'
		}
	];
</script>

<div class="flex max-w-10vw flex-col p-5">
	<ChatWindow {messages} />
</div>
