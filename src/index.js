var movies = [
  {title: 'Mean Girls', Year: 1995, Runtime: '107 min', Metascore: 46, imdbRating: 6.2},
  {title: 'Hackers', Year: 1995, Runtime: '107 min', Metascore: 46, imdbRating: 6.2},
  {title: 'The Grey', Year: 1995, Runtime: '107 min', Metascore: 46, imdbRating: 6.2},
  {title: 'Sunshine', Year: 1995, Runtime: '107 min', Metascore: 46, imdbRating: 6.2},
  {title: 'Ex Machina', Year: 1995, Runtime: '107 min', Metascore: 46, imdbRating: 6.2},
];


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));