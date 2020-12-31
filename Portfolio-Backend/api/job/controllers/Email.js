module.exports = {
  index: async (ctx) => {
    const { text, company, email } = ctx.request.body;
    await strapi.plugins["email"].services.email.send({
      to: "Imatlak03@gmail.com",
      from: "Imatlak03@gmail.com",
      replyTo: email,
      subject: `RESUME REQUEST FROM ${company}`,
      text: text,
    });
    ctx.send("Email Sent");
  },
};
