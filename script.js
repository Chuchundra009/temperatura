let cities = ['Москва', 'Питер', 'Саратов', 'Уфа'];

for (let i = 0; i < cities.length; i++) {
    document.getElementById('cities').innerHTML += `
    <p>температура в ${cities[i]} <span id="city${i}">0</span>С°</p>
    `;
}

document.body.addEventListener('click', () => {
    let tmin = 666, tmax = -666;
    for (let i = 0; i < cities.length; i++) {
        let temp = prompt('температура в ' + cities[i]);
        document.getElementById(`city${i}`).innerHTML = temp;
        tmin = Math.min(temp, tmin);
        tmax = Math.max(temp, tmax);
    }
    document.getElementById('tmin').innerHTML = tmin;
    document.getElementById('tmax').innerHTML = tmax;
});