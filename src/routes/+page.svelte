<script lang="ts">
	import ChatBubble from '$lib/ChatBubble.svelte';
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

	const onSubmit = (data: Message) => {
		messages = [...messages, data];
	};
</script>

<div class="flex max-w-10vw flex-col p-5">
	<ChatBubble {messages} {onSubmit} />
</div>
