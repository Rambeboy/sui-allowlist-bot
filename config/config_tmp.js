export const Config = {
  SUI_RPC_URL: "https://sui-testnet.mystenlabs.com" || 'https://fullnode.testnet.sui.io:443',
  DEFAULT_IMAGE_URL: 'https://picsum.photos/800/600',
  PACKAGE_ID: '0x4cb081457b1e098d566a277f605ba48410e26e66eaab5b3be4f6c560e9501800',
  PUBLISHER_URLS: [
    'https://seal-example.vercel.app/publisher1/v1/blobs',
    'https://seal-example.vercel.app/publisher2/v1/blobs',
    'https://seal-example.vercel.app/publisher3/v1/blobs',
    'https://seal-example.vercel.app/publisher4/v1/blobs',
    'https://seal-example.vercel.app/publisher5/v1/blobs',
    'https://seal-example.vercel.app/publisher6/v1/blobs',
  ],
  GAS_BUDGET: 10000000,
  MAX_UPLOAD_RETRIES: 15,
  RETRY_DELAY_MS: 5000
};
