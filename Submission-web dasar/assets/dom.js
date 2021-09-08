const slider = document.querySelector('input[name=misteri]')

slider.addEventListener('input', function(){
    // console.log(slider.value);
    const blur = slider.value;
    const opacity = document.getElementById("content");
    opacity.style.filter = `blur(${blur}px)`
});