'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			movies: _this.props.movies
		};
		return _this;
	}
	//add button


	_createClass(App, [{
		key: 'addMovie',
		value: function addMovie(value) {
			if (value === '') {
				this.setState({
					movies: [{ title: 'Oops I do not think you entered a movie title - Try again!' }]
				});
			} else {
				this.state.movies.push({ title: value });
			}

			$.ajax({
				type: 'POST',
				url: '/movies',
				data: { value: value },
				success: function success(data) {
					console.log('enters sucess on POST on client');
				},
				error: function error(_error) {
					console.log('error in client', _error);
				}
			});
		}

		//search button

	}, {
		key: 'handleClick',
		value: function handleClick(value) {
			for (var i = 0; i < this.state.movies.length; i++) {
				if (this.state.movies[i].title.toUpperCase() === value.toUpperCase()) {
					this.setState({
						movies: [this.state.movies[i]]
					});
					return;
				} else {
					this.setState({
						movies: [{ title: 'Movie Not Found -- Please refresh and Try Again!' }]
					});
				}
			}

			// $.ajax({
			// 	type: 'GET',
			// 	url: '/movies',
			// 	dataType: 'application/json',
			// 	sucess: (data) => {

			// 		console.log('enters sucess', data)

			// 		// this.setState({
			// 		// 	movies: data
			// 		// })
			// 	},
			// 	error: (error) => {
			// 		console.log('error in GET CLIENT',error)
			// 	}
			// })

			axios.get('/movies').then(function (data) {
				console.log('it works', data);
			});
		}

		// onlyWatchedMovies() {
		// 	var watchedMovies= []
		// 	console.log(this.state.movies[0])
		// 	for(var i = 0; i < this.state.movies; i++) {
		// 		console.log(this.state.movies[i].toggle)
		// 		if(this.state.movies[i][toggle]) {
		// 			watchedMovies.push(this.state.movies[i])
		// 		}
		// 	}
		// 	this.setState({
		// 		movies: watchedMovies

		// 	})
		// }

		// onlyToWatchMovies() {

		// }

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					' Feel free to add movies to our list here! '
				),
				React.createElement(Add, { addMovie: this.addMovie.bind(this) }),
				React.createElement(
					'h2',
					null,
					' Have a movie in mind?'
				),
				React.createElement(
					'h3',
					null,
					' Check here to see if we have it in our list! '
				),
				React.createElement(Search, { handleClick: this.handleClick.bind(this), movie: this.state.movies }),
				React.createElement(MovieList, { movie: this.state.movies }),
				React.createElement('div', { className: 'newMovies' }),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							location.reload();
						} },
					'Refresh Page'
				),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							_this2.onlyWatchedMovies();
						} },
					' Watched Movies'
				),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							_this2.onlyToWatchMovies();
						} },
					' Movies To Watch'
				)
			);
		}
	}]);

	return App;
}(React.Component);

// module.exports = App
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aXRsZSIsInB1c2giLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImkiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImFkZE1vdmllIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUZrQjtBQUtsQjtBQUNEOzs7OzsyQkFDU0MsSyxFQUFPO0FBQ2YsT0FBR0EsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNiRixhQUFRLENBQUMsRUFBQ0csT0FBTyw0REFBUixFQUFEO0FBREssS0FBZDtBQUdBLElBSkQsTUFJTztBQUNOLFNBQUtKLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkksSUFBbEIsQ0FBdUIsRUFBQ0QsT0FBT0YsS0FBUixFQUF2QjtBQUNBOztBQUVESSxLQUFFQyxJQUFGLENBQU87QUFDTkMsVUFBTSxNQURBO0FBRU5DLFNBQUssU0FGQztBQUdOQyxVQUFNLEVBQUNSLFlBQUQsRUFIQTtBQUlOUyxhQUFTLGlCQUFDRCxJQUFELEVBQVU7QUFDbEJFLGFBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBLEtBTks7QUFPTkMsV0FBTyxlQUFDQSxNQUFELEVBQVc7QUFDakJGLGFBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkMsTUFBL0I7QUFDQTtBQVRLLElBQVA7QUFXQTs7QUFFRDs7Ozs4QkFDWVosSyxFQUFPO0FBQ2xCLFFBQUksSUFBSWEsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS2YsS0FBTCxDQUFXQyxNQUFYLENBQWtCZSxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakQsUUFBRyxLQUFLZixLQUFMLENBQVdDLE1BQVgsQ0FBa0JjLENBQWxCLEVBQXFCWCxLQUFyQixDQUEyQmEsV0FBM0IsT0FBNkNmLE1BQU1lLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS2QsUUFBTCxDQUFjO0FBQ2JGLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JjLENBQWxCLENBQUQ7QUFESyxNQUFkO0FBR0E7QUFFQSxLQU5ELE1BTU87QUFDTixVQUFLWixRQUFMLENBQWM7QUFDYkYsY0FBUSxDQUFDLEVBQUNHLE9BQU8sa0RBQVIsRUFBRDtBQURLLE1BQWQ7QUFHQTtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWMsU0FBTUMsR0FBTixDQUFVLFNBQVYsRUFDQ0MsSUFERCxDQUNNLFVBQUNWLElBQUQsRUFBUztBQUNkRSxZQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkgsSUFBeEI7QUFDQSxJQUhEO0FBSUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7OzJCQUVTO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyx3QkFBQyxHQUFELElBQUssVUFBVSxLQUFLVyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBZixHQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpEO0FBS0Msd0JBQUMsTUFBRCxJQUFRLGFBQWEsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsRUFBa0QsT0FBUSxLQUFLdEIsS0FBTCxDQUFXQyxNQUFyRSxHQUxEO0FBTUMsd0JBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxNQUE3QixHQU5EO0FBT0MsaUNBQUssV0FBVSxXQUFmLEdBUEQ7QUFRQztBQUFBO0FBQUEsT0FBUSxTQUFTLG1CQUFLO0FBQUN1QixnQkFBU0MsTUFBVDtBQUFrQixPQUF6QztBQUFBO0FBQUEsS0FSRDtBQVNDO0FBQUE7QUFBQSxPQUFRLFNBQVUsbUJBQU07QUFBQyxjQUFLQyxpQkFBTDtBQUF5QixPQUFsRDtBQUFBO0FBQUEsS0FURDtBQVVDO0FBQUE7QUFBQSxPQUFRLFNBQVUsbUJBQU07QUFBQyxjQUFLQyxpQkFBTDtBQUF5QixPQUFsRDtBQUFBO0FBQUE7QUFWRCxJQUREO0FBY0E7Ozs7RUF2R2dCQyxNQUFNQyxTOztBQTBHeEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcblx0XHR9XG5cdH1cblx0Ly9hZGQgYnV0dG9uXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IHZhbHVlfSlcblx0XHR9XG5cdFx0XG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdHVybDogJy9tb3ZpZXMnLFxuXHRcdFx0ZGF0YToge3ZhbHVlfSxcblx0XHRcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlbnRlcnMgc3VjZXNzIG9uIFBPU1Qgb24gY2xpZW50Jylcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBpbiBjbGllbnQnLCBlcnJvcilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cdFxuXHQvL3NlYXJjaCBidXR0b25cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbdGhpcy5zdGF0ZS5tb3ZpZXNbaV1dXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gJC5hamF4KHtcblx0XHQvLyBcdHR5cGU6ICdHRVQnLFxuXHRcdC8vIFx0dXJsOiAnL21vdmllcycsXG5cdFx0Ly8gXHRkYXRhVHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdC8vIFx0c3VjZXNzOiAoZGF0YSkgPT4ge1xuXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdlbnRlcnMgc3VjZXNzJywgZGF0YSlcblxuXHRcdC8vIFx0XHQvLyB0aGlzLnNldFN0YXRlKHtcblx0XHQvLyBcdFx0Ly8gXHRtb3ZpZXM6IGRhdGFcblx0XHQvLyBcdFx0Ly8gfSlcblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRlcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdlcnJvciBpbiBHRVQgQ0xJRU5UJyxlcnJvcilcblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXG5cdFx0YXhpb3MuZ2V0KCcvbW92aWVzJylcblx0XHQudGhlbigoZGF0YSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaXQgd29ya3MnLCBkYXRhKVxuXHRcdH0pXG5cdH0gXG5cblx0Ly8gb25seVdhdGNoZWRNb3ZpZXMoKSB7XG5cdC8vIFx0dmFyIHdhdGNoZWRNb3ZpZXM9IFtdXG5cdC8vIFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXNbMF0pXG5cdC8vIFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzOyBpKyspIHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzW2ldLnRvZ2dsZSlcblx0Ly8gXHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldW3RvZ2dsZV0pIHtcblx0Ly8gXHRcdFx0d2F0Y2hlZE1vdmllcy5wdXNoKHRoaXMuc3RhdGUubW92aWVzW2ldKVxuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdG1vdmllczogd2F0Y2hlZE1vdmllc1xuXHRcdFxuXHQvLyBcdH0pXG5cdC8vIH1cblxuXHQvLyBvbmx5VG9XYXRjaE1vdmllcygpIHtcblxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+IEZlZWwgZnJlZSB0byBhZGQgbW92aWVzIHRvIG91ciBsaXN0IGhlcmUhIDwvaDI+XG5cdFx0XHRcdDxBZGQgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8aDI+IEhhdmUgYSBtb3ZpZSBpbiBtaW5kPzwvaDI+XG5cdFx0XHRcdDxoMz4gQ2hlY2sgaGVyZSB0byBzZWUgaWYgd2UgaGF2ZSBpdCBpbiBvdXIgbGlzdCEgPC9oMz5cblx0XHRcdFx0PFNlYXJjaCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSBtb3ZpZT0ge3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWU9e3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdNb3ZpZXMnPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlXYXRjaGVkTW92aWVzKCl9fT4gV2F0Y2hlZCBNb3ZpZXM8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVRvV2F0Y2hNb3ZpZXMoKX19PiBNb3ZpZXMgVG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2Plx0XG5cdFx0KVxuXHR9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwIl19