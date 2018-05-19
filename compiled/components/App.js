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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGl0bGUiLCJwdXNoIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwid2F0Y2hlZE1vdmllcyIsInRvZ2dsZSIsImFkZE1vdmllIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbmx5V2F0Y2hlZE1vdmllcyIsIm9ubHlUb1dhdGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUZrQjtBQUtsQjs7OzsyQkFFUUMsSyxFQUFPO0FBQ2ZDLFdBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsT0FBR0YsVUFBVSxFQUFiLEVBQWlCO0FBQ2hCLFNBQUtHLFFBQUwsQ0FBYztBQUNiSixhQUFRLENBQUMsRUFBQ0ssT0FBTyw0REFBUixFQUFEO0FBREssS0FBZDtBQUdBLElBSkQsTUFJTztBQUNOLFNBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sSUFBbEIsQ0FBdUIsRUFBQ0QsT0FBT0osS0FBUixFQUF2QjtBQUNBQyxZQUFRQyxHQUFSLENBQVksS0FBS0osS0FBTCxDQUFXQyxNQUF2QjtBQUNBO0FBQ0E7QUFDRDs7OzhCQUVXQyxLLEVBQU87QUFDbEIsUUFBSSxJQUFJTSxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JRLE1BQXJDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUNqRCxRQUFHLEtBQUtSLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sQ0FBbEIsRUFBcUJGLEtBQXJCLENBQTJCSSxXQUEzQixPQUE2Q1IsTUFBTVEsV0FBTixFQUFoRCxFQUFxRTtBQUNwRSxVQUFLTCxRQUFMLENBQWM7QUFDYkosY0FBUSxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sQ0FBbEIsQ0FBRDtBQURLLE1BQWQ7QUFHQTtBQUNBLEtBTEQsTUFLTztBQUNOLFVBQUtILFFBQUwsQ0FBYztBQUNiSixjQUFRLENBQUMsRUFBQ0ssT0FBTyxrREFBUixFQUFEO0FBREssTUFBZDtBQUdBO0FBQ0Q7QUFDRDs7O3NDQUVtQjtBQUNuQixPQUFJSyxnQkFBZSxFQUFuQjtBQUNBUixXQUFRQyxHQUFSLENBQVksS0FBS0osS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLENBQVo7QUFDQSxRQUFJLElBQUlPLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtSLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0NPLEdBQXRDLEVBQTJDO0FBQzFDTCxZQUFRQyxHQUFSLENBQVksS0FBS0osS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxDQUFsQixFQUFxQkksTUFBakM7QUFDQSxRQUFHLEtBQUtaLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sQ0FBbEIsRUFBcUJJLE1BQXJCLENBQUgsRUFBaUM7QUFDaENELG1CQUFjSixJQUFkLENBQW1CLEtBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sQ0FBbEIsQ0FBbkI7QUFDQTtBQUNEO0FBQ0QsUUFBS0gsUUFBTCxDQUFjO0FBQ2JKLFlBQVFVOztBQURLLElBQWQ7QUFJQTs7O3NDQUVtQixDQUVuQjs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyx3QkFBQyxHQUFELElBQUssVUFBVSxLQUFLRSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBZixHQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpEO0FBS0Msd0JBQUMsTUFBRCxJQUFRLGFBQWEsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsRUFBa0QsT0FBUSxLQUFLZCxLQUFMLENBQVdDLE1BQXJFLEdBTEQ7QUFNQyx3QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLRCxLQUFMLENBQVdDLE1BQTdCLEdBTkQ7QUFPQztBQUFBO0FBQUEsT0FBUSxTQUFTLG1CQUFLO0FBQUNlLGdCQUFTQyxNQUFUO0FBQWtCLE9BQXpDO0FBQUE7QUFBQSxLQVBEO0FBUUM7QUFBQTtBQUFBLE9BQVEsU0FBVSxtQkFBTTtBQUFDLGNBQUtDLGlCQUFMO0FBQXlCLE9BQWxEO0FBQUE7QUFBQSxLQVJEO0FBU0M7QUFBQTtBQUFBLE9BQVEsU0FBVSxtQkFBTTtBQUFDLGNBQUtDLGlCQUFMO0FBQXlCLE9BQWxEO0FBQUE7QUFBQTtBQVRELElBREQ7QUFhQTs7OztFQXJFZ0JDLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bW92aWVzOiB0aGlzLnByb3BzLm1vdmllc1xuXHRcdH1cblx0fVxuXG5cdGFkZE1vdmllKHZhbHVlKSB7XG5cdFx0Y29uc29sZS5sb2coJ3RoaXMgaGl0Jylcblx0XHRpZih2YWx1ZSA9PT0gJycpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRtb3ZpZXM6IFt7dGl0bGU6ICdPb3BzIEkgZG8gbm90IHRoaW5rIHlvdSBlbnRlcmVkIGEgbW92aWUgdGl0bGUgLSBUcnkgYWdhaW4hJ31dXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlLm1vdmllcy5wdXNoKHt0aXRsZTogdmFsdWV9KVxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXMpXG5cdFx0XHQvL2hvdyBkbyB5b3UgY2xlYXIgdGhlIGlucHV0IGZpZWxkIGFmdGVyIGNsaWNraW5nIHRoZSBidXR0b24/XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbdGhpcy5zdGF0ZS5tb3ZpZXNbaV1dXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ01vdmllIE5vdCBGb3VuZCAtLSBQbGVhc2UgcmVmcmVzaCBhbmQgVHJ5IEFnYWluISd9XVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9ubHlXYXRjaGVkTW92aWVzKCkge1xuXHRcdHZhciB3YXRjaGVkTW92aWVzPSBbXVxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzWzBdKVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllczsgaSsrKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllc1tpXS50b2dnbGUpXG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXVt0b2dnbGVdKSB7XG5cdFx0XHRcdHdhdGNoZWRNb3ZpZXMucHVzaCh0aGlzLnN0YXRlLm1vdmllc1tpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRtb3ZpZXM6IHdhdGNoZWRNb3ZpZXNcblx0XHRcblx0XHR9KVxuXHR9XG5cblx0b25seVRvV2F0Y2hNb3ZpZXMoKSB7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgyPiBGZWVsIGZyZWUgdG8gYWRkIG1vdmllcyB0byBvdXIgbGlzdCBoZXJlISA8L2gyPlxuXHRcdFx0XHQ8QWRkIGFkZE1vdmllPXt0aGlzLmFkZE1vdmllLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PGgyPiBIYXZlIGEgbW92aWUgaW4gbWluZD88L2gyPlxuXHRcdFx0XHQ8aDM+IENoZWNrIGhlcmUgdG8gc2VlIGlmIHdlIGhhdmUgaXQgaW4gb3VyIGxpc3QhIDwvaDM+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz0geygpID0+IHt0aGlzLm9ubHlXYXRjaGVkTW92aWVzKCl9fT4gV2F0Y2hlZCBNb3ZpZXM8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4ge3RoaXMub25seVRvV2F0Y2hNb3ZpZXMoKX19PiBNb3ZpZXMgVG8gV2F0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2Plx0XG5cdFx0KVxuXHR9XG59Il19