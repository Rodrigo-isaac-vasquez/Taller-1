class Book{
    book(){
        this.ID = "";
        this.titulo = "";
        this.nombreAutor = "";
        this.apeAutor = "";
        this.categoria = "";
        this.precio = "";
    }
    
    setTitulo (titulo){
        this.titulo = titulo;
    }

    getTitulo (){
        return this.titulo;
    }

    setNombreAutor (nombreAutor){
        this.nombreAutor = nombreAutor;
    }

    getNombreAutor (){
        return this.nombreAutor;
    }

    setApeAutor (apeAutor){
        this.apeAutor = apeAutor;
    }

    getApeAutor (){
        return this.apeAutor;
    }

    setCategoria (categoria){
        this.categoria = categoria;
    }

    getCategoria (){
        return this.categoria;
    }

    setPrecio (precio){
        this.precio = precio;
    }

    getPrecio (){
        return this.precio;
    }
}
   function iniciar(){
    var showinfo = document.getElementById("mostrar");
    if(showinfo.addEventListener){
    showinfo.addEventListener("click", function(){
    createObject(document.frmbook);
    }, false);
    }
    else if(showinfo.attachEvent){
    showinfo.attachEvent("onclick", function(){
    createObject(document.frmbook);
    });
    }
   }
   function createObject(form){
    const book = new Book();
    book.setTitulo (form.txttitulo.value);
    book.setNombreAutor (form.txtnombreAutor.value);
    book.setApeAutor (form.txtapeAutor.value);
    book.setCategoria (form.txtcategoria.value);
    book.setPrecio (form.txtprecio.value);
    showProperties(book, "InfoBook");
   }
   const arrarObjetos = new Array;
   function showProperties(objeto, objName){
    var infBook = "";
    var tblBook = "";
    var info = document.getElementById('infolibro');
    for(var i in objeto){
    infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
    }
    if(!confirm(infBook + "\n\n¿Es esta información correcta?")){
        frmbook.txt_ID.value = "";
        frmbook.txt_titulo.value = "";
        frmbook.txt_nombreAutor.value = "";
        frmbook.txt_apeAutor.value = "";
        frmbook.txt_categoria.value = "";
        frmbook.txt_precio.value = "";
    }
    arrarObjetos.push(objeto);
   
   let id=1;
   let posicion=0;
   
    arrarObjetos.forEach(element => {
    tblBook += "\t<tr>\n";
    tblBook += "\t\t<td>" + id++ + "</td>\n";
    tblBook += "\t\t<td>" + element.getTitulo() + "</td>\n";
    tblBook += "\t\t<td>" + element.getNombreAutor() + "</td>\n";
    tblBook += "\t\t<td>" + element.getApeAutor() + "</td>\n";
    tblBook += "\t\t<td>" + element.getCategoria() + "</td>\n";
    tblBook += "\t\t<td>" + element.getPrecio() + "</td>\n";
    tblBook += "\t\t<td><button onclick='eliminar(" + posicion++ + ")' class='btn btndanger' >Eliminar</button></td>\n";
    tblBook += "\t\t</tr>\n";
    });
   
    info.innerHTML = tblBook;
   }
   function eliminar(valor){
   var confirmacion=confirm("Esta seguro de eliminar este registro id = "+ valor);
   if(confirmacion){
    arrarObjetos.splice(parseInt(valor) , 1);
    var tblBook = "";
    var info = document.getElementById('infolibro');
    let id=1;
    let posicion=0;
    arrarObjetos.forEach(element => {
    tblBook += "\t<tr>\n";
    tblBook += "\t\t<td>" + id++ + "</td>\n";
    tblBook += "\t\t<td>" + element.getTitulo() + "</td>\n";
    tblBook += "\t\t<td>" + element.getNombreAutor() + "</td>\n";
    tblBook += "\t\t<td>" + element.getApeAutor() + "</td>\n";
    tblBook += "\t\t<td>" + element.getCategoria() + "</td>\n";
    tblBook += "\t\t<td>" + element.getPrecio() + "</td>\n";
    tblBook += "\t\t<td><button onclick='eliminar(" + posicion++ + ")' class='btn btndanger' >Eliminar</button></td>\n";
    tblBook += "\t\t</tr>\n";
    });
   
    info.innerHTML = tblBook;
   }
   }
   
   if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
   }
   