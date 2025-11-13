// minikit.config.ts
/**
 * Minikit configuration for your Mini App
 * @see https://miniapps.farcaster.xyz/docs/guides/publishing
 */

export const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjExMTIzMTksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0MjBiMzgzZmFBN0ZGNTFFODNCYjUzZkJERTVkYUMzZjBkMWJhOUIyIn0",
    payload: "eyJkb21haW4iOiJ1aGh1dXV1eS52ZXJjZWwuYXBwIn0",
    signature: "F+OuHUSNIheGZt08kFKrZVSsVNfDy/qm9/fbKhXA9eYLSY1ofZMlEbYV5u4LXj7TaNU5dDdslMhj5/0I2hUSQRs="
  },
  baseBuilder: {
    ownerAddress: "0xa0A5Ba2DB15Db370E749fAF65051b356F06a9eF9"
  },
  miniapp: {
    version: "1",
    name: "FID ROCK WAITLIST",
    subtitle: "FID ROCK WAITLIST",
    description: "Enter your Farcaster FID and get notified when it launches.",
    screenshotUrls: [`${ROOT_URL}/waitlist-screenshot.png`],
    iconUrl: `${ROOT_URL}/waitlist-icon.png`,
    splashImageUrl: `${ROOT_URL}/waitlist-splash.png`,
    splashBackgroundColor: "#1a1a1a",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["farcaster", "waitlist", "miniapp", "community"],
    heroImageUrl: `${ROOT_URL}/waitlist-splash.png`,
    tagline:  "Join the FID Waitlist Now",
    ogTitle: "FID Waitlist Mini App",
    ogDescription: "Easily join the Farcaster FID waitlist through this Mini App.",
    ogImageUrl: `${ROOT_URL}/waitlist-splash.png`,
    noindex: true
  }
} as const;
