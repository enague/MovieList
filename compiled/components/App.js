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
			movies: []
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

			this.addMovie('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21EQiIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwicGFyYW1zIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImdldCIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJhZGRNb3ZpZSIsImxvY2F0aW9uIiwicmVsb2FkIiwib25seVdhdGNoZWRNb3ZpZXMiLCJvbmx5VG9XYXRjaE1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVE7QUFESSxHQUFiO0FBR0EsUUFBS0MsV0FBTCxHQUFrQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFsQjtBQUNBLFFBQUtDLGVBQUwsR0FBc0IsTUFBS0EsZUFBTCxDQUFxQkQsSUFBckIsT0FBdEI7QUFOa0I7QUFPbEI7QUFDRDs7OzsyQkFFU0UsSyxFQUFPO0FBQUE7O0FBQ2YsT0FBR0EsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtILFdBQUwsQ0FBaUJHLEtBQWpCO0FBQ0E7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxTQUFNQyxJQUFOLENBQVcsU0FBWCxFQUFzQjtBQUNyQkMsWUFBUTtBQUNQSCxZQUFPQTtBQURBO0FBRGEsSUFBdEIsRUFLQ0ksSUFMRCxDQUtNLFVBQUNDLElBQUQsRUFBUztBQUNkQyxZQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQSxXQUFLVixXQUFMLENBQWlCRyxLQUFqQjtBQUNBLElBUkQsRUFTQ1EsS0FURCxDQVNPLFVBQUNDLEtBQUQsRUFBVTtBQUNoQkgsWUFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0EsSUFYRDtBQVlBOztBQUVEOzs7OzhCQUNZVCxLLEVBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFLRCxlQUFMLENBQXFCQyxLQUFyQjtBQUVBOzs7a0NBSWVBLEssRUFBTztBQUFBOztBQUN0QkMsU0FBTVMsR0FBTixDQUFVLFNBQVYsRUFBcUI7QUFDcEJQLFlBQVE7QUFDUEgsWUFBT0E7QUFEQTtBQURZLElBQXJCLEVBS0NJLElBTEQsQ0FLTSxVQUFDTyxRQUFELEVBQWE7QUFDbEJMLFlBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSSxTQUFTTixJQUFqQztBQUNBLFdBQUtPLFFBQUwsQ0FBYztBQUNiaEIsYUFBUWUsU0FBU047QUFESixLQUFkO0FBR0EsSUFWRDtBQVdBOzs7MkJBSVE7QUFBQTs7QUFDUixRQUFLUSxRQUFMLENBQWMsRUFBZDtBQUNBLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS0EsUUFBTCxDQUFjZixJQUFkLENBQW1CLElBQW5CLENBQWYsR0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRDtBQUtDLHdCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtELFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXJCLEVBQWtELE9BQVEsS0FBS0gsS0FBTCxDQUFXQyxNQUFyRSxHQUxEO0FBTUMsd0JBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxNQUE3QixHQU5EO0FBT0MsaUNBQUssV0FBVSxXQUFmLEdBUEQ7QUFRQztBQUFBO0FBQUEsT0FBUSxXQUFVLFNBQWxCLEVBQTRCLFNBQVMsbUJBQUs7QUFBQ2tCLGdCQUFTQyxNQUFUO0FBQWtCLE9BQTdEO0FBQUE7QUFBQSxLQVJEO0FBU0M7QUFBQTtBQUFBLE9BQVEsU0FBVSxtQkFBTTtBQUFDLGNBQUtDLGlCQUFMO0FBQXlCLE9BQWxEO0FBQUE7QUFBQSxLQVREO0FBVUM7QUFBQTtBQUFBLE9BQVEsU0FBVSxtQkFBTTtBQUFDLGNBQUtDLGlCQUFMO0FBQXlCLE9BQWxEO0FBQUE7QUFBQTtBQVZELElBREQ7QUFjQTs7OztFQWpHZ0JDLE1BQU1DLFM7O0FBb0d4QiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bW92aWVzOiBbXVxuXHRcdH1cblx0XHR0aGlzLmhhbmRsZUNsaWNrPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZXRNb3ZpZXNGcm9tREIgPXRoaXMuZ2V0TW92aWVzRnJvbURCLmJpbmQodGhpcyk7XG5cdH1cblx0Ly9hZGQgYnV0dG9uXG5cblx0YWRkTW92aWUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PT0gJycpIHtcblx0XHRcdHRoaXMuaGFuZGxlQ2xpY2sodmFsdWUpO1xuXHRcdH0gXG5cblx0XHQvLyAkLmFqYXgoe1xuXHRcdC8vIFx0dHlwZTogJ1BPU1QnLFxuXHRcdC8vIFx0dXJsOiAnL21vdmllcycsXG5cdFx0Ly8gXHRkYXRhOiB7dmFsdWV9LFxuXHRcdC8vIFx0c3VjY2VzczogKGRhdGEpID0+IHtcblx0XHQvLyBcdFx0dGhpcy5oYW5kbGVDbGljaygpXG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdlbnRlcnMgc3VjZXNzIG9uIFBPU1Qgb24gY2xpZW50Jylcblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRlcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdlcnJvciBpbiBjbGllbnQnLCBlcnJvcilcblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXG5cdFx0YXhpb3MucG9zdCgnL21vdmllcycsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHRcdC50aGVuKChkYXRhKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdlbnRlcnMgc3VjZXNzIG9uIFBPU1QgY2xpZW50Jylcblx0XHRcdHRoaXMuaGFuZGxlQ2xpY2sodmFsdWUpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcik9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9KVxuXHR9XG5cdFxuXHQvL3NlYXJjaCBidXR0b25cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHQvLyBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldLlRpdGxlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0Ly8gXHRcdFx0bW92aWVzOiBbdGhpcy5zdGF0ZS5tb3ZpZXNbaV1dXG5cdFx0Ly8gXHRcdH0pXG5cdFx0Ly8gXHRcdHJldHVybjtcblxuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0Ly8gXHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0Ly8gXHRcdH0pXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXG5cdFx0dGhpcy5nZXRNb3ZpZXNGcm9tREIodmFsdWUpXG5cblx0fSBcblxuXG5cdFxuXHRnZXRNb3ZpZXNGcm9tREIodmFsdWUpIHtcdFxuXHRcdGF4aW9zLmdldCgnL21vdmllcycsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHRcdC50aGVuKChyZXNwb25zZSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaXQgd29ya3MnLCByZXNwb25zZS5kYXRhKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG1vdmllczogcmVzcG9uc2UuZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLmFkZE1vdmllKCcnKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+IEZlZWwgZnJlZSB0byBhZGQgbW92aWVzIHRvIG91ciBsaXN0IGhlcmUhIDwvaDI+XG5cdFx0XHRcdDxBZGQgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8aDM+IEhhdmUgYSBtb3ZpZSBpbiBtaW5kPzwvaDM+XG5cdFx0XHRcdDxwPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L3A+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3TW92aWVzJz48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3JlZnJlc2gnIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlXYXRjaGVkTW92aWVzKCl9fT4gV2F0Y2hlZCBNb3ZpZXM8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVRvV2F0Y2hNb3ZpZXMoKX19PiBNb3ZpZXMgVG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2Plx0XG5cdFx0KVxuXHR9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwIl19