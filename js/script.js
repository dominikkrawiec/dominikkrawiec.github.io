var readMoreBtn = document.querySelectorAll('.cd-btn');


for (var i = 0; i < readMoreBtn.length; i++) {
  readMoreBtn[i].addEventListener('click', function(event){
      projectName = event.target.parentElement.getAttribute('data-project-name');
      var projectDesc  = document.querySelector('#description');
      loadTemplate(projectDesc, projectName + '.html');
  });
}

var aboutBtn = document.querySelectorAll('.about-link');

for (var i = 0; i < aboutBtn.length; i++) {
  aboutBtn[i].addEventListener('click', function(event){
      aboutSection = document.querySelector('.hidden-section');

      aboutSection.style.height = 'auto';
      aboutSection.style.padding = '30px 0';
      aboutSection.style.opacity = '1';

  });
}



function loadTemplate(el, tempName) {
  let xhr = new XMLHttpRequest();

        //typ połączenia, url, czy asynchroniczen
        xhr.open("GET", tempName, true);

        xhr.addEventListener('readystatechange', function() {
            if (this.readyState === 4) {
              el.innerHTML = this.responseText;

              el.style.zIndex = '999';
              el.style.height = 'auto';
              el.style.transform = 'translateY(0px)';
              el.style.opacity = '1';
              el.style.visibility = 'visible';


            }
        })

        xhr.send();

}


var sliderNavNext = document.querySelector('#next');
var sliderNavPrev = document.querySelector('#prev');

      sliderNavNext.addEventListener('click', function(){
        var projectDesc  = document.querySelector('#description');

        projectDesc.style.zIndex = '-2';
        projectDesc.style.height = '0';
        projectDesc.style.transform = 'translateY(-400px)';
        projectDesc.style.opacity = '0';
        projectDesc.style.visibility = 'hidden';
        projectDesc.style.overflow = 'hidden';

        var visibleEl = document.querySelector('.next-slide');
        var color = visibleEl.getAttribute('data-bg');

        switch(color){
          case 'ohdog-bg':
          current = '#FF9C42';
          break;

          case 'hetman-bg':
          current = '#7AA9E6';
          break;

          case 'gym-bg':
          current = '#343b43';
          break;

          case 'lemon-bg':
          current = '#ffe668';
          break;
        }

        var html = document.getElementsByTagName('html')[0];
      html.style.setProperty("--current-color", current);

      });

      sliderNavPrev.addEventListener('click', function(){
        var projectDesc  = document.querySelector('#description');

        projectDesc.style.zIndex = '-2';
        projectDesc.style.height = '0';
        projectDesc.style.transform = 'translateY(-400px)';
        projectDesc.style.opacity = '0';
        projectDesc.style.visibility = 'hidden';
        projectDesc.style.overflow = 'hidden';

        var visibleEl = document.querySelector('.prev-slide');
        var color = visibleEl.getAttribute('data-bg');


        switch(color){
          case 'ohdog-bg':
          current = '#FF9C42';
          break;

          case 'hetman-bg':
          current = '#7AA9E6';
          break;

          case 'gym-bg':
          current = '#343b43';
          break;

          case 'lemon-bg':
          current = '#ffe668';
          break;
        }

        var html = document.getElementsByTagName('html')[0];
      html.style.setProperty("--current-color", current);

      document.querySelector('body').style.minHeight = '100vh'

      });
