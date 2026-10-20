const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

const COMPANY_NAME = "My Bank App";

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head><title>${COMPANY_NAME}</title>
  <style>body{font-family:Arial;padding:40px;background:#f5f7fb;text-align:center} .card{background:white;padding:30px;border-radius:16px;max-width:400px;margin:auto;box-shadow:0 4px 20px rgba(0,0,0,0.1)} .btn{background:#0066ff;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:20px}</style>
  </head>
  <body>
    <div class="card">
      <h1>${COMPANY_NAME}</h1>
      <p>Secure banking app is running!</p>
      <p>✅ Security: Helmet + Rate Limit Active</p>
      <a class="btn" href="/api/health">Check Health</a>
    </div>
  </body>
  </html>`);
});

app.get('/api/health', (req, res) => {
  res.json({ status: "ok", company: COMPANY_NAME, deployed: true, time: new Date() });
});

app.get('/api/login', (req, res) => {
  res.json({ message: "Login endpoint - next step we add database" });
});

module.exports = app;
