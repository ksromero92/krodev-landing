export const productsConfig = {
  krobi: {
    landingUrl: "https://krobi.io",
  },
  enfoco: {
    landingUrl: "https://en-foco-ten.vercel.app/",
  },
  aviscan: {
    version: "1.0.0",
    landingUrl: "https://aviscan-app.vercel.app/",
    android: {
      available: true,
      downloadUrl:
        "https://expo.dev/accounts/krodev/projects/aviscan-app/builds/d9c6289e-d0d8-4f32-ba32-0ab1cd7565ba",
    },
    ios: {
      available: false,
      downloadUrl: null,
    },
  },
} as const;
