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

			$.ajax({
				type: 'POST',
				url: '/movies',
				data: { value: value },
				success: function success(data) {
					_this2.handleClick();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21BUEkiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGl0bGUiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImkiLCJsZW5ndGgiLCJUaXRsZSIsInRvVXBwZXJDYXNlIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJhZGRNb3ZpZSIsImxvY2F0aW9uIiwicmVsb2FkIiwib25seVdhdGNoZWRNb3ZpZXMiLCJvbmx5VG9XYXRjaE1vdmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURQLEdBQWI7QUFHQSxRQUFLQyxXQUFMLEdBQWtCLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQWxCO0FBQ0EsUUFBS0MsZ0JBQUwsR0FBdUIsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXZCO0FBTmtCO0FBT2xCO0FBQ0Q7Ozs7MkJBRVNFLEssRUFBTztBQUFBOztBQUNmLE9BQUdBLFVBQVUsRUFBYixFQUFpQjtBQUNoQixTQUFLQyxRQUFMLENBQWM7QUFDYkwsYUFBUSxDQUFDLEVBQUNNLE9BQU8sNERBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQTs7QUFFREMsS0FBRUMsSUFBRixDQUFPO0FBQ05DLFVBQU0sTUFEQTtBQUVOQyxTQUFLLFNBRkM7QUFHTkMsVUFBTSxFQUFDUCxZQUFELEVBSEE7QUFJTlEsYUFBUyxpQkFBQ0QsSUFBRCxFQUFVO0FBQ2xCLFlBQUtWLFdBQUw7QUFDQVksYUFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0EsS0FQSztBQVFOQyxXQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNqQkYsYUFBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCQyxNQUEvQjtBQUNBO0FBVkssSUFBUDtBQVlBOztBQUVEOzs7OzhCQUNZWCxLLEVBQU87QUFDbEIsUUFBSSxJQUFJWSxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLakIsS0FBTCxDQUFXQyxNQUFYLENBQWtCaUIsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2pELFFBQUcsS0FBS2pCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmdCLENBQWxCLEVBQXFCRSxLQUFyQixDQUEyQkMsV0FBM0IsT0FBNkNmLE1BQU1lLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS2QsUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JnQixDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBRUEsS0FORCxNQU1PO0FBQ04sVUFBS1gsUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxFQUFDTSxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDs7QUFFRCxRQUFLSCxnQkFBTCxDQUFzQkMsS0FBdEI7QUFFQTs7O21DQUlnQkEsSyxFQUFPO0FBQUE7O0FBQ3ZCZ0IsU0FBTUMsR0FBTixDQUFVLFNBQVYsRUFBcUI7QUFDcEJDLFlBQVE7QUFDUGxCLFlBQU9BO0FBREE7QUFEWSxJQUFyQixFQUtDbUIsSUFMRCxDQUtNLFVBQUNDLFFBQUQsRUFBYTtBQUNsQlgsWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JVLFNBQVNiLElBQWpDO0FBQ0EsV0FBS04sUUFBTCxDQUFjO0FBQ2JMLGFBQVF3QixTQUFTYjtBQURKLEtBQWQ7QUFHQSxJQVZEO0FBV0E7OzsyQkFJUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS2MsUUFBTCxDQUFjdkIsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DLGlDQUFLLFdBQVUsV0FBZixHQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDMEIsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVkQsSUFERDtBQWNBOzs7O0VBckZnQkMsTUFBTUMsUzs7QUF3RnhCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlQ2xpY2s9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldE1vdmllc0Zyb21BUEkgPXRoaXMuZ2V0TW92aWVzRnJvbUFQSS5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vYWRkIGJ1dHRvblxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IFxuXG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdHVybDogJy9tb3ZpZXMnLFxuXHRcdFx0ZGF0YToge3ZhbHVlfSxcblx0XHRcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2xpY2soKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIG9uIGNsaWVudCcpXG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgaW4gY2xpZW50JywgZXJyb3IpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRcblx0Ly9zZWFyY2ggYnV0dG9uXG5cdGhhbmRsZUNsaWNrKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXS5UaXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3RoaXMuc3RhdGUubW92aWVzW2ldXVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ01vdmllIE5vdCBGb3VuZCAtLSBQbGVhc2UgcmVmcmVzaCBhbmQgVHJ5IEFnYWluISd9XVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZ2V0TW92aWVzRnJvbUFQSSh2YWx1ZSlcblxuXHR9IFxuXG5cblx0XG5cdGdldE1vdmllc0Zyb21BUEkodmFsdWUpIHtcdFxuXHRcdGF4aW9zLmdldCgnL21vdmllcycsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHRcdC50aGVuKChyZXNwb25zZSk9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaXQgd29ya3MnLCByZXNwb25zZS5kYXRhKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG1vdmllczogcmVzcG9uc2UuZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgyPiBGZWVsIGZyZWUgdG8gYWRkIG1vdmllcyB0byBvdXIgbGlzdCBoZXJlISA8L2gyPlxuXHRcdFx0XHQ8QWRkIGFkZE1vdmllPXt0aGlzLmFkZE1vdmllLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PGgyPiBIYXZlIGEgbW92aWUgaW4gbWluZD88L2gyPlxuXHRcdFx0XHQ8aDM+IENoZWNrIGhlcmUgdG8gc2VlIGlmIHdlIGhhdmUgaXQgaW4gb3VyIGxpc3QhIDwvaDM+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmV3TW92aWVzJz48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtsb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5V2F0Y2hlZE1vdmllcygpfX0+IFdhdGNoZWQgTW92aWVzPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlUb1dhdGNoTW92aWVzKCl9fT4gTW92aWVzIFRvIFdhdGNoPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cdFxuXHRcdClcblx0fVxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEFwcCJdfQ==