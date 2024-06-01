window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var con = document.querySelector('.content');
    var a = document.querySelector('.abc');
    var b = document.querySelector('.abd');
    var c = document.querySelector('.abe');
    var d = document.querySelector('.abf');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'pink';
        con.style.backgroundColor='purple';
        a.style.color='black';
        b.style.color='black';
        c.style.color='black';
        d.style.color='black';
        
        
    } else {
        navbar.style.backgroundColor = '#333';
        con.style.backgroundColor='#575757';
        a.style.color='white';
        b.style.color='white';
        c.style.color='white';
        d.style.color='white';
        
        
    }
});

document.querySelectorAll('.navbar ul li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});