document.getElementById("links").innerHTML=`
        <div>
            <a class="nav" href="./index.html">HOME</a>
        </div>
        <div>
            <a class="nav" href="./cursos.html">CURSOS</a>
        </div>
        <div>
            <a class="nav" href="./inscripcion.html">INSCRIPCIÓN</a>
        </div>
        <div>
            <a class="nav" href="./sucursales.html">SUCURSALES</a>
        </div>
        <div>
            <a class="nav" href="./contacto.html">CONTACTO</a>
        </div>`

document.getElementById("footer").innerHTML=`
<nav>
    <p>Redes Sociales</p>
    <a href="https://www.facebook.com/">
    <i class="fa-brands fa-facebook-square fa-lg"></i>
    </a>
    <a href="https://twitter.com/home">
    <i class="fa-brands fa-twitter-square fa-lg"></i>
    </a>
    <a href="https://www.youtube.com/">
    <i class="fa-brands fa-youtube-square fa-lg"></i>
    </a>
    <a href="https://www.instagram.com/">
    <i class="fa-brands fa-instagram-square fa-lg"></i>
    </a>
    <a href="https://www.linkedin.com/">
    <i class="fa-brands fa-linkedin fa-lg"></i>
    </a>
</nav>
<p>Derechos Reservados - 2022 - Marcelo Baranowski - República Argentina</p>`


function validarcontacto() {
  let n = document.forms["contacto"]["nombre"].value;
  if (n == "") {
    alert("Debe ingresar su nombre");
    return false;
  }
  let a = document.forms["contacto"]["apellido"].value;
  if (a == "") {
    alert("Debe ingresar su apellido");
    return false;
  }
  let e = document.forms["contacto"]["email"].value;
  if (e == "") {
    alert("Debe ingresar su email");
    return false;
  }
  let c = document.forms["contacto"]["texto"].value;
  if (c == "") {
    alert("Debe ingresar su mensaje");
    return false;
  }
}






