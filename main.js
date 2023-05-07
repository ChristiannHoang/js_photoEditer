const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const hue = document.getElementById('hue');
const imgBlur = document.getElementById('blur');
const saturation = document.getElementById('saturation');
const sepia = document.getElementById('sepia');
const imgContent = document.querySelector('.img__box');
const imgUrl = document.querySelector('.form-control');
const editorList = document.querySelectorAll('.input__range');

function setDefaults() {
    brightness.value = 100;
    contrast.value = 100;
    hue.value = 0;
    imgBlur.value = 0;
    saturation.value = 100;
    sepia.value = 0;
    imgContent.src = 'https://cdn.trangcongnghe.vn/uploads/posts/2023-04/1680669216146.webp';
    editorList.forEach(function(editorItem) {
        changeRangeInput(editorItem);
    });
}

function changeRangeInput(element) {
    element.style.backgroundSize = `${element.value / (element.max - element.min) * 100}% 100%`;
}

setDefaults();

document.querySelector('.submit__btn').addEventListener('click', function (e) {
    e.preventDefault();
    setDefaults();
    imgContent.src = imgUrl.value;
})

for (var i = 0; i < editorList.length; i++) {
    editorList[i].addEventListener('input', function (e) {
        e.preventDefault();
        imgContent.style.filter = `blur(${imgBlur.value}px) brightness(${brightness.value}%) contrast(${contrast.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%)`;
        changeRangeInput(this);
    })
}

