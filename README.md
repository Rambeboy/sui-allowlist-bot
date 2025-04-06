# SEAL SUI ALLOW LIST BOT

Automate Sui SEAL Protocol interaction for allowlist creation and service subscription management.

## OVERVIEW

SealSui-Auto-Bot is a Node.js utility that helps users interact with the Sui SEAL Protocol. This tool allows for easy creation of allowlists and service subscriptions with automated content publication to the Sui blockchain.

## BOT FEATURES

- Create allowlist entries and publish content
- Add multiple addresses to allowlists
- Create service subscription entries
- Upload blobs to SEAL publishers with random selection
- Support for multiple wallets
- Proxy support for requests
- Custom or random image uploads
- Support for both URL and local image files
- Support for Sui private keys, hex, base64, and mnemonic phrases

## PREREQUISITES

- Node.js (v16 or later)
- npm or yarn
- A Sui wallet (private key or mnemonic phrase)


## SETUP & CONFIGURE BOT
### LINUX
1. Clone the repository
   ```bash
   git clone https://github.com/Rambeboy/sui-allowlist-bot.git && cd sui-allowlist-bot
   ```

2. Install dependencies
   ```bash
   npm install && npm run setup
   ```

3. Set up your accounts
   ```bash
   nano accounts/accounts.js
   ```

4. Configure the bot config
   ```bash
   nano config/config.js
   ```

5. Configure your proxy
   ```bash
   nano config/proxy_list.js
   ```

6. Run the bot
   ```bash
   npm run start
   ```

Follow the interactive prompts to:
1. Choose whether to use multiple wallets (if detected)
2. Select the operation mode (allowlist or service subscription)
3. Select image source (URL or local file)
4. Specify the number of tasks per wallet
5. Add additional addresses to allowlist (for allowlist mode)

## EXAMPLE WORKFLOW

For allowlist creation:
1. Creates a new allowlist entry
2. Adds your wallet address to the allowlist
3. Adds any specified additional addresses
4. Uploads image content as a blob
5. Publishes the blob to the allowlist

For service subscription:
1. Creates a service entry with specified amount and duration
2. Uploads image content as a blob
3. Publishes the blob to the subscription service

## ADVANCED SETTINGS

You can modify these constants in the code:
- `PACKAGE_ID`: The Sui package ID for SEAL protocol
- `DEFAULT_IMAGE_URL`: Default image URL if none provided
- `PUBLISHER_URLS`: URLs for SEAL publishers

## TROUBLESHOOTING

- **Proxy Issues**: Check your proxy format in proxies.txt
- **Wallet Access**: Ensure your mnemonic phrases are correctly formatted
- **Transaction Failures**: Check your wallet has sufficient SUI for gas fees
- **Blob Upload Failures**: The script will automatically retry uploads

## DISCLAIMER

This tool is provided for educational purposes only. Use at your own risk.

## LICENSE

This project is licensed unser the MIT License - see the [LICENSE](LICENSE) file for more details.