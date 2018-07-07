module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="/style.css">
      <title>${title}</title>
    </head>
    <body style="margin: 0;">
    ${body}
    </body>
    ${scripts}
  </html>
`;
