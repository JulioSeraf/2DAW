const $butEnviar = document.getElementById("enviar"),
    $butLimpiar = document.getElementById("limpiar"),
    $inputText = document.getElementById("text"),
    $pBox = document.getElementById("box");

    $butEnviar.addEventListener("click",(e)=>{
        console.log($inputText.value)
        $pBox.textContent = `Hola soy, ${$inputText.value}` ;
    })
    $inputText.addEventListener("input", e => $pBox.textContent = e.target.value);

    $butLimpiar.addEventListener("click", e =>{
         $pBox.textContent = ""
        $inputText.value = "";  
        });