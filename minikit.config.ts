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
    name: "Cubey",
    subtitle: "Your AI Ad Companion",
    description: "Manage your ads and marketing campaigns smarter.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Boost your ads with AI",
    ogTitle: "Cubey - Your AI Ad Companion",
    ogDescription: "Create smarter ads faster with Cubey Mini App on Base.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
    noindex: true
  }
} as const;
