const input = document.getElementById('txtBuscar');
const games = document.querySelectorAll('.game-card');
const noResult = document.getElementById('no-results');

input.addEventListener('keyup', function(){

    let ocultos = 0;
    
    games.forEach(function(game){
        const titulo = game.querySelector('h2').textContent.trim().toLowerCase();
        
        if(!titulo.includes(input.value)){
            game.style.display = 'none';
            ocultos += 1;
        }else{
            game.style.display = 'flex';
        }
    });

    if(ocultos == games.length){
        noResult.classList.remove('hidden');
    }else{
        noResult.classList.add('hidden');
    }
})