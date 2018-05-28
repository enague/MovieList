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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21EQiIsInZhbHVlIiwic2V0U3RhdGUiLCJ0aXRsZSIsImF4aW9zIiwicG9zdCIsInBhcmFtcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJnZXQiLCJyZXNwb25zZSIsImFkZE1vdmllIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUdBLFFBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbEI7QUFDQSxRQUFLQyxlQUFMLEdBQXNCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLE9BQXRCO0FBTmtCO0FBT2xCO0FBQ0Q7Ozs7MkJBRVNFLEssRUFBTztBQUFBOztBQUNmLE9BQUdBLFVBQVUsRUFBYixFQUFpQjtBQUNoQixTQUFLQyxRQUFMLENBQWM7QUFDYkwsYUFBUSxDQUFDLEVBQUNNLE9BQU8sNERBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLFNBQU1DLElBQU4sQ0FBVyxTQUFYLEVBQXNCO0FBQ3JCQyxZQUFRO0FBQ1BMLFlBQU9BO0FBREE7QUFEYSxJQUF0QixFQUtDTSxJQUxELENBS00sVUFBQ0MsSUFBRCxFQUFTO0FBQ2RDLFlBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLFdBQUtaLFdBQUwsQ0FBaUJHLEtBQWpCO0FBQ0EsSUFSRCxFQVNDVSxLQVRELENBU08sVUFBQ0MsS0FBRCxFQUFVO0FBQ2hCSCxZQUFRQyxHQUFSLENBQVlFLEtBQVo7QUFDQSxJQVhEO0FBWUE7O0FBRUQ7Ozs7OEJBQ1lYLEssRUFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUtELGVBQUwsQ0FBcUJDLEtBQXJCO0FBRUE7OztrQ0FJZUEsSyxFQUFPO0FBQUE7O0FBQ3RCRyxTQUFNUyxHQUFOLENBQVUsU0FBVixFQUFxQjtBQUNwQlAsWUFBUTtBQUNQTCxZQUFPQTtBQURBO0FBRFksSUFBckIsRUFLQ00sSUFMRCxDQUtNLFVBQUNPLFFBQUQsRUFBYTtBQUNsQkwsWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JJLFNBQVNOLElBQWpDO0FBQ0EsV0FBS04sUUFBTCxDQUFjO0FBQ2JMLGFBQVFpQixTQUFTTjtBQURKLEtBQWQ7QUFHQSxJQVZEO0FBV0E7OzsyQkFJUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS08sUUFBTCxDQUFjaEIsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DLGlDQUFLLFdBQVUsV0FBZixHQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsV0FBVSxTQUFsQixFQUE0QixTQUFTLG1CQUFLO0FBQUNtQixnQkFBU0MsTUFBVDtBQUFrQixPQUE3RDtBQUFBO0FBQUEsS0FSRDtBQVNDO0FBQUE7QUFBQSxPQUFRLFNBQVUsbUJBQU07QUFBQyxjQUFLQyxpQkFBTDtBQUF5QixPQUFsRDtBQUFBO0FBQUEsS0FURDtBQVVDO0FBQUE7QUFBQSxPQUFRLFNBQVUsbUJBQU07QUFBQyxjQUFLQyxpQkFBTDtBQUF5QixPQUFsRDtBQUFBO0FBQUE7QUFWRCxJQUREO0FBY0E7Ozs7RUFsR2dCQyxNQUFNQyxTOztBQXFHeEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVDbGljaz0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2V0TW92aWVzRnJvbURCID10aGlzLmdldE1vdmllc0Zyb21EQi5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vYWRkIGJ1dHRvblxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IFxuXG5cdFx0Ly8gJC5hamF4KHtcblx0XHQvLyBcdHR5cGU6ICdQT1NUJyxcblx0XHQvLyBcdHVybDogJy9tb3ZpZXMnLFxuXHRcdC8vIFx0ZGF0YToge3ZhbHVlfSxcblx0XHQvLyBcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0Ly8gXHRcdHRoaXMuaGFuZGxlQ2xpY2soKVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIG9uIGNsaWVudCcpXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnZXJyb3IgaW4gY2xpZW50JywgZXJyb3IpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSlcblxuXHRcdGF4aW9zLnBvc3QoJy9tb3ZpZXMnLCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQudGhlbigoZGF0YSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIGNsaWVudCcpXG5cdFx0XHR0aGlzLmhhbmRsZUNsaWNrKHZhbHVlKTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSlcblx0fVxuXHRcblx0Ly9zZWFyY2ggYnV0dG9uXG5cdGhhbmRsZUNsaWNrKHZhbHVlKSB7XG5cdFx0Ly8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXS5UaXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdC8vIFx0XHRcdG1vdmllczogW3RoaXMuc3RhdGUubW92aWVzW2ldXVxuXHRcdC8vIFx0XHR9KVxuXHRcdC8vIFx0XHRyZXR1cm47XG5cblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdC8vIFx0XHRcdG1vdmllczogW3t0aXRsZTogJ01vdmllIE5vdCBGb3VuZCAtLSBQbGVhc2UgcmVmcmVzaCBhbmQgVHJ5IEFnYWluISd9XVxuXHRcdC8vIFx0XHR9KVxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXHRcdHRoaXMuZ2V0TW92aWVzRnJvbURCKHZhbHVlKVxuXG5cdH0gXG5cblxuXHRcblx0Z2V0TW92aWVzRnJvbURCKHZhbHVlKSB7XHRcblx0XHRheGlvcy5nZXQoJy9tb3ZpZXMnLCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQudGhlbigocmVzcG9uc2UpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2l0IHdvcmtzJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRtb3ZpZXM6IHJlc3BvbnNlLmRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj4gRmVlbCBmcmVlIHRvIGFkZCBtb3ZpZXMgdG8gb3VyIGxpc3QgaGVyZSEgPC9oMj5cblx0XHRcdFx0PEFkZCBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxoMz4gSGF2ZSBhIG1vdmllIGluIG1pbmQ/PC9oMz5cblx0XHRcdFx0PHA+IENoZWNrIGhlcmUgdG8gc2VlIGlmIHdlIGhhdmUgaXQgaW4gb3VyIGxpc3QhIDwvcD5cblx0XHRcdFx0PFNlYXJjaCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSBtb3ZpZT0ge3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxNb3ZpZUxpc3QgbW92aWU9e3RoaXMuc3RhdGUubW92aWVzfS8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduZXdNb3ZpZXMnPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ncmVmcmVzaCcgb25DbGljaz17KCk9PiB7bG9jYXRpb24ucmVsb2FkKCl9fT5SZWZyZXNoIFBhZ2U8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVdhdGNoZWRNb3ZpZXMoKX19PiBXYXRjaGVkIE1vdmllczwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5VG9XYXRjaE1vdmllcygpfX0+IE1vdmllcyBUbyBXYXRjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBBcHAiXX0=