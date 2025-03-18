const maths = document.getElementById("maths");
const lit = document.getElementById("lit");
const efsi = document.getElementById("efsi");

const avg = document.getElementById("avg");
const best = document.getElementById("best");

const err = document.getElementById("err");

const div = document.querySelector(".res_promedio");

let mathsMal, litMal, efsiMal;
let promedio, notaMat, notaLit, notaEFSI;

const cantMaterias = 3;

maths.addEventListener("input", () => { 
    if (maths.value < 1 || maths.value > 10) {
        maths.classList.remove("green_border");
        maths.classList.add("red_border");
        mathsMal = true;
    } else {
        maths.classList.add("green_border");
        maths.classList.remove("red_border");
        mathsMal = false;
    }
});

lit.addEventListener("input", () => { 
    if (lit.value < 1 || lit.value > 10) {
        lit.classList.remove("green_border");
        lit.classList.add("red_border");
        litMal = true;
    } else {
        lit.classList.add("green_border");
        lit.classList.remove("red_border");
        litMal = false;
    }
});

efsi.addEventListener("input", () => { 
    if (efsi.value < 1 || efsi.value > 10) {
        efsi.classList.remove("green_border");
        efsi.classList.add("red_border");
        efsiMal = true;
    } else {
        efsi.classList.add("green_border");
        efsi.classList.remove("red_border");
        efsiMal = false;
    }
});

avg.addEventListener("click", (e) => {
    e.preventDefault();
    if (mathsMal || litMal || efsiMal || maths.value == "" || lit.value == "" || efsi.value == "") {
        err.classList.add("mal");
        err.classList.remove("bien");
        err.innerHTML = "Campos inválidos";
    } else {
        err.classList.remove("mal");
        err.classList.add("bien");
        err.innerHTML = "Campos válidos";

        notaMat = parseInt(maths.value);
        notaLit = parseInt(lit.value);
        notaEFSI = parseInt(efsi.value);
        promedio = (notaMat + notaLit + notaEFSI) / cantMaterias;
        if(promedio >= 6) {
            div.innerHTML = `El promedio es <span class="bien">${promedio}</span>`;
        }
        else {
            div.innerHTML = `El promedio es <span class="mal">${promedio}</span>`;
        }
        
    }
});

best.addEventListener("click", (e) => {
    e.preventDefault();
    if (mathsMal || litMal || efsiMal || maths.value == "" || lit.value == "" || efsi.value == "") {
        err.classList.add("mal");
        err.classList.remove("bien");
        err.innerHTML = "Campos inválidos";
    } else {
        err.classList.remove("mal");
        err.classList.add("bien");
        err.innerHTML = "Campos válidos";

        notaMat = parseInt(maths.value);
        notaLit = parseInt(lit.value);
        notaEFSI = parseInt(efsi.value);

        const materias = [
            {name: "Matemática", nota: notaMat},
            {name: "Literatura", nota: notaLit},
            {name: "EFSI", nota: notaEFSI},
        ];

        const mejorNota = Math.max(...materias.map(materia => materia.nota));
        const mejoresMaterias = materias.filter(materia => materia.nota === mejorNota);

        if (mejoresMaterias.length > 1) {
            div.innerHTML = `Las mejores materias son: <ul>${mejoresMaterias.map(materia => `<li>${materia.name} con nota ${materia.nota}</li>`).join('')}</ul>`;
        } else {
            div.innerHTML = `La mejor materia es: ${mejoresMaterias[0].name} con nota ${mejoresMaterias[0].nota}`;
        }
    }
});