var playlist = [{
    sources: [{
      src: 'https://www.youtube.com/watch?v=aEdZzVTfhyE&t',
      type: 'video/youtube'
    }],
    poster: 'http://mundoejecutivoexpress.mx/sites/default/files/imagecache/nota_completa/panel_de_ti.jpg',
    thumbnail: 'http://mundoejecutivoexpress.mx/sites/default/files/imagecache/nota_completa/panel_de_ti.jpg',
    name: "OPENING",
    description: "Este año distintos expertos analizarán las áreas de oportunidad de algunas de las industrias con mayor crecimiento de la economía."
  }, {
    
    sources: [{
      type: "video/youtube",
      src: "https://www.youtube.com/embed/nEX6nBTOFqo"
    }],
    poster:'https://i.ytimg.com/vi/P9B6OkgewnU/maxresdefault.jpg',
    thumbnail: 'https://i.ytimg.com/vi/P9B6OkgewnU/maxresdefault.jpg',
    name: 'CUMBRE LAS 1000 EMPRESAS MÁS IMPORTANTES DE MÉXICO 2017',
    description: "Grupo Mundo Ejecutivo comparte con usted la realización de la 3ª CUMBRE DE LAS 1000 EMPRESAS MÁS IMPORTANTES DE MÉXICO. El evento es privado y por invitación para los Presidentes y Directores generales del ranking económico más relevante de nuestro país, ya que las empresas listadas representan el 65% del PIB, y sus activos sumados alcanzan 30 billones 3444 mil millones de dólares. Al evento asisten representantes de los 14 sectores económicos estratégicos que generan el 40% de las remuneraciones totales del sector laboral formal de México."
  }, {
    sources: [{
      src: 'https://www.youtube.com/watch?v=11DYN6wGdes',
      type: 'video/youtube'
    }],
    poster: 'https://i.ytimg.com/vi/hQJpujLfg94/maxresdefault.jpg',
    thumbnail: 'https://i.ytimg.com/vi/hQJpujLfg94/maxresdefault.jpg',
    name: "¿CÓMO HA CAMBIADO EL CAMPO MEXICANO?",
    description: "José Calzada Rovirosa, Secretario de Agricultura, Ganadería, Desarrollo Rural, Pesca y Alimentación (SAGARPA), mencionó que la historia del éxito del campo mexicano comenzó con la firma del Tratado de Libre Comercio de América del Norte (TLCAN), es por eso que hoy en día México es el 12° productor de alimentos a nivel mundial..."
  
  }, {
    sources: [{
      src: 'https://www.youtube.com/watch?v=J8Dq7Frdyik',
      type: 'video/youtube'
    }],
    poster: 'http://mundoejecutivo.com.mx/sites/default/files/styles/large/public/candiani_1000.jpg?itok=iQWYko7g',
    thumbnail: 'http://mundoejecutivo.com.mx/sites/default/files/styles/large/public/candiani_1000.jpg?itok=iQWYko7g',
    name: "ESPECIAL FINANZAS",
    description: "Financiero, panel que tuvo la intervención de Santiago Urquiza, Presidente y Director General de CENCOR, Ary Naïm, Country Manager en México de la IFC; Luis Solórzano, Socio y Managing Director de Advent International y Daniel Becker Feldman, Presidente y Director General del Grupo Financiero Mifel; llegaron a la conclusión que aunque el peso mexicano perdió fortaleza al alcanzar su nivel histórico más débil frente al dólar, la solidez del sector lo mantiene con buenos números. Hoy las empresas buscan alternativas eficientes para financiarse."
  }, {
    sources: [{
      src: 'https://www.youtube.com/watch?v=zeUuiL3PMIc',
      type: 'video/youtube'
    }],
    poster: 'https://i.ytimg.com/vi/J8Dq7Frdyik/maxresdefault.jpg',
    thumbnail: 'https://i.ytimg.com/vi/J8Dq7Frdyik/maxresdefault.jpg',
    name: "ESPECIAL TURISMO",
    description: "Panel de Turismo, con la participación especial de Enrique de la Madrid Cordero, Secretario de Turismo; Andrés Conesa Labastida, Director General de Aeroméxico; Carlos Constandse Madrazo, Vicepresidente de Experiencias Xcaret y Alejandro Zozaya Gorostiza, CEO de Apple Leisure Group; quienes señalaron que México atraviesa un gran momento, de ahí es tan relevante para el gobierno atraer más visitantes internacionales y aumentar el flujo de mexicanos."
  }];
  var player = videojs(document.getElementById('video-js-player'));
  var description = document.querySelector('[data-video-js-description]')
  var title = document.querySelector('[data-video-js-title]')
  
  player.on('loadedmetadata', function() {
    i = player.playlist.currentItem()
    var title_text = playlist[i].name || " ";
    var description_text = playlist[i].description || " ";
    title.textContent = title_text;
    description.textContent = description_text;
  });
  
  player.playlist(playlist);
  player.playlist.autoadvance(0);
  player.playlistUi();
  
  // player.on('beforeplaylistitem', function() {
  //   description.textContent = "hi" + player.playlist.currentItem();
  // });
  // player.on('playlistitem', function() {
  //   description.textContent = "hi" + player.playlist.currentItem();
  // });