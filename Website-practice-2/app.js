menu = document.querySelector('#mobile-menu');
menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})



skillTab = document.querySelector('.active_link1');
experienceTab = document.querySelector('.active_link2');
educationTab = document.querySelector('.active_link3');

skillContents = document.querySelector('.title_topics_info_skills');
experienceContents = document.querySelector('.title_topics_info_experience');
educationContents = document.querySelector('.title_topics_info_education');



function showContent(contentName){
	skillContents.classList.remove('is-active');
	experienceContents.classList.remove('is-active');
	educationContents.classList.remove('is-active');


	contentName.classList.add('is-active');
}


skillTab.addEventListener('click',function(){
	showContent(skillContents);
})

experienceTab.addEventListener('click',function(){
	showContent(experienceContents);
})

educationTab.addEventListener('click',function(){
	showContent(educationContents);
})




