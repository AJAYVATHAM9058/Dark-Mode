const toggleBtn = document .querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click',() => {
	document.documentElement.classList.toggle('dark-theme');
	/*
	document.getElementById("bg").style.background = "#000000";
	document.getElementById('bg').style.color = "#ffffff";
	document.getElementsByClassName('btn').style.background="#3f00f0";
	document.getElementsByClassName('btn').style.color = "#ff4d44";
	document.getElementsByClassName('post').style.color= "#666699"; */
});

const articlesData = articles.map((article) =>{
	const {title,date,length,snippet} = article;
	const formDate = moment(date).format('MMMM Do, YYYY');
	return `<article class="post">
			<h2>${title}</h2>
			<div class="post-info">
			<span>${formDate}<span>
			<span>${length} min read </span>
			</div>
			<p>${snippet}</p>
			</article>`;
}).join('');

articlesContainer.innerHTML = articlesData;