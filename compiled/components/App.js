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
		_this.handleClick = _this.handleClick.bind(_this);
		_this.getMoviesFromDB = _this.getMoviesFromDB.bind(_this);
		return _this;
	}

	//add button


	_createClass(App, [{
		key: 'addMovie',
		value: function addMovie(value) {
			var _this2 = this;

			if (value === '') {
				this.handleClick(value);
			}

			// $.ajax({
			// 	type: 'POST',
			// 	url: '/movies',
			// 	data: {value},
			// 	success: (data) => {
			// 		this.handleClick()
			// 		console.log('enters sucess on POST on client')
			// 	},
			// 	error: (error) => {
			// 		console.log('error in client', error)
			// 	}
			// })

			axios.post('/movies', {
				params: {
					value: value
				}
			}).then(function (data) {
				console.log('enters sucess on POST client');
				_this2.handleClick(value);
			}).catch(function (error) {
				console.log(error);
			});
		}

		//search button

	}, {
		key: 'handleClick',
		value: function handleClick(value) {
			// for(var i = 0; i < this.state.movies.length; i++) {
			// 	if(this.state.movies[i].Title.toUpperCase() === value.toUpperCase()) {
			// 		this.setState({
			// 			movies: [this.state.movies[i]]
			// 		})
			// 		return;

			// 	} else {
			// 		this.setState({
			// 			movies: [{title: 'Movie Not Found -- Please refresh and Try Again!'}]
			// 		})
			// 	}
			// }

			this.getMoviesFromDB(value);
		}
	}, {
		key: 'getMoviesFromDB',
		value: function getMoviesFromDB(value) {
			var _this3 = this;

			axios.get('/movies', {
				params: {
					value: value
				}
			}).then(function (response) {
				console.log('it works', response.data);
				_this3.setState({
					movies: response.data
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

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
					'h3',
					null,
					' Have a movie in mind?'
				),
				React.createElement(
					'p',
					null,
					' Check here to see if we have it in our list! '
				),
				React.createElement(
					'p',
					null,
					' If nothing shows up, try adding it to our list above! '
				),
				React.createElement(Search, { handleClick: this.handleClick.bind(this), movie: this.state.movies }),
				React.createElement(MovieList, { movie: this.state.movies }),
				React.createElement('div', { className: 'newMovies' }),
				React.createElement(
					'button',
					{ className: 'refresh', onClick: function onClick() {
							location.reload();
						} },
					'Refresh Page'
				),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							_this4.onlyWatchedMovies();
						} },
					' Watched Movies'
				),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							_this4.onlyToWatchMovies();
						} },
					' Movies To Watch'
				)
			);
		}
	}]);

	return App;
}(React.Component);

// module.exports = App
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21EQiIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImdldCIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJhZGRNb3ZpZSIsImxvY2F0aW9uIiwicmVsb2FkIiwib25seVdhdGNoZWRNb3ZpZXMiLCJvbmx5VG9XYXRjaE1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURQLEdBQWI7QUFHQSxRQUFLQyxXQUFMLEdBQWtCLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQWxCO0FBQ0EsUUFBS0MsZUFBTCxHQUFzQixNQUFLQSxlQUFMLENBQXFCRCxJQUFyQixPQUF0QjtBQU5rQjtBQU9sQjs7QUFFRDs7Ozs7MkJBQ1NFLEssRUFBTztBQUFBOztBQUNmLE9BQUdBLFVBQVUsRUFBYixFQUFpQjtBQUNoQixTQUFLSCxXQUFMLENBQWlCRyxLQUFqQjtBQUNBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsU0FBTUMsSUFBTixDQUFXLFNBQVgsRUFBc0I7QUFDckJDLFlBQVE7QUFDUEgsWUFBT0E7QUFEQTtBQURhLElBQXRCLEVBS0NJLElBTEQsQ0FLTSxVQUFDQyxJQUFELEVBQVM7QUFDZEMsWUFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0EsV0FBS1YsV0FBTCxDQUFpQkcsS0FBakI7QUFDQSxJQVJELEVBU0NRLEtBVEQsQ0FTTyxVQUFDQyxLQUFELEVBQVU7QUFDaEJILFlBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNBLElBWEQ7QUFZQTs7QUFFRDs7Ozs4QkFDWVQsSyxFQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBS0QsZUFBTCxDQUFxQkMsS0FBckI7QUFFQTs7O2tDQUllQSxLLEVBQU87QUFBQTs7QUFDdEJDLFNBQU1TLEdBQU4sQ0FBVSxTQUFWLEVBQXFCO0FBQ3BCUCxZQUFRO0FBQ1BILFlBQU9BO0FBREE7QUFEWSxJQUFyQixFQUtDSSxJQUxELENBS00sVUFBQ08sUUFBRCxFQUFhO0FBQ2xCTCxZQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkksU0FBU04sSUFBakM7QUFDQSxXQUFLTyxRQUFMLENBQWM7QUFDYmhCLGFBQVFlLFNBQVNOO0FBREosS0FBZDtBQUdBLElBVkQ7QUFXQTs7OzJCQUlRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyx3QkFBQyxHQUFELElBQUssVUFBVSxLQUFLUSxRQUFMLENBQWNmLElBQWQsQ0FBbUIsSUFBbkIsQ0FBZixHQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpEO0FBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxEO0FBTUMsd0JBQUMsTUFBRCxJQUFRLGFBQWEsS0FBS0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsRUFBa0QsT0FBUSxLQUFLSCxLQUFMLENBQVdDLE1BQXJFLEdBTkQ7QUFPQyx3QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLRCxLQUFMLENBQVdDLE1BQTdCLEdBUEQ7QUFRQyxpQ0FBSyxXQUFVLFdBQWYsR0FSRDtBQVNDO0FBQUE7QUFBQSxPQUFRLFdBQVUsU0FBbEIsRUFBNEIsU0FBUyxtQkFBSztBQUFDa0IsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBN0Q7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVkQ7QUFXQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBWEQsSUFERDtBQWVBOzs7O0VBakdnQkMsTUFBTUMsUzs7QUFvR3hCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlQ2xpY2s9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldE1vdmllc0Zyb21EQiA9dGhpcy5nZXRNb3ZpZXNGcm9tREIuYmluZCh0aGlzKTtcblx0fVxuXG5cdC8vYWRkIGJ1dHRvblxuXHRhZGRNb3ZpZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5oYW5kbGVDbGljayh2YWx1ZSk7XG5cdFx0fSBcblxuXHRcdC8vICQuYWpheCh7XG5cdFx0Ly8gXHR0eXBlOiAnUE9TVCcsXG5cdFx0Ly8gXHR1cmw6ICcvbW92aWVzJyxcblx0XHQvLyBcdGRhdGE6IHt2YWx1ZX0sXG5cdFx0Ly8gXHRzdWNjZXNzOiAoZGF0YSkgPT4ge1xuXHRcdC8vIFx0XHR0aGlzLmhhbmRsZUNsaWNrKClcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ2VudGVycyBzdWNlc3Mgb24gUE9TVCBvbiBjbGllbnQnKVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGVycm9yOiAoZXJyb3IpID0+IHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGluIGNsaWVudCcsIGVycm9yKVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cblx0XHRheGlvcy5wb3N0KCcvbW92aWVzJywge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnRoZW4oKGRhdGEpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2VudGVycyBzdWNlc3Mgb24gUE9TVCBjbGllbnQnKVxuXHRcdFx0dGhpcy5oYW5kbGVDbGljayh2YWx1ZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0pXG5cdH1cblx0XG5cdC8vc2VhcmNoIGJ1dHRvblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0uVGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdC8vIFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQvLyBcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHQvLyBcdFx0fSlcblx0XHQvLyBcdFx0cmV0dXJuO1xuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHQvLyBcdFx0XHRtb3ZpZXM6IFt7dGl0bGU6ICdNb3ZpZSBOb3QgRm91bmQgLS0gUGxlYXNlIHJlZnJlc2ggYW5kIFRyeSBBZ2FpbiEnfV1cblx0XHQvLyBcdFx0fSlcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHR0aGlzLmdldE1vdmllc0Zyb21EQih2YWx1ZSlcblxuXHR9IFxuXG5cblx0XG5cdGdldE1vdmllc0Zyb21EQih2YWx1ZSkge1x0XG5cdFx0YXhpb3MuZ2V0KCcvbW92aWVzJywge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnRoZW4oKHJlc3BvbnNlKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdpdCB3b3JrcycsIHJlc3BvbnNlLmRhdGEpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiByZXNwb25zZS5kYXRhXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+IEZlZWwgZnJlZSB0byBhZGQgbW92aWVzIHRvIG91ciBsaXN0IGhlcmUhIDwvaDI+XG5cdFx0XHRcdDxBZGQgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8aDM+IEhhdmUgYSBtb3ZpZSBpbiBtaW5kPzwvaDM+XG5cdFx0XHRcdDxwPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L3A+XG5cdFx0XHRcdDxwPiBJZiBub3RoaW5nIHNob3dzIHVwLCB0cnkgYWRkaW5nIGl0IHRvIG91ciBsaXN0IGFib3ZlISA8L3A+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3TW92aWVzJz48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3JlZnJlc2gnIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlXYXRjaGVkTW92aWVzKCl9fT4gV2F0Y2hlZCBNb3ZpZXM8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVRvV2F0Y2hNb3ZpZXMoKX19PiBNb3ZpZXMgVG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2Plx0XG5cdFx0KVxuXHR9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwIl19