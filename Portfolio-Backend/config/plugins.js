module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "Imatlak03@gmail.com",
      defaultReplyTo: "Imatlak03@gmail.com",
    },
  },
  // ...
});
