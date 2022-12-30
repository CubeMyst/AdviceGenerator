let fetchAdvice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json();

    let title = document.getElementById("title");
    title.innerHTML = `Advice #${data.slip.id}`;
    let advice = document.getElementById("advice");
    advice.innerHTML = `"${data.slip.advice}"`;
}

let advice = document.getElementById("advice")
advice = fetchAdvice()

let btn = document.querySelector('.btn');
btn.addEventListener('click', fetchAdvice);