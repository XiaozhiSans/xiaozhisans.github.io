console.log(
  `
  %c KZHomePage v1.2.0 Modified by XiaozhiSans %c https://xsawa.us.kg/XiaozhiSans/
`,
    "color: #fff; background: #fd79a8; padding: 5px 0;",
    "background: #fff; padding: 5px 0;"
);

async function getHitokoto() {
  const hitokoto = document.getElementById('hitokoto_text');
  try {
    const req = await fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=f');
    if(!req.ok) throw new Error(`Connection error: ${req.status}`);
    const data = await req.json();
    hitokoto.innerText = data.hitokoto;
    hitokoto.title = data.from;
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
    hitokoto.target = '_blank';
  } catch(e) {
    console.error(`Failed to fetch hitokoto: ${e}`);
  }
}

(()=>{
  const btn = document.querySelector('#refresh_hitokoto');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  getHitokoto();
  btn.classList.toggle('clicked');
  setTimeout(() => {
    btn.classList.toggle('clicked');
  }, 400);
});})()