//Requerimos el paquete express
const express = require("express")

//Inicializamos express y lo guardamos en app
const app = express()

//Configuracion hbs / nuestro motor de templates
app.set("views", __dirname + "/views");
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    let nombreCompleto = "Harland Lohora"
    const edad = 26
    let tieneMascota = true

    const estudiantes = ["Vale", "Sandra", "Fer", "Sam", "Moi", "Enrique", "Horacio"]

    const Vale = {
        edad: 16,
        nombre: "Vale Mejia",
        seDedicaA: "Todologa",
        mascota: {
            nombre: "Emmitto",
            foto: "https://www.clinicaveterinariazarpa.com/wp-content/uploads/2019/04/ferret.jpg"
        }
    }

    const Fer = {
        edad: 29,
        nombre: "Fer",
        seDedicaA: "Psi",
        mascota: {
            nombre: "Emmitto",
            foto: "https://www.clinicaveterinariazarpa.com/wp-content/uploads/2019/04/ferret.jpg"
        }
    }

    res.render("homePage", {
        nombreCompleto,
        edad,
        tieneMascota,
        estudiantes,
        eresAdmin: false,
        Vale,
        Fer
    })
})

//localhost:3000/estudiantes
app.get("/estudiantes", (req, res) => {
    //Lista de estudiantes
    const estudiantes = [
        {
            edad: 16,
            nombre: "Vale Mejia",
            seDedicaA: "Todologa",
            mascota: {
                nombre: "Emmitto",
                foto: "https://www.clinicaveterinariazarpa.com/wp-content/uploads/2019/04/ferret.jpg"
            }
        },
        {
            edad: 26,
            nombre: "Moi",
            seDedicaA: "Musico",
            mascota: {
                nombre: "Azula",
                foto: "https://i.ytimg.com/vi/heIzUwR8IRI/sddefault.jpg"
            }
        },
        {
            edad: 29,
            nombre: "Fer",
            seDedicaA: "Psicologa",
            mascota: {
                nombre: "Touluse, bunhuelo",
                foto: "https://www.canva.com/design/DAFFANGP_KY/view"
            }
        },
        {
            edad: 47,
            nombre: "Horacio",
            seDedicaA: "Todologo",
            mascota: {
                nombre: "Pelusa",
                foto: "https://i.pinimg.com/736x/ba/66/76/ba66764e3a33a285aa44b20539640524.jpg"
            }
        },
        {
            edad: 29,
            nombre: "Sam",
            seDedicaA: "Historiador",
            mascota: {
                nombre: "TogeKiss",
                foto: "https://www.serebii.net/Shiny/SWSH/468.png"
            }
        },
        {
            edad: 29,
            nombre: "Sandra",
            seDedicaA: "Ingeniera Aeroespacial",
            mascota: {
                nombre: "Alpaca",
                foto: "https://www.memecreator.org/static/images/memes/4753136.jpg"
            }
        },
        {
            edad: 28,
            nombre: "Enrique",
            seDedicaA: "Abogado",
        },
        {
            edad: 33,
            nombre: "Yanni",
            seDedicaA: "TA",
            mascota: {
                nombre: "Gato sin botas",
                foto: "https://www.cinemascomics.com/wp-content/uploads/2022/03/trailer-de-El-Gato-Con-Botas-2-960x720.jpg.webp"
            }
        },
    ]

    res.render("estudiantes", { estudiantes })
})

//El puerto que va a escuchar -> localhost:3000

app.listen(3000, () => {
    console.log("Servidor prendido en el puerto 3000")
})
