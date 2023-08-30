<script lang="ts">
	import type Message from './types.js';
	export let messages: Message[] = [];
	let newMessage = '';
</script>

<div class="border border-gray-300 rounded p-4 w-72 m-5">
	<div class="flex items-center mb-2">
		<h4 class="text-lg font-semibold">Chat with an agent</h4>
	</div>

	<div class="max-h-48 overflow-y-auto mb-2">
		{#each messages as message (message.text)}
			<div
				class="p-2 my-1 rounded max-w-4/5 {message.sender === 'agent'
					? 'text-right bg-blue-100'
					: 'text-left bg-green-100'}"
			>
				{message.text}
			</div>
		{/each}
	</div>

	<div class="flex items-center">
		<input
			type="text"
			placeholder="Type your message..."
			class="flex-grow p-2 border rounded-l border-gray-300"
			bind:value={newMessage}
		/>
		<button
			class="bg-blue-500 text-white border border-blue-500 rounded-r p-2 ml-1
        hover:bg-blue-600 hover:border-blue-600"
		>
			Send
		</button>
	</div>
</div>
