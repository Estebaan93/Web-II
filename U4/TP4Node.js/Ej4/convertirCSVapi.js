const api='https://ghibliapi.vercel.app/films';


function convertirCSV(movies){
  const headers='Title, fecha\n';
  const rows=movies.map(movie=>`${movie.title},${movie.release_date}`).join('\n');
  return headers+rows;
}

module.exports={convertirCSV,api};
