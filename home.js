document.addEventListener('DOMContentLoaded', function() {
    const bloom = document.getElementById('bloom');

bloom.addEventListener('mouseover', function handleMouseOver() {
    bloom.style.color='yellow';
});

bloom.addEventListener('mouseout', function handleMouseOut() {
    bloom.style.color='black';
});
});
