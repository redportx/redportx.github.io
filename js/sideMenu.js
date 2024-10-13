document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar-menu');
    var overlay = document.getElementById('overlay');
    
    sidebar.style.transform = "translateX(0%)"; 
    overlay.style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar-menu');
    var overlay = document.getElementById('overlay');
    

    mainMenu();
    sidebar.style.transform = "translateX(100%)"; 
    overlay.style.display = 'none';

});


function storySection(){
    document.getElementById('mainMenu').style.display = 'none'
    document.getElementById('story-buttons').style.display = 'block'
    document.getElementById('firstDateStory').style.display= 'none'
}

function mainMenu(){
    document.getElementById('mainMenu').style.display = 'block'
    document.getElementById('story-buttons').style.display = 'none'
    document.getElementById('firstDateStory').style.display= 'none'

}
function firstDateMenu(){
    document.getElementById('mainMenu').style.display = 'none'
    document.getElementById('story-buttons').style.display = 'none'
    document.getElementById('firstDateStory').style.display= 'block'

}
function closeSidebar() {
    var sidebar = document.getElementById('sidebar-menu');
    var overlay = document.getElementById('overlay');
    
    mainMenu();
    sidebar.style.transform = "translateX(100%)";
    overlay.style.display = 'none';
}
