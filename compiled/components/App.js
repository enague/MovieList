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
			} else {
				this.state.movies.push({ title: value });
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

			this.getMoviesFromAPI();
		}
	}, {
		key: 'getMoviesFromAPI',
		value: function getMoviesFromAPI() {
			var _this3 = this;

			axios.get('/movies').then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImdldE1vdmllc0Zyb21BUEkiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGl0bGUiLCJwdXNoIiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpIiwibGVuZ3RoIiwiVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYWRkTW92aWUiLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9ubHlXYXRjaGVkTW92aWVzIiwib25seVRvV2F0Y2hNb3ZpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUCxHQUFiO0FBR0EsUUFBS0MsV0FBTCxHQUFrQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFsQjtBQUNBLFFBQUtDLGdCQUFMLEdBQXVCLE1BQUtBLGdCQUFMLENBQXNCRCxJQUF0QixPQUF2QjtBQU5rQjtBQU9sQjtBQUNEOzs7OzJCQUVTRSxLLEVBQU87QUFBQTs7QUFDZixPQUFHQSxVQUFVLEVBQWIsRUFBaUI7QUFDaEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JMLGFBQVEsQ0FBQyxFQUFDTSxPQUFPLDREQUFSLEVBQUQ7QUFESyxLQUFkO0FBR0EsSUFKRCxNQUlPO0FBQ04sU0FBS1AsS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxJQUFsQixDQUF1QixFQUFDRCxPQUFPRixLQUFSLEVBQXZCO0FBQ0E7O0FBRURJLEtBQUVDLElBQUYsQ0FBTztBQUNOQyxVQUFNLE1BREE7QUFFTkMsU0FBSyxTQUZDO0FBR05DLFVBQU0sRUFBQ1IsWUFBRCxFQUhBO0FBSU5TLGFBQVMsaUJBQUNELElBQUQsRUFBVTtBQUNsQixZQUFLWCxXQUFMO0FBQ0FhLGFBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBLEtBUEs7QUFRTkMsV0FBTyxlQUFDQSxNQUFELEVBQVc7QUFDakJGLGFBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkMsTUFBL0I7QUFDQTtBQVZLLElBQVA7QUFZQTs7QUFFRDs7Ozs4QkFDWVosSyxFQUFPO0FBQ2xCLFFBQUksSUFBSWEsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS2xCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmtCLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUNqRCxRQUFHLEtBQUtsQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixDQUFsQixFQUFxQkUsS0FBckIsQ0FBMkJDLFdBQTNCLE9BQTZDaEIsTUFBTWdCLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS2YsUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBRUEsS0FORCxNQU1PO0FBQ04sVUFBS1osUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxFQUFDTSxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDs7QUFFRCxRQUFLSCxnQkFBTDtBQUVBOzs7cUNBSWtCO0FBQUE7O0FBQ2xCa0IsU0FBTUMsR0FBTixDQUFVLFNBQVYsRUFDQ0MsSUFERCxDQUNNLFVBQUNDLFFBQUQsRUFBYTtBQUNsQlYsWUFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JTLFNBQVNaLElBQWpDO0FBQ0EsV0FBS1AsUUFBTCxDQUFjO0FBQ2JMLGFBQVF3QixTQUFTWjtBQURKLEtBQWQ7QUFHQSxJQU5EO0FBT0E7OzsyQkFJUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS2EsUUFBTCxDQUFjdkIsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DLGlDQUFLLFdBQVUsV0FBZixHQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDMEIsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBUSxTQUFVLG1CQUFNO0FBQUMsY0FBS0MsaUJBQUw7QUFBeUIsT0FBbEQ7QUFBQTtBQUFBO0FBVkQsSUFERDtBQWNBOzs7O0VBbkZnQkMsTUFBTUMsUzs7QUFzRnhCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlQ2xpY2s9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldE1vdmllc0Zyb21BUEkgPXRoaXMuZ2V0TW92aWVzRnJvbUFQSS5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vYWRkIGJ1dHRvblxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IHZhbHVlfSlcblx0XHR9XG5cdFx0XG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdHVybDogJy9tb3ZpZXMnLFxuXHRcdFx0ZGF0YToge3ZhbHVlfSxcblx0XHRcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2xpY2soKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnZW50ZXJzIHN1Y2VzcyBvbiBQT1NUIG9uIGNsaWVudCcpXG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgaW4gY2xpZW50JywgZXJyb3IpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRcblx0Ly9zZWFyY2ggYnV0dG9uXG5cdGhhbmRsZUNsaWNrKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXS5UaXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3RoaXMuc3RhdGUubW92aWVzW2ldXVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ01vdmllIE5vdCBGb3VuZCAtLSBQbGVhc2UgcmVmcmVzaCBhbmQgVHJ5IEFnYWluISd9XVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZ2V0TW92aWVzRnJvbUFQSSgpXG5cblx0fSBcblxuXG5cdFxuXHRnZXRNb3ZpZXNGcm9tQVBJKCkge1x0XG5cdFx0YXhpb3MuZ2V0KCcvbW92aWVzJylcblx0XHQudGhlbigocmVzcG9uc2UpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2l0IHdvcmtzJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRtb3ZpZXM6IHJlc3BvbnNlLmRhdGFcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj4gRmVlbCBmcmVlIHRvIGFkZCBtb3ZpZXMgdG8gb3VyIGxpc3QgaGVyZSEgPC9oMj5cblx0XHRcdFx0PEFkZCBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxoMj4gSGF2ZSBhIG1vdmllIGluIG1pbmQ/PC9oMj5cblx0XHRcdFx0PGgzPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L2gzPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IG1vdmllPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25ld01vdmllcyc+PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PiB7bG9jYXRpb24ucmVsb2FkKCl9fT5SZWZyZXNoIFBhZ2U8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVdhdGNoZWRNb3ZpZXMoKX19PiBXYXRjaGVkIE1vdmllczwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiB7dGhpcy5vbmx5VG9XYXRjaE1vdmllcygpfX0+IE1vdmllcyBUbyBXYXRjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBBcHAiXX0=