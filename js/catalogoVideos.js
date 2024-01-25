var listaVideos=[
 {titulo: 'Video 1', descripcion: 'descripcion video 1',url:'https://www.youtube.com/watch?v=odnLWsAe3lM'}, 
 {titulo: 'Video 2', descripcion: 'descripcion video 2',url:'https://www.youtube.com/watch?v=odnLWsAe3lM'},
 {titulo: 'Video 3', descripcion: 'descripcion video 3',url:'https://www.youtube.com/watch?v=odnLWsAe3lM'}  
];

var catalogovideos= document.getElementById("cat");


function buscarVideos() {
    var contenidoBuscar=document.getElementById('buscar').value;
  
    var videosbuscados=listaVideos.filter(
        function(indexVideo){
            return indexVideo.titulo.includes(contenidoBuscar);
        }
    );
    mostrarcatalogovideos(videosbuscados);
}


function mostrarcatalogovideos(videosmostrados) {

    catalogovideos.innerHTML='';

    videosmostrados.forEach(function(indexVideo) {

        var filvideo=document.createElement('div');

        var col1video=document.createElement('div');
        var urlvideo = document.createElement('video');

        filvideo.setAttribute('class','row mt-5');
        col1video.setAttribute('class','col');

        urlvideo.setAttribute('src',indexVideo.url);
        urlvideo.setAttribute('width','400px');
        urlvideo.setAttribute('controls','');

        col1video.appendChild(urlvideo);
        filvideo.appendChild(col1video);

         var col2Titulo= document.createElement('div');

         var h4Titulo = document.createElement('h4');

         var h6descripcion = document.createElement('h6');

         col2Titulo.setAttribute('class','col');

         h4Titulo.textContent = indexVideo.titulo;

         h6descripcion.textContent=indexVideo.descripcion;

         col2Titulo.appendChild(h4Titulo);
         col2Titulo.appendChild(h6descripcion);
         filvideo.appendChild(col2Titulo);



        catalogovideos.appendChild(filvideo);

        var col3incono = document.createElement('div');
        var svg = document.createElement('svg');
        var path = document.createElement('path');
        
        col3incono.setAttribute('class', 'col');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', '32');
        svg.setAttribute('height', '32');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('class', 'bi bi-heart');
        svg.setAttribute('viewBox', '0 0 16 16');
        
        // Añadir el atributo 'd' al elemento 'path'
        path.setAttribute('d', 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15');
        
        svg.appendChild(path);
        col3incono.appendChild(svg);
        filvideo.appendChild(col3incono);
        

    });
}

mostrarcatalogovideos(listaVideos);
