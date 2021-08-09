var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucia Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");

    // Validação de dados
    var pesoValido = true;
    var alturaValida = true;
    
    if (peso > 200 || peso < 0) {
        pesoValido = false
        tdImc.textContent = "Peso invalido! Por favor corrija!";
        paciente.classList.add("pacienteInvalido");
    }
    if (altura > 2.5 || altura < 0.1) {
        alturaValida = false
        tdImc.textContent = "Altura invalidA! Por favor corrija!";
        paciente.classList.add("pacienteInvalido");
    }
    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    // >>>>>>>>
    
}
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
