'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var React = require('react');


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

	_createClass(App, [{
		key: 'addMovie',
		value: function addMovie(value) {
			if (value === '') {
				this.setState({
					movies: [{ title: 'Oops I do not think you entered a movie title - Try again!' }]
				});
			} else {
				this.state.movies.push({ title: value });
				console.log(this.state.movies);
				//how do you clear the input field after clicking the button?

			}
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aXRsZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9ubHlXYXRjaGVkTW92aWVzIiwib25seVRvV2F0Y2hNb3ZpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUZrQjtBQUtsQjs7OzsyQkFFUUMsSyxFQUFPO0FBQ2YsT0FBR0EsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNiRixhQUFRLENBQUMsRUFBQ0csT0FBTyw0REFBUixFQUFEO0FBREssS0FBZDtBQUdBLElBSkQsTUFJTztBQUNOLFNBQUtKLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkksSUFBbEIsQ0FBdUIsRUFBQ0QsT0FBT0YsS0FBUixFQUF2QjtBQUNBSSxZQUFRQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXQyxNQUF2QjtBQUNBOztBQUdBO0FBQ0Q7Ozs4QkFFV0MsSyxFQUFPO0FBQ2xCLFFBQUksSUFBSU0sSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCUSxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakQsUUFBRyxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLEVBQXFCSixLQUFyQixDQUEyQk0sV0FBM0IsT0FBNkNSLE1BQU1RLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS1AsUUFBTCxDQUFjO0FBQ2JGLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLENBQUQ7QUFESyxNQUFkO0FBR0E7QUFDQSxLQUxELE1BS087QUFDTixVQUFLTCxRQUFMLENBQWM7QUFDYkYsY0FBUSxDQUFDLEVBQUNHLE9BQU8sa0RBQVIsRUFBRDtBQURLLE1BQWQ7QUFHQTtBQUNEO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7OzJCQUVTO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyx3QkFBQyxHQUFELElBQUssVUFBVSxLQUFLTyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBZixHQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpEO0FBS0Msd0JBQUMsTUFBRCxJQUFRLGFBQWEsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsRUFBa0QsT0FBUSxLQUFLWixLQUFMLENBQVdDLE1BQXJFLEdBTEQ7QUFNQyx3QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLRCxLQUFMLENBQVdDLE1BQTdCLEdBTkQ7QUFPQyxpQ0FBSyxXQUFVLFdBQWYsR0FQRDtBQVFDO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ2EsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVkQsSUFERDtBQWNBOzs7O0VBdkVnQkMsTUFBTUMsUzs7QUEwRXhCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bW92aWVzOiB0aGlzLnByb3BzLm1vdmllc1xuXHRcdH1cblx0fVxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IHZhbHVlfSlcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzKVxuXHRcdFx0Ly9ob3cgZG8geW91IGNsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBjbGlja2luZyB0aGUgYnV0dG9uP1xuXHRcdFx0XG5cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gb25seVdhdGNoZWRNb3ZpZXMoKSB7XG5cdC8vIFx0dmFyIHdhdGNoZWRNb3ZpZXM9IFtdXG5cdC8vIFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXNbMF0pXG5cdC8vIFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzOyBpKyspIHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzW2ldLnRvZ2dsZSlcblx0Ly8gXHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldW3RvZ2dsZV0pIHtcblx0Ly8gXHRcdFx0d2F0Y2hlZE1vdmllcy5wdXNoKHRoaXMuc3RhdGUubW92aWVzW2ldKVxuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdG1vdmllczogd2F0Y2hlZE1vdmllc1xuXHRcdFxuXHQvLyBcdH0pXG5cdC8vIH1cblxuXHQvLyBvbmx5VG9XYXRjaE1vdmllcygpIHtcblxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+IEZlZWwgZnJlZSB0byBhZGQgbW92aWVzIHRvIG91ciBsaXN0IGhlcmUhIDwvaDI+XG5cdFx0XHRcdDxBZGQgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8aDI+IEhhdmUgYSBtb3ZpZSBpbiBtaW5kPzwvaDI+XG5cdFx0XHRcdDxoMz4gQ2hlY2sgaGVyZSB0byBzZWUgaWYgd2UgaGF2ZSBpdCBpbiBvdXIgbGlzdCEgPC9oMz5cblx0XHRcdFx0PFNlYXJjaCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSBtb3ZpZT0ge3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWU9e3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdNb3ZpZXMnPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlXYXRjaGVkTW92aWVzKCl9fT4gV2F0Y2hlZCBNb3ZpZXM8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVRvV2F0Y2hNb3ZpZXMoKX19PiBNb3ZpZXMgVG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2Plx0XG5cdFx0KVxuXHR9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwIl19