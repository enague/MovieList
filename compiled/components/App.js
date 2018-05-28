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
		_this.getMoviesFromAPI = _this.getMoviesFromAPI.bind(_this);
		return _this;
	}
	//add button

	_createClass(App, [{
		key: 'addMovie',
		value: function addMovie(value) {
			var _this2 = this;

			if (value === '') {
				this.setState({
					movies: [{ title: 'Oops I do not think you entered a movie title - Try again!' }]
				});
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
				_this2.handleClick();
			}).catch(function (error) {
				console.log(error);
			});
		}

		//search button

	}, {
		key: 'handleClick',
		value: function handleClick(value) {
			for (var i = 0; i < this.state.movies.length; i++) {
				if (this.state.movies[i].Title.toUpperCase() === value.toUpperCase()) {
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

			this.getMoviesFromAPI(value);
		}
	}, {
		key: 'getMoviesFromAPI',
		value: function getMoviesFromAPI(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21BUEkiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGl0bGUiLCJheGlvcyIsInBvc3QiLCJwYXJhbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiaSIsImxlbmd0aCIsIlRpdGxlIiwidG9VcHBlckNhc2UiLCJnZXQiLCJyZXNwb25zZSIsImFkZE1vdmllIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUdBLFFBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbEI7QUFDQSxRQUFLQyxnQkFBTCxHQUF1QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBdkI7QUFOa0I7QUFPbEI7QUFDRDs7OzsyQkFFU0UsSyxFQUFPO0FBQUE7O0FBQ2YsT0FBR0EsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtDLFFBQUwsQ0FBYztBQUNiTCxhQUFRLENBQUMsRUFBQ00sT0FBTyw0REFBUixFQUFEO0FBREssS0FBZDtBQUdBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsU0FBTUMsSUFBTixDQUFXLFNBQVgsRUFBc0I7QUFDckJDLFlBQVE7QUFDUEwsWUFBT0E7QUFEQTtBQURhLElBQXRCLEVBS0NNLElBTEQsQ0FLTSxVQUFDQyxJQUFELEVBQVM7QUFDZEMsWUFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0EsV0FBS1osV0FBTDtBQUNBLElBUkQsRUFTQ2EsS0FURCxDQVNPLFVBQUNDLEtBQUQsRUFBVTtBQUNoQkgsWUFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0EsSUFYRDtBQVlBOztBQUVEOzs7OzhCQUNZWCxLLEVBQU87QUFDbEIsUUFBSSxJQUFJWSxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLakIsS0FBTCxDQUFXQyxNQUFYLENBQWtCaUIsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2pELFFBQUcsS0FBS2pCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmdCLENBQWxCLEVBQXFCRSxLQUFyQixDQUEyQkMsV0FBM0IsT0FBNkNmLE1BQU1lLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS2QsUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JnQixDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBRUEsS0FORCxNQU1PO0FBQ04sVUFBS1gsUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxFQUFDTSxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDs7QUFFRCxRQUFLSCxnQkFBTCxDQUFzQkMsS0FBdEI7QUFFQTs7O21DQUlnQkEsSyxFQUFPO0FBQUE7O0FBQ3ZCRyxTQUFNYSxHQUFOLENBQVUsU0FBVixFQUFxQjtBQUNwQlgsWUFBUTtBQUNQTCxZQUFPQTtBQURBO0FBRFksSUFBckIsRUFLQ00sSUFMRCxDQUtNLFVBQUNXLFFBQUQsRUFBYTtBQUNsQlQsWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JRLFNBQVNWLElBQWpDO0FBQ0EsV0FBS04sUUFBTCxDQUFjO0FBQ2JMLGFBQVFxQixTQUFTVjtBQURKLEtBQWQ7QUFHQSxJQVZEO0FBV0E7OzsyQkFJUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS1csUUFBTCxDQUFjcEIsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DLGlDQUFLLFdBQVUsV0FBZixHQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDdUIsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVkQsSUFERDtBQWNBOzs7O0VBbEdnQkMsTUFBTUMsUzs7QUFxR3hCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlQ2xpY2s9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldE1vdmllc0Zyb21BUEkgPXRoaXMuZ2V0TW92aWVzRnJvbUFQSS5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vYWRkIGJ1dHRvblxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IFxuXG5cdFx0Ly8gJC5hamF4KHtcblx0XHQvLyBcdHR5cGU6ICdQT1NUJyxcblx0XHQvLyBcdHVybDogJy9tb3ZpZXMnLFxuXHRcdC8vIFx0ZGF0YToge3ZhbHVlfSxcblx0XHQvLyBcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0Ly8gXHRcdHRoaXMuaGFuZGxlQ2xpY2soKVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIG9uIGNsaWVudCcpXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnZXJyb3IgaW4gY2xpZW50JywgZXJyb3IpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSlcblxuXHRcdGF4aW9zLnBvc3QoJy9tb3ZpZXMnLCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQudGhlbigoZGF0YSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIGNsaWVudCcpXG5cdFx0XHR0aGlzLmhhbmRsZUNsaWNrKCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0pXG5cdH1cblx0XG5cdC8vc2VhcmNoIGJ1dHRvblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0uVGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt7dGl0bGU6ICdNb3ZpZSBOb3QgRm91bmQgLS0gUGxlYXNlIHJlZnJlc2ggYW5kIFRyeSBBZ2FpbiEnfV1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmdldE1vdmllc0Zyb21BUEkodmFsdWUpXG5cblx0fSBcblxuXG5cdFxuXHRnZXRNb3ZpZXNGcm9tQVBJKHZhbHVlKSB7XHRcblx0XHRheGlvcy5nZXQoJy9tb3ZpZXMnLCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQudGhlbigocmVzcG9uc2UpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2l0IHdvcmtzJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRtb3ZpZXM6IHJlc3BvbnNlLmRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj4gRmVlbCBmcmVlIHRvIGFkZCBtb3ZpZXMgdG8gb3VyIGxpc3QgaGVyZSEgPC9oMj5cblx0XHRcdFx0PEFkZCBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxoMj4gSGF2ZSBhIG1vdmllIGluIG1pbmQ/PC9oMj5cblx0XHRcdFx0PGgzPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L2gzPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IG1vdmllPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld01vdmllcyc+PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PiB7bG9jYXRpb24ucmVsb2FkKCl9fT5SZWZyZXNoIFBhZ2U8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVdhdGNoZWRNb3ZpZXMoKX19PiBXYXRjaGVkIE1vdmllczwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5VG9XYXRjaE1vdmllcygpfX0+IE1vdmllcyBUbyBXYXRjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBBcHAiXX0=