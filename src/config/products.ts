export const productsConfig = {
  krobi: {
    landingUrl: "https://krobi.io",
  },
  enfoco: {
    landingUrl: "https://en-foco-ten.vercel.app/",
  },
  aviscan: {
    version: "1.0.0",
    landingUrl: null,
    android: {
      available: true,
      downloadUrl:
        "https://expo.dev/accounts/krodev/projects/aviscan-app/builds/95655e9e-b999-48e5-b1a9-90395636add8",
    },
    ios: {
      available: false,
      downloadUrl: null,
    },
  },
} as const;
