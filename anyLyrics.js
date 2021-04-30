function finalSearch() {
  
  // getting artiist nam
  let artist = document.getElementById('artist').value;
  
  // getting song name
  let song = document.getElementById('song').value;
  
// lyrics.ovh public api url (no needed api key or registration)
  let url = `https://api.lyrics.ovh/v1/${artist}/${song}`
  
// fetching data from api and if not then printing error
function getLyrics(data) {
  let showLyrics = document.getElementById('showLyrics');
  showLyrics.innerText = data.lyrics
}
  fetch(url).then(response => response.json()).then(getLyrics).catch((err)=>console.log(err))
  
}
