/* 
 
Variáveis:
    Um espaço de memória que você reserva e poode guardar o que quiser lá dentro

    3 jeitos de criar uma variável

        - var / jeito antigo - NÃO USE
        - let -> você pode alterar o valor depois
        - const -> constante (depois de criada, não pode alterar o valor)

*/

const form = document.querySelector('form.formulario-fale-conosco')
const mascara = document.querySelector('div.mascara-formulario')

function mostrarForm() {

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"    

}

function esconderForm() {

    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    

}