function getElements(category, subcat){
  var inner_html = ``;
  var jsonPreview = require('./previewDetails.json');
  for(var element in jsonPreview[category][subcat]) {
    let game = jsonPreview[category][subcat][element];

    let name = game['name'];
    let price = game['price'];
    let img = game['imgLink'];
    let image = `/preview/${element}.jpg`;
    var platform = ``;
    if (typeof(game['platforms'])=='string') {
      let platformImg = `/${game['platforms']}.svg`;
      platform = `<img class="platform" src =${platformImg} alt=${game['platforms']}/>`
    }
    else {
      for(var logo in game['platforms']) {
        let platformImg = `/${game['platforms'][logo]}.svg`;
        platform+= `<img class="platform" src = ${platformImg} alt=${game['platforms'][logo]}/>`
      }
    }

    var str = `
    <div class="box_element"  onClick="location.href='/content?id=${element}';">
    <strong>${name}</strong>
    <div class="poster"><img src=${image} alt=${img}/></div>
    <div class="platforms">Platforms: ${platform}</div>
    <p>Price: ${price}</p>`;
    var end = '</div>';
    let tag = ``;

    if(subcat != 'Top Sellers') {

      if (typeof(game['tags'])=='string') {
        tag = `<span class='tag_element'>${game['tags']}</span>`;

      }
      else {
        let ta = `${game['tags'][0]}`;
        for(var logo=1;logo<game['tags'].length-1;logo+=1) {
          ta += `, ${game['tags'][logo]}`;
        }
        tag = `<span class='tag_element'>${ta}</span>`;
      }
      end = `<p id="tag_element">Tags: ${tag}</p></div>`;
    }

    inner_html +=('</br>'+ str+end);
  }
  return (inner_html);

};

export default getElements;
