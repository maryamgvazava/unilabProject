export default function selectLocation (){
// const locationlist = document.querySelector('.locationlist')
const downArrow = document.querySelectorAll('.arrow-icon')

for (let arrow of downArrow) {
    arrow.addEventListener('click', function() {
        const closestDiv = this.closest('div');
        if (closestDiv.nextElementSibling && closestDiv.nextElementSibling.classList.contains('locationlist')) {
            closestDiv.nextElementSibling.classList.toggle('locationListDesc');
        }
    });
}

}