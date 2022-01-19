const showMap = document.querySelector('#map-show');
const blockMap = document.querySelector('.map-block');


showMap.addEventListener('click', function() {
    const map = document.querySelector('#map');
    let text1 = showMap.textContent || showMap.innerText;
    let text2 = 'Свернуть карту';

    if(!map) {
        blockMap.insertAdjacentHTML('afterBegin', '<iframe id="map" class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f2a269e14ec12052b07163e6fdc0ff7afd3251c551f66b2fa4dc1691272cefb&amp;source=constructor"></iframe>');

        showMap.classList.toggle('active');
        showMap.textContent = text2;
    } else {
        map.classList.toggle('active');
        if (text1 != text2) {
            showMap.textContent = text2;
        } else {
            showMap.textContent = 'Посмотреть на карте';
        }
    }
});