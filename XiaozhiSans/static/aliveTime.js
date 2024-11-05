const at = (crtTime = new Date("2024-03-22T15:25:15"), target = document.querySelector("#alive-time")) => {
	let curTime = new Date();
	let mins = (((curTime - crtTime) / 1000) / 60);
	let hours = parseInt(mins / 60);
	let min = parseInt(mins - (hours * 60));
	let s = parseInt((mins - parseInt(mins)) * 60);
	let days = parseInt(hours / 24);

	hours = hours - (days * 24);

	target.innerText = `${days}天 ${hours}小时 ${min}分钟 ${s}秒`;
}
const AT = setInterval(at, 1000);