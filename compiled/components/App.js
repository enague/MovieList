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
			console.log('this hit');
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
	}, {
		key: 'onlyWatchedMovies',
		value: function onlyWatchedMovies() {
			var watchedMovies = [];
			console.log(this.state.movies[0]);
			for (var i = 0; i < this.state.movies; i++) {
				console.log(this.state.movies[i].toggle);
				if (this.state.movies[i][toggle]) {
					watchedMovies.push(this.state.movies[i]);
				}
			}
			this.setState({
				movies: watchedMovies

			});
		}
	}, {
		key: 'onlyToWatchMovies',
		value: function onlyToWatchMovies() {}
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

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGl0bGUiLCJwdXNoIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwid2F0Y2hlZE1vdmllcyIsInRvZ2dsZSIsImFkZE1vdmllIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUCxHQUFiO0FBRmtCO0FBS2xCOzs7OzJCQUVRQyxLLEVBQU87QUFDZkMsV0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxPQUFHRixVQUFVLEVBQWIsRUFBaUI7QUFDaEIsU0FBS0csUUFBTCxDQUFjO0FBQ2JKLGFBQVEsQ0FBQyxFQUFDSyxPQUFPLDREQUFSLEVBQUQ7QUFESyxLQUFkO0FBR0EsSUFKRCxNQUlPO0FBQ04sU0FBS04sS0FBTCxDQUFXQyxNQUFYLENBQWtCTSxJQUFsQixDQUF1QixFQUFDRCxPQUFPSixLQUFSLEVBQXZCO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLSixLQUFMLENBQVdDLE1BQXZCO0FBQ0E7QUFDQTtBQUNEOzs7OEJBRVdDLEssRUFBTztBQUNsQixRQUFJLElBQUlNLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtSLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlEsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2pELFFBQUcsS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxDQUFsQixFQUFxQkYsS0FBckIsQ0FBMkJJLFdBQTNCLE9BQTZDUixNQUFNUSxXQUFOLEVBQWhELEVBQXFFO0FBQ3BFLFVBQUtMLFFBQUwsQ0FBYztBQUNiSixjQUFRLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBQ0EsS0FMRCxNQUtPO0FBQ04sVUFBS0gsUUFBTCxDQUFjO0FBQ2JKLGNBQVEsQ0FBQyxFQUFDSyxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDtBQUNEOzs7c0NBRW1CO0FBQ25CLE9BQUlLLGdCQUFlLEVBQW5CO0FBQ0FSLFdBQVFDLEdBQVIsQ0FBWSxLQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBWjtBQUNBLFFBQUksSUFBSU8sSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUE5QixFQUFzQ08sR0FBdEMsRUFBMkM7QUFDMUNMLFlBQVFDLEdBQVIsQ0FBWSxLQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLEVBQXFCSSxNQUFqQztBQUNBLFFBQUcsS0FBS1osS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxDQUFsQixFQUFxQkksTUFBckIsQ0FBSCxFQUFpQztBQUNoQ0QsbUJBQWNKLElBQWQsQ0FBbUIsS0FBS1AsS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxDQUFsQixDQUFuQjtBQUNBO0FBQ0Q7QUFDRCxRQUFLSCxRQUFMLENBQWM7QUFDYkosWUFBUVU7O0FBREssSUFBZDtBQUlBOzs7c0NBRW1CLENBRW5COzs7MkJBRVE7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDLHdCQUFDLEdBQUQsSUFBSyxVQUFVLEtBQUtFLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtkLEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ2UsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUEQ7QUFRQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVEQsSUFERDtBQWFBOzs7O0VBckVnQkMsTUFBTUMsUzs7QUF3RXhCQyxPQUFPQyxPQUFQLEdBQWlCekIsR0FBakIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHR9XG5cblx0YWRkTW92aWUodmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZygndGhpcyBoaXQnKVxuXHRcdGlmKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ09vcHMgSSBkbyBub3QgdGhpbmsgeW91IGVudGVyZWQgYSBtb3ZpZSB0aXRsZSAtIFRyeSBhZ2FpbiEnfV1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiB2YWx1ZX0pXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllcylcblx0XHRcdC8vaG93IGRvIHlvdSBjbGVhciB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ1dHRvbj9cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25seVdhdGNoZWRNb3ZpZXMoKSB7XG5cdFx0dmFyIHdhdGNoZWRNb3ZpZXM9IFtdXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXNbMF0pXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzOyBpKyspIHtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzW2ldLnRvZ2dsZSlcblx0XHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldW3RvZ2dsZV0pIHtcblx0XHRcdFx0d2F0Y2hlZE1vdmllcy5wdXNoKHRoaXMuc3RhdGUubW92aWVzW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG1vdmllczogd2F0Y2hlZE1vdmllc1xuXHRcdFxuXHRcdH0pXG5cdH1cblxuXHRvbmx5VG9XYXRjaE1vdmllcygpIHtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+IEZlZWwgZnJlZSB0byBhZGQgbW92aWVzIHRvIG91ciBsaXN0IGhlcmUhIDwvaDI+XG5cdFx0XHRcdDxBZGQgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8aDI+IEhhdmUgYSBtb3ZpZSBpbiBtaW5kPzwvaDI+XG5cdFx0XHRcdDxoMz4gQ2hlY2sgaGVyZSB0byBzZWUgaWYgd2UgaGF2ZSBpdCBpbiBvdXIgbGlzdCEgPC9oMz5cblx0XHRcdFx0PFNlYXJjaCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSBtb3ZpZT0ge3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWU9e3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PiB7bG9jYXRpb24ucmVsb2FkKCl9fT5SZWZyZXNoIFBhZ2U8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVdhdGNoZWRNb3ZpZXMoKX19PiBXYXRjaGVkIE1vdmllczwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5VG9XYXRjaE1vdmllcygpfX0+IE1vdmllcyBUbyBXYXRjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHAiXX0=