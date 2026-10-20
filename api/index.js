const express = require('express');
const app = express();
app.get('/', (req,res)=>{
res.send(`<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;font-family:sans-serif;background:#f0f5ff}.top{background:#0b5cff;color:#fff;padding:35px;text-align:center;border-radius:0 0 30px 30px}.box{background:#fff;margin:-25px 16px;padding:22px;border-radius:20px;box-shadow:0 8px 25px rgba(0,0,0,.12)}.bal{font-size:32px;font-weight:900;color:#0b5cff}.btn{background:#0b5cff;color:#fff;border:0;width:100%;padding:16px;border-radius:12px;font-weight:700;margin-top:12px}</style></head><body><div class=top><h2>🏦 My Bank App</h2><p>Secure • Jakesax</p></div><div class=box><small>Available Balance</small><div class=bal>₦ 5,250,000.00</div><p>Welcome • Active ✅</p><button class=btn>Transfer Money</button><button class=btn style="background:#e8efff;color:#0b5cff">History</button><p style="text-align:center;color:green;margin-top:12px">● Live on Vercel</p></div></body></html>`);
});
app.get('/api/health',(req,res)=>res.json({ok:true}));
module.exports=app;
