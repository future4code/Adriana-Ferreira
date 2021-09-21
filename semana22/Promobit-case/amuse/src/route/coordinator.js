export const goToHome = (history) => {
   history.push("/");
};

export const goToMovieDetails = (history) => {
   history.push("/movie/:id");
};

export const goToCategories = (history) => {
   history.push("/genre/movie/list");
};

