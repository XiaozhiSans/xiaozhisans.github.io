(() => {
	const loadComments = async () => {
		if (typeof Gitalk === "undefined") {
			setTimeout(loadComments, 100);
		} else {
			const container = document.getElementById('gitalk-container');
			if (!container) {
				return;
			}
			const path = container.getAttribute("data-path");
			const gitalk = new Gitalk(Object.assign({
					// id: path, // 直接使用路径作为 id
					id: container.getAttribute("data-path-hash"), // 使用 hash 作为 ID
					path: path,
			}, {
				clientID: 'Ov23liD0c0DqSJzM8qyG',
				clientSecret: '6e285d6dd719c6049c42fe927d3fd36388be45fb',
				repo: "gitalk",
				owner: "XiaozhiSans",
				admin: ["XiaozhiSans", "Xia0zhiSans"],
				distractionFreeMode: false,
			}));

			gitalk.render('gitalk-container');
		}
	};

	window.loadComments = loadComments;
	window.addEventListener('pjax:success', () => {
		window.loadComments = loadComments;
	});
})();
