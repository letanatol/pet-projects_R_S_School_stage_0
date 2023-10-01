const inputSearch = document.getElementById('input-search');
const iconCross = document.getElementById('icon-cross');
const iconSearch = document.getElementById('icon-search');
const mainPhotos = document.getElementById('main-photos');


async function getPhotos(query = 'sunset') {
  const url = `https://api.unsplash.com/search/photos?client_id=eQ31g4OVoE2n40OnuWIHfBZ6yw2tHPnJ85C-QC6waoQ&per_page=9&orientation=landscape&query=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const photos = data.results;
    showPhotos(photos);
  } catch (error) {
    console.log(error);
  }
}

function showPhotos(photos) {
  photos.map((item) => {
    const div = document.createElement('div');
    div.classList.add('main__photo');
    div.style.backgroundImage = `url(${item.urls.regular})`
    mainPhotos.append(div);
  });
}

window.addEventListener('load', getPhotos());
