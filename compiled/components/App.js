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
				error: function error(_error) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aXRsZSIsInB1c2giLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImkiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImFkZE1vdmllIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUZrQjtBQUtsQjtBQUNEOzs7OzsyQkFDU0MsSyxFQUFPO0FBQ2YsT0FBR0EsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNiRixhQUFRLENBQUMsRUFBQ0csT0FBTyw0REFBUixFQUFEO0FBREssS0FBZDtBQUdBLElBSkQsTUFJTztBQUNOLFNBQUtKLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkksSUFBbEIsQ0FBdUIsRUFBQ0QsT0FBT0YsS0FBUixFQUF2QjtBQUNBOztBQUVESSxLQUFFQyxJQUFGLENBQU87QUFDTkMsVUFBTSxNQURBO0FBRU5DLFNBQUssU0FGQztBQUdOQyxVQUFNLEVBQUNSLFlBQUQsRUFIQTtBQUlOUyxhQUFTLGlCQUFDRCxJQUFELEVBQVU7QUFDbEJFLGFBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBLEtBTks7QUFPTkMsV0FBTyxlQUFDQSxNQUFELEVBQVcsQ0FFakI7QUFUSyxJQUFQO0FBV0E7O0FBRUQ7Ozs7OEJBQ1laLEssRUFBTztBQUNsQixRQUFJLElBQUlhLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtmLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmUsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2pELFFBQUcsS0FBS2YsS0FBTCxDQUFXQyxNQUFYLENBQWtCYyxDQUFsQixFQUFxQlgsS0FBckIsQ0FBMkJhLFdBQTNCLE9BQTZDZixNQUFNZSxXQUFOLEVBQWhELEVBQXFFO0FBQ3BFLFVBQUtkLFFBQUwsQ0FBYztBQUNiRixjQUFRLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCYyxDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBQ0EsS0FMRCxNQUtPO0FBQ04sVUFBS1osUUFBTCxDQUFjO0FBQ2JGLGNBQVEsQ0FBQyxFQUFDRyxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OzsyQkFFUztBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS2MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWYsR0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRDtBQUtDLHdCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXJCLEVBQWtELE9BQVEsS0FBS25CLEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DLGlDQUFLLFdBQVUsV0FBZixHQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDb0IsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVkQsSUFERDtBQWNBOzs7O0VBaEZnQkMsTUFBTUMsUzs7QUFtRnhCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHR9XG5cdC8vYWRkIGJ1dHRvblxuXHRhZGRNb3ZpZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ09vcHMgSSBkbyBub3QgdGhpbmsgeW91IGVudGVyZWQgYSBtb3ZpZSB0aXRsZSAtIFRyeSBhZ2FpbiEnfV1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiB2YWx1ZX0pXG5cdFx0fVxuXHRcdFxuXHRcdCQuYWpheCh7XG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHR1cmw6ICcvbW92aWVzJyxcblx0XHRcdGRhdGE6IHt2YWx1ZX0sXG5cdFx0XHRzdWNjZXNzOiAoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIG9uIGNsaWVudCcpXG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cdFxuXHQvL3NlYXJjaCBidXR0b25cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbdGhpcy5zdGF0ZS5tb3ZpZXNbaV1dXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ01vdmllIE5vdCBGb3VuZCAtLSBQbGVhc2UgcmVmcmVzaCBhbmQgVHJ5IEFnYWluISd9XVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIG9ubHlXYXRjaGVkTW92aWVzKCkge1xuXHQvLyBcdHZhciB3YXRjaGVkTW92aWVzPSBbXVxuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzWzBdKVxuXHQvLyBcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllczsgaSsrKSB7XG5cdC8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllc1tpXS50b2dnbGUpXG5cdC8vIFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXVt0b2dnbGVdKSB7XG5cdC8vIFx0XHRcdHdhdGNoZWRNb3ZpZXMucHVzaCh0aGlzLnN0YXRlLm1vdmllc1tpXSlcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdC8vIFx0XHRtb3ZpZXM6IHdhdGNoZWRNb3ZpZXNcblx0XHRcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0Ly8gb25seVRvV2F0Y2hNb3ZpZXMoKSB7XG5cblx0Ly8gfVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgyPiBGZWVsIGZyZWUgdG8gYWRkIG1vdmllcyB0byBvdXIgbGlzdCBoZXJlISA8L2gyPlxuXHRcdFx0XHQ8QWRkIGFkZE1vdmllPXt0aGlzLmFkZE1vdmllLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PGgyPiBIYXZlIGEgbW92aWUgaW4gbWluZD88L2gyPlxuXHRcdFx0XHQ8aDM+IENoZWNrIGhlcmUgdG8gc2VlIGlmIHdlIGhhdmUgaXQgaW4gb3VyIGxpc3QhIDwvaDM+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3TW92aWVzJz48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtsb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5V2F0Y2hlZE1vdmllcygpfX0+IFdhdGNoZWQgTW92aWVzPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlUb1dhdGNoTW92aWVzKCl9fT4gTW92aWVzIFRvIFdhdGNoPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cdFxuXHRcdClcblx0fVxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEFwcCJdfQ==