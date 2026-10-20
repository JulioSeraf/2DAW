const bts = document.querySelector(".butNo");
const btsi = document.querySelector(".butSi");
const span = document.querySelector("span");
let frases = ["Dejalo ya !!!", "Que te pasa ?","Que si !!!!"];
let cont =0;
bts.addEventListener("mouseover", () => {
   cont++;
    let aleatorio = Math.random() * 300;
    bts.style.cssText = `transform:translate(${aleatorio}px,${aleatorio}px);`;
    if(cont > 5){ 
      span.style.display = "block";
      if(cont == 7){
         span.textContent = frases[0];
      }else if(cont == 9){
         span.textContent = frases[1];

      }else if(cont >= 12){
         span.textContent = frases[2];

      }
    }
})

if(span.style.display = "block"){
   setInterval(()=>{
      span.style.display = "none";
   },1000)
}

bts.addEventListener("click", () => {
   document.body.style.backgroundImage = "url(OIP.webp)";
   document.body.textContent = "Porfa !!!!!!!"
    setInterval(()=>{
      window.navigation.reload();
   },2000)
})

btsi.addEventListener("click", () => {
   document.body.style.backgroundImage = "url(feliz.webp)";
     document.body.style.color = "blue";
   document.body.textContent = "Gracias!!! , Adios!!"
   setInterval(()=>{
      window.navigation.reload();
   },2000)
})
