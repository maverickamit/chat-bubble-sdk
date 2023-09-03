import { chromium } from '@playwright/test';
import type { Browser, Page } from 'playwright';

import { getByText, fireEvent, render } from '@testing-library/svelte';
import App from '../src/App.svelte'; // Adjust the path to your Svelte component

let browser: Browser;
let page: Page;

beforeAll(async () => {
	browser = await chromium.launch();
});

afterAll(async () => {
	await browser.close();
});

beforeEach(async () => {
	page = await browser.newPage();
	await page.goto('http://localhost:5000'); // Replace with your Svelte app's development server URL
});

afterEach(async () => {
	await page.close();
});

describe('ChatBubble Component E2E Test', () => {
	it('should open chat bubble and send a message', async () => {
		const { getByTestId } = render(App); // Render your Svelte component
		const openChatButton = getByTestId('open-chat-button');
		const chatInput = getByTestId('chat-input');
		const sendButton = getByTestId('send-button');

		// Open chat bubble
		await fireEvent.click(openChatButton);
		await page.waitForSelector('div[data-test="chat-bubble"]');

		// Send a message
		await fireEvent.input(chatInput, { target: { value: 'Hello, this is a test message.' } });
		await fireEvent.click(sendButton);

		// Wait for the message to appear
		await page.waitForSelector(
			'div[data-test="chat-message"]:has-text("Hello, this is a test message.")'
		);
	});

	// Add more test cases for other Svelte components as needed
});
