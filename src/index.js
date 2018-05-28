var movies = [
  {Title: 'Mean Girls', Year: 2004, Rating: 6.2},
  {Title: 'Hackers', Year: 1993, Rating: 6.5},
  {Title: 'The Grey', Year: 1970, Rating: 7.2},
  {Title: 'Sunshine', Year: 2007, Rating: 8.5}, 
  {Title: 'Ex Machina', Year: 2003, Rating: 9.2},
];


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));