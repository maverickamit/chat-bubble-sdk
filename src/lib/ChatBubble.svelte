<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { X } from 'lucide-svelte';
	import ChatWindow from '$lib/ChatWindow.svelte';
	import type Message from './types.js';
	export let messages: Message[] = [];
	export let onSubmit: (arg: Message) => void = () => {};

	const {
		elements: { trigger, content, arrow, close },
		states: { open }
	} = createPopover({
		forceVisible: true
	});
</script>

<div class="flex items-end justify-end">
	<!-- Chat bubble button -->
	<button use:melt={$trigger} class="focus:outline-none">
		<div class="bg-blue-500 text-white mx-2 my-2 p-2 rounded-lg shadow-md">
			<p>Chat now</p>
		</div>
	</button>
</div>

{#if $open}
	<div use:melt={$content} class="content relative">
		<div use:melt={$arrow} />
		<div class="flex flex-col gap-2.5">
			<ChatWindow {messages} {onSubmit} />
			<button use:melt={$close} class="close absolute top-0 right-0">
				<X />
			</button>
		</div>
	</div>
{/if}

<style lang="postcss">
	.close {
		@apply absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full;
		@apply text-red-900 transition-colors hover:bg-red-500/10;
		@apply focus-visible:ring focus-visible:ring-red-400 focus-visible:ring-offset-2;
		@apply bg-white p-0 text-sm font-medium;
	}

	.content {
		@apply border border-gray-300 rounded;
	}
</style>
