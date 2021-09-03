const API_KEY = "bbb3c5956c9ee54b49b8031bbbffd77b";

const requests = {
   getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   getTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   getActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   getRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   getDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
     
}

export default requests;