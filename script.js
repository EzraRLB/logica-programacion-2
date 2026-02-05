let gradosCelsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));

while (isNaN(gradosCelsius)) {
    console.log("Ingrese un número válido");
    gradosCelsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
}

function CelsiusToFahrenheit(gradosCelsius) {
    const gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    return gradosFahrenheit;
}

function CelsiousToKelvin(gradosCelsius) {
    const gradosKelvin = gradosCelsius + 273.15;
    return gradosKelvin;
}

console.log("Grados Fahrenheit: " + CelsiusToFahrenheit(gradosCelsius));
console.log("Números en orden descendente: " + CelsiousToKelvin(gradosCelsius));