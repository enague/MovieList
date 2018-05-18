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
		key: 'render',
		value: function render() {
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
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGl0bGUiLCJwdXNoIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURQLEdBQWI7QUFGa0I7QUFLbEI7Ozs7MkJBRVFDLEssRUFBTztBQUNmQyxXQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLE9BQUdGLFVBQVUsRUFBYixFQUFpQjtBQUNoQixTQUFLRyxRQUFMLENBQWM7QUFDYkosYUFBUSxDQUFDLEVBQUNLLE9BQU8sNERBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQSxJQUpELE1BSU87QUFDTixTQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLElBQWxCLENBQXVCLEVBQUNELE9BQU9KLEtBQVIsRUFBdkI7QUFDQUMsWUFBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0MsTUFBdkI7QUFDQTtBQUNBO0FBQ0Q7Ozs4QkFFV0MsSyxFQUFPO0FBQ2xCLFFBQUksSUFBSU0sSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCUSxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakQsUUFBRyxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLEVBQXFCRixLQUFyQixDQUEyQkksV0FBM0IsT0FBNkNSLE1BQU1RLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS0wsUUFBTCxDQUFjO0FBQ2JKLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLENBQUQ7QUFESyxNQUFkO0FBR0E7QUFDQSxLQUxELE1BS087QUFDTixVQUFLSCxRQUFMLENBQWM7QUFDYkosY0FBUSxDQUFDLEVBQUNLLE9BQU8sa0RBQVIsRUFBRDtBQURLLE1BQWQ7QUFHQTtBQUNEO0FBQ0Q7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsd0JBQUMsR0FBRCxJQUFLLFVBQVUsS0FBS0ssUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWYsR0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRDtBQUtDLHdCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXJCLEVBQWtELE9BQVEsS0FBS1osS0FBTCxDQUFXQyxNQUFyRSxHQUxEO0FBTUMsd0JBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxNQUE3QixHQU5EO0FBT0M7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDYSxnQkFBU0MsTUFBVDtBQUFrQixPQUF6QztBQUFBO0FBQUE7QUFQRCxJQUREO0FBV0E7Ozs7RUFoRGdCQyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcblx0XHR9XG5cdH1cblxuXHRhZGRNb3ZpZSh2YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCd0aGlzIGhpdCcpXG5cdFx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnT29wcyBJIGRvIG5vdCB0aGluayB5b3UgZW50ZXJlZCBhIG1vdmllIHRpdGxlIC0gVHJ5IGFnYWluISd9XVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IHZhbHVlfSlcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzKVxuXHRcdFx0Ly9ob3cgZG8geW91IGNsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBjbGlja2luZyB0aGUgYnV0dG9uP1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNsaWNrKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXS50aXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG1vdmllczogW3RoaXMuc3RhdGUubW92aWVzW2ldXVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt7dGl0bGU6ICdNb3ZpZSBOb3QgRm91bmQgLS0gUGxlYXNlIHJlZnJlc2ggYW5kIFRyeSBBZ2FpbiEnfV1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj4gRmVlbCBmcmVlIHRvIGFkZCBtb3ZpZXMgdG8gb3VyIGxpc3QgaGVyZSEgPC9oMj5cblx0XHRcdFx0PEFkZCBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxoMj4gSGF2ZSBhIG1vdmllIGluIG1pbmQ/PC9oMj5cblx0XHRcdFx0PGgzPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L2gzPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IG1vdmllPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtsb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn0iXX0=