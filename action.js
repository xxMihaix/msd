/*
document.addEventListener('DOMContentLoaded', function(){

    const menuIcon = document.getElementById('menu');
    const menuContainer = document.getElementById('mobile-menu')
    menuIcon.addEventListener('click', function(){
        menuContainer.classList.toggle('active');
    })
})*/

document.addEventListener('DOMContentLoaded', function(){
    let proiecte = [
        {id: 1, title: '🌾 Pachetul cu alimente', des: 'Sprijinirea persoanelor și copiilor aflați în dificultate. Cu ajutorul lui Dumnezeu și prin implicarea voluntarilor, am reușit să distribuim peste 1000 de pachete cu alimente esențiale. Fiecare pachet a adus nu doar hrană, ci și speranță și mângâiere în sufletele celor care trec prin momente grele.', image: 'images/proiecte/Pachetul cu alimente.png'},
        {id: 2, title: '🎁 Cadouri', des: 'O adevărată lucrare a bucuriei. Cu ajutorul lui Dumnezeu, am oferit peste 600 de cadouri copiilor din familii defavorizate, aducând zâmbete și emoție în preajma sărbătorilor. Fiecare dar a fost un semn al dragostei și al grijii pe care Dumnezeu o are pentru fiecare copil.', image: 'images/proiecte/Cadouri.png'},
        {id: 3, title: '🍲 O masă caldă', des: 'Am pregătit și oferit mese calde persoanelor fără adăpost și copiilor nevoiași. Fiecare masă a fost un moment de alinare și de recunoștință, o dovadă că bunătatea și credința pot schimba vieți.', image: 'images/proiecte/O masă caldă.png'},
        {id: 4, title: '🏕️ Tabăra de zi', des: 'O binecuvântare pentru copiii defavorizați. Cu ajutorul lui Dumnezeu, i-am spălat, i-am îmbrăcat, le-am oferit hrană și, cel mai important, ne-am jucat și am petrecut timp de calitate împreună. A fost o zi plină de râsete, iubire și speranță — o zi în care copiii au simțit dragostea lui Dumnezeu prin faptele noastre.', image: 'images/proiecte/Tabăra de zi.png'},
        {id: 5, title: '👕 Haine', des: 'Am reușit să oferim peste 500 de saci cu haine celor aflați în nevoie. Pentru mulți, aceste haine au însemnat protecție împotriva frigului, dar și dovada că Dumnezeu lucrează prin oameni.', image: 'images/proiecte/Haine.png'},
        {id: 6, title: '🍯 Borcanul cu gem', des: 'Am pregătit peste 1700 de borcane cu gem, oferite familiilor nevoiașe. Fiecare borcan a fost făcut cu dragoste, simbolizând dulceața generozității și grija față de aproapele nostru.', image: 'images/proiecte/Borcanul cu gem.png'},
        {id: 7, title: '🎒 Ghiozdane', des: ' Am oferit peste 600 de ghiozdane complet echipate copiilor defavorizați. Dorința noastră este ca fiecare copil să aibă șansa la educație, iar prin aceste daruri, Dumnezeu a lucrat pentru a le deschide drumul spre un viitor mai bun.', image: 'images/proiecte/Ghiozdane.png'},
        {id: 8, title: '📖 Biblii', des: 'Am distribuit peste 500 de Biblii persoanelor care aveau nevoie de lumină și îndrumare spirituală. Cu ajutorul lui Dumnezeu, am putut răspândi Cuvântul Său și amintirea faptului că El este speranța și tăria noastră în orice vreme.', image: 'images/proiecte/Biblii.png'},
        {id: 9, title: '🚲 Biciclete', des: 'Am adus bucurie copiilor care nu aveau una. Cu ajutorul lui Dumnezeu, am oferit biciclete care au devenit pentru acești copii un simbol al libertății și al copilăriei fericite.', image: 'images/proiecte/Biciclete.png'},
        {id: 10, title: '🏠 Casa', des: 'Unul dintre cele mai emoționante proiecte este „Casa”. Cu ajutorul lui Dumnezeu, am construit o locuință pentru o familie extrem de defavorizată. A fost o lucrare făcută din inimă, în care am văzut cum Dumnezeu lucrează prin oameni pentru a aduce speranță, siguranță și dragoste într-un cămin.', image: 'images/proiecte/Casa.png'},
        {id: 11,  title: '🥔 Cartofi', des: 'Continuăm să oferim sprijin alimentar familiilor nevoiașe, distribuind cartofi în comunitățile vulnerabile. Un gest simplu, dar plin de binecuvântare, care le ușurează viața celor aflați în lipsuri.', image: 'images/proiecte/Cartofi.png'},
        {id: 12,  title: '🏗️ Hala (în desfășurare)', des: ' Ne aflăm în plin proces de construcție a unei hale, care va deveni un centru pentru pregătirea și depozitarea pachetelor umanitare. Credem că această hală va fi o binecuvântare, un loc din care vor pleca multe fapte bune și speranță pentru oameni.', image: 'images/proiecte/Hala.png'},
        {id: 13,  title: '🔥 Fii și tu căldură în casa cuiva', des: 'Ne propunem să strângem fonduri pentru un camion de lemne, pentru a aduce căldură în casele și inimile persoanelor defavorizate. Prin acest proiect, dorim să fim mâinile prin care Dumnezeu lucrează și aduce lumină acolo unde e frig și întuneric.', image: 'images/proiecte/fii.png'},
    ]

    const proiecteContainer = document.getElementById('project-container-all');
    proiecteContainer.innerHTML = '';
    proiecte.forEach(proiect => {
        const pr = `<div id='pr${proiect.id}' class="project-container">
                        <div class="img-back">
                            <img src='${proiect.image}'>
                        </div>
                        <div class="proj-info">
                            <div class="part1-info">
                                <p>${proiect.title}</p>
                            </div>
                            <div class="part2-info">
                                <div class='inf2-1'><p>${proiect.des}</p></div>
                                <div class='inf2-2'><button class="vezi-pr" data-target='${proiect.id - 1}'>Vezi <span> ↗</span></button></div>
                            </div>
                        </div>
                    </div>`;

        proiecteContainer.innerHTML += pr;
    })

    const vezi = document.querySelectorAll('.vezi-pr');

    vezi.forEach(btn => {
        const section = btn.dataset.target;
        btn.addEventListener('click', function(){
            console.log(section);
            window.location.href = `proiecte.html#${section}`;23
        })
    })

    const showMore = document.getElementById('show-btn');
    const showContent1 = document.querySelectorAll('#pr1, #pr2, #pr3');
    const showContent2 = document.querySelectorAll('#pr4, #pr5, #pr6');
    const showContent3 = document.querySelectorAll('#pr7, #pr8, #pr9');
    const showContent4 = document.querySelectorAll('#pr10, #pr11, #pr12, #pr13');
    const screenWidth = window.innerWidth;
    let step = 0;

    const allContent = document.querySelectorAll('#pr1, #pr2, #pr3, #pr4, #pr5, #pr6, #pr10, #pr11, #pr12, #pr13');
    allContent.forEach(el => el.style.display = 'none');

    if (screenWidth > 925){
        width925();
    }
    else if (621 < screenWidth && screenWidth <= 925){
        width621();
    }
    else if (screenWidth < 620){
        width620();
    }

    let lastWidth = screenWidth;
    window.addEventListener('resize', function () {
        if (
            (lastWidth <= 620 && window.innerWidth > 620) ||
            (lastWidth <= 925 && window.innerWidth > 925) ||
            (lastWidth > 925 && window.innerWidth <= 925) ||
            (lastWidth > 620 && window.innerWidth <= 620)
        ) {
            location.reload();
        }
    });

    function width925() {
        if (screenWidth > 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function () {
            step++;

            if (step === 1) {
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }
            else if (step === 2) {
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }
            else {
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width621() {
        if (621 < screenWidth && screenWidth < 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2[0].style.display = 'block';

        showMore.addEventListener('click', function (){
            step++;

            if(step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showContent3[0].style.display = 'block';
                showContent3[1].style.display = 'block';
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }

            else{
                showContent2[1].style.display = 'none';
                showContent2[2].style.display = 'none';
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width620() {
        if (screenWidth < 620){
        showContent1.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function(){
            step++;
            console.log(step);

            if (step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 3){
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }
            else{
                showContent2.forEach(el => el.style.display = 'none');
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
})
