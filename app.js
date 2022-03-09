const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const resize = () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(window.innerWidth);
};
window.addEventListener('load' , () => {
    resize();
    
});
window.addEventListener('resize' , resize);
