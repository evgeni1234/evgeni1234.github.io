$(document).ready(function(){  
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

(function() {
	var elements = document.querySelectorAll('img[data-src]');
	var index = 0;
	var lazyLoad = function() {	
		if(index >= elements.length) return;
		var item = elements[index];	
		if((this.scrollY + this.innerHeight) > item.offsetTop) {			
			var src = item.getAttribute("data-src");
			item.src = src;
			item.addEventListener('load', function() {
				item.removeAttribute('data-src');    	 
			});     	
			index++;
			lazyLoad();
		}
	};
	var init = function() {
		window.addEventListener('scroll', lazyLoad);
		lazyLoad();
	};
	return init();
})();
    
    });