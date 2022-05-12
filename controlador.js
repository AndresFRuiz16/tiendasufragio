//OBJETOS
let producto1={
    nombre:"Barrilete",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/barrilete.jfif?alt=media&token=3a27e439-e55a-43d7-aa68-76be2a2fbaba"
}

let producto2={
    nombre:"Bon bon bum",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/bon%20bon%20bum.jfif?alt=media&token=b29ee623-97fb-4dd1-b088-4e41a20d6d3f"
}

let producto3={
    nombre:"Halls",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/halls.jfif?alt=media&token=bf5f4b36-7c2e-48c7-ac34-609ec72a19c4"
}

let producto4={
    nombre:"Hubba Bubba",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/hubba%20bubba.jfif?alt=media&token=a1db99c7-8f3a-4c91-b691-d6a4bfdc0628"
}

let producto5={
    nombre:"oka loka caja",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/oka%20loka%20cajita.jfif?alt=media&token=39352a1f-bafc-45d9-a752-fa436ed2cfb0"
}

let producto6={
    nombre:"Oka loka",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/oka%20loka.jfif?alt=media&token=19150d00-d2a7-4417-8e4b-bf92a6ffa312"
}

let producto7={
    nombre:"Super coco",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/supercoco.jfif?alt=media&token=7faaadef-7381-4f35-a422-0a177a432a45"
}

let producto8={
    nombre:"Gomitas aro",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/gomitas%20aro.jfif?alt=media&token=f15c15a6-9817-436c-8171-89a7f4096265"
}

let producto9={
    nombre:"Gomitas fresa",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/gomitas%20fresa.jfif?alt=media&token=924940b1-1637-4178-a6ea-29f13f6b5846"
}

let producto10={
    nombre:"Gomitas gusnaito",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/gomitas%20gusanito.jfif?alt=media&token=af180b55-b286-4de0-aeb4-17fc6d3f8277"
}

let producto11={
    nombre:"Bolas de chocolate blanco",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/bolitas%20de%20chocolate%20blanco.jfif?alt=media&token=f3845bd0-5664-4204-9bed-61d633f911ff"
}

let producto12={
    nombre:"Bolas de chocolate",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-5dedd.appspot.com/o/bolitas%20de%20chocolate%20negro.jfif?alt=media&token=e72884df-2ab7-49a4-80d8-ed732c4d5af6"
}

let producto13={
    nombre:"Hersheys",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto14={
    nombre:"producto14",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto16={
    nombre:"producto16",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto17={
    nombre:"producto17",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto18={
    nombre:"producto18",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto19={
    nombre:"producto19",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto20={
    nombre:"producto20",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
    producto17,
    producto18,
    producto19,
    producto20,
)

//RECORRO EL ARREGLO
let contenedor=document.getElementById("contenedor")
productos.forEach(function(producto){
    
    let foto=document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=producto.foto
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")


    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)

})

