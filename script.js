document.addEventListener('DOMContentLoaded', function () {
  var projects = document.querySelectorAll('#project1, #project2, #project3, #project4');
  var main = document.getElementsByTagName('main')[0];
  var header = document.getElementsByTagName('header')[0];
  var footer = document.getElementsByTagName('footer')[0];
  var firstSection = document.getElementsByClassName('firstSection')[0];
  projects.forEach(function (project) {
    project.addEventListener('mouseover', function () {
      projects.forEach(function (otherProject) {
        if (otherProject !== project) {
          otherProject.classList.add('blur');
        }
      });
      header.classList.add('blur');
      footer.classList.add('blur');
      firstSection.classList.add('blur');
      project.classList.add('project-hovered');
    });
    
    project.addEventListener('mouseout', function () {
      header.classList.remove('blur');
      footer.classList.remove('blur');
      projects.forEach(function (otherProject) {
        firstSection.classList.remove('blur');
        if (otherProject !== project) {
          otherProject.classList.remove('blur');
        }
      });
      project.classList.remove('project-hovered');
    });
 
 });
});
