import { getRemoteConfig } from "firebase-admin/remote-config";
import { getAdminApp } from "./firebase-admin";

// Cache for Remote Config value
let cachedValue: { value: boolean; timestamp: number } | null = null;
const CACHE_DURATION = 60000; // 1 minute

// Server-side Remote Config fetcher using Firebase Admin SDK
export async function getComingSoonRedirect(): Promise<boolean> {
  // Check cache first
  if (cachedValue && Date.now() - cachedValue.timestamp < CACHE_DURATION) {
    return cachedValue.value;
  }

  try {
    // Get Admin app instance
    const adminApp = getAdminApp();
    const remoteConfig = getRemoteConfig(adminApp);

    console.info("[Admin App]:", Boolean(adminApp));

    // Get the Remote Config template
    const template = await remoteConfig.getTemplate();

    // Get the comingSoon parameter
    const parameters = template.parameters || {};
    const comingSoonParam = parameters.comingSoon;

    let value = false;

    if (comingSoonParam && comingSoonParam.defaultValue) {
      const defaultValue = comingSoonParam.defaultValue;

      if ("value" in defaultValue) {
        value = defaultValue.value === "true";
      }
    }

    // Update cache
    cachedValue = { value, timestamp: Date.now() };

    console.info("[Remote Config] comingSoon value:", value);

    return value;
  } catch (error) {
    console.error("Error fetching remote config:", error);
    // Default to false if there's an error
    return false;
  }
}
