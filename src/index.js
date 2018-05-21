var movies = [
  {title: 'Mean Girls', Year: 2004, Runtime: '137 min', Metascore: 53, imdbRating: 6.2},
  {title: 'Hackers', Year: 1993, Runtime: '107 min', Metascore: 64, imdbRating: 6.5},
  {title: 'The Grey', Year: 1970, Runtime: '123 min', Metascore: 51, imdbRating: 7.2},
  {title: 'Sunshine', Year: 2007, Runtime: '167 min', Metascore: 43, imdbRating: 8.5}, 
  {title: 'Ex Machina', Year: 2003, Runtime: '1119 min', Metascore: 77, imdbRating: 9.2},
];


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));