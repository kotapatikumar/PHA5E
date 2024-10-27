
const images=document.querySelectorAll(".allImages");
const heading=document.querySelector(".head");

gsap.from(heading,{duration:1.5,y:-50});

images.forEach((image)=>{
    image.addEventListener("mouseenter",(event)=>{
        images.forEach((image)=>{
            if(image != event.target){
                image.style.opacity="0.02";
                image.style.transform="scale(0.7)";
            }
            gsap.to(heading,{duration:0.5,opacity:0.05});
        })
    })
    image.addEventListener("mouseleave",(event)=>{
        images.forEach((image)=>{
            image.style.opacity="1";
            image.style.transform="scale(1)";
        })
        gsap.to(heading,{duration:0.5,opacity:1});
    })
    image.addEventListener("mousemove",(event)=>{
            let value=image.getBoundingClientRect();
            let x= event.clientX - value.left;
            let y= event.clientY - value.top;
            image.style.transform=`translate(${x*0.05}px,${y*0.05}px)`;
        })
})

