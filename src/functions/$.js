/* 
  Estas funciones son auxiliares.
*/

/* Obtiene el ide de un elemento */
const $ = getId => {
  return document.getElementById(getId)
}
export default $

/* Obtine todos los hijos de un elemento */
const $selectorAll = getElement => {
  return document.querySelectorAll(getElement)
}
/* devolvera la funcion de document.getElementById().classList */
const $classList = getId => {
  return $(getId).classList
}

const $style = getId => {
  return $(getId).style
}

const $styleText = getId => {
  return $(getId).style.cssText
}
/* La siguiente funcion esta pensada para obtener los ID de los 
  elementos de un padre y devolberla como un arreglo */
/* const $selectorAllId = (getElement) =>{} */

/* Permite retirar una clase u añade otra (al mismo elemento) */
const $alternalClass = (getId, aRemover, aAdd) => {
  const id = $classList(getId)

  /* Clase a remover */
  if (id.contains(aRemover)) {
    id.remove(aRemover)
    id.add(aAdd)
  } else {
    id.add(aRemover)
    id.remove(aAdd)
  }
}

/* Oculta los elementos del dom */
const $fadeOut = getId => {
  const id = $(getId)

  id.style.opacity = 1
  ;(function fade() {
    if ((id.style.opacity -= 0.1) < 0) {
      id.style.display = "none"
    } else {
      requestAnimationFrame(fade)
    }
  })()
}

/* Mostrar un elemento del dom */
const $fadeIn = (getId, display) => {
  const id = $(getId)
  id.style.opacity = 0
  id.style.display = display || "block"
  ;(function fade() {
    var val = parseFloat(id.style.opacity)
    if (!((val += 0.1) > 1)) {
      id.style.opacity = val
      requestAnimationFrame(fade)
    }
  })()
}
/* Oculta el elemento si es visibe y lo muestra si es invisibl */
const $toogleFade = (id, display = "block") => {
  if ($(id).style.display === "none") {
    $fadeIn(id)
  } else {
    $fadeOut(id, display)
  }
}

/* devuelve un numero rando | el primer valor que resive es en numero minimo al que puede devolver y el segundo sera el maximo valor que podra regresar*/

const $random = (iniciaEn, terminaEn) => {
  return Math.floor(Math.random() * (iniciaEn - terminaEn) + terminaEn)
}

/* organizar un arreglo numerico de nenor a mayor */
const $sortNumbers = numbers => {
  return numbers.sort((a, b) => {
    return a - b
  })
}

/* Simplemente envia un console.log */
const log = (
  mensaje = "Ya llegamos aqui!!!",
  style = `background-color: #fff; color: #101010; font-size: 16px;font-weight: bold; font-family: Lato; padding:5px 10px;border-radius: 4px`
) => {
  return console.log(`%c${mensaje}`, style)
}

const $contains = (ids, clase) => {
  return $(ids).classList.contains(clase)
}

const $all = search => {
  return document.querySelectorAll(search)
}

const $toggle = (id, css) => {
  return $classList(id).toggle(css)
}

/* Expreciones regulares */
const $quitarAcentos = cadena => {
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  }
  return cadena
    .split("")
    .map(letra => acentos[letra] || letra)
    .join("")
    .toString()
}

export {
  $alternalClass,
  $fadeOut,
  $fadeIn,
  $toogleFade,
  $selectorAll,
  $classList,
  $style,
  $styleText,
  $random,
  $sortNumbers,
  $contains,
  log,
  $all,
  $toggle,
  $quitarAcentos,
}

/* interface $Props {
  getId: string
}

const $: any = ({ getId }: $Props) => {
  return document.getElementById(getId)
}

export default $


interface $selectorAllProps {
  getElement: string
}

const $selectorAll: object = ({ getElement }: $selectorAllProps) => {
  return document.querySelectorAll(getElement)
}


interface $classListProps {
  getId: string
}
const $classList: any = ({ getId }: $classListProps) => {
  return $(getId).classList
}

interface $styleProps {
  getId: string
}

const $style: any = ({ getId }: $styleProps) => {
  return $(getId).style
}

interface $styleTextProps {
  getId: string
}

const $styleText: any = ({ getId }: $styleTextProps) => {
  return $(getId).style.cssText
}
 */
