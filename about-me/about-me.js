async function loadChessRatings() {
  try {
    const res = await fetch('https://api.chess.com/pub/player/rampaging_king/stats');
    const data = await res.json();

    document.getElementById('chess-rapid').textContent = data.chess_rapid?.last?.rating ?? 'N/A';
    document.getElementById('chess-blitz').textContent = data.chess_blitz?.last?.rating ?? 'N/A';
    document.getElementById('chess-bullet').textContent = data.chess_bullet?.last?.rating ?? 'N/A';
    document.getElementById('chess-daily').textContent = data.chess_daily?.last?.rating ?? 'N/A';

  } catch (err) {
    document.getElementById('elo').textContent = 'N/A'
  }
}



async function loadLichessRatings() {
  try {
    const res = await fetch('https://lichess.org/api/user/SupersonicChessKing');
    const data = await res.json();

    document.getElementById('lichess-rapid').textContent = data.perfs?.rapid?.rating ?? 'N/A';
    document.getElementById('lichess-blitz').textContent = data.perfs?.blitz?.rating ?? 'N/A';
    document.getElementById('lichess-bullet').textContent = data.perfs?.bullet?.rating ?? 'N/A';
    document.getElementById('lichess-classical').textContent = data.perfs?.classical?.rating ?? 'N/A';

  } catch (err) {
    document.getElementById('lichess-rapid').textContent = 'N/A'
    document.getElementById('lichess-blitz').textContent = 'N/A'
    document.getElementById('lichess-bullet').textContent = 'N/A'
    document.getElementById('lichess-classical').textContent = 'N/A'
  }
}

loadLichessRatings();
loadChessRatings();