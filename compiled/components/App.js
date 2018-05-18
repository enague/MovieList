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
			value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGl0bGUiLCJwdXNoIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiYWRkTW92aWUiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJsb2NhdGlvbiIsInJlbG9hZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURQLEdBQWI7QUFGa0I7QUFLbEI7Ozs7MkJBRVFDLEssRUFBTztBQUNmQyxXQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLE9BQUdGLFVBQVUsRUFBYixFQUFpQjtBQUNoQixTQUFLRyxRQUFMLENBQWM7QUFDYkosYUFBUSxDQUFDLEVBQUNLLE9BQU8sNERBQVIsRUFBRDtBQURLLEtBQWQ7QUFHQSxJQUpELE1BSU87QUFDTixTQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLElBQWxCLENBQXVCLEVBQUNELE9BQU9KLEtBQVIsRUFBdkI7QUFDQUMsWUFBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0MsTUFBdkI7QUFDQTtBQUNBO0FBQ0Q7Ozs4QkFFV0MsSyxFQUFPO0FBQ2xCLFFBQUksSUFBSU0sSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCUSxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakQsUUFBRyxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLEVBQXFCRixLQUFyQixDQUEyQkksV0FBM0IsT0FBNkNSLE1BQU1RLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS0wsUUFBTCxDQUFjO0FBQ2JKLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLENBQWxCLENBQUQ7QUFESyxNQUFkO0FBR0E7QUFDQSxLQUxELE1BS087QUFDTixVQUFLSCxRQUFMLENBQWM7QUFDYkosY0FBUSxDQUFDLEVBQUNLLE9BQU8sa0RBQVIsRUFBRDtBQURLLE1BQWQ7QUFHQTtBQUNEO0FBQ0RKLFdBQVEsRUFBUjtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDLHdCQUFDLEdBQUQsSUFBSyxVQUFVLEtBQUtTLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFmLEdBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEQ7QUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkQ7QUFLQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtaLEtBQUwsQ0FBV0MsTUFBckUsR0FMRDtBQU1DLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FORDtBQU9DO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ2EsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBO0FBUEQsSUFERDtBQVdBOzs7O0VBakRnQkMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHR9XG5cblx0YWRkTW92aWUodmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZygndGhpcyBoaXQnKVxuXHRcdGlmKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG1vdmllczogW3t0aXRsZTogJ09vcHMgSSBkbyBub3QgdGhpbmsgeW91IGVudGVyZWQgYSBtb3ZpZSB0aXRsZSAtIFRyeSBhZ2FpbiEnfV1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiB2YWx1ZX0pXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllcylcblx0XHRcdC8vaG93IGRvIHlvdSBjbGVhciB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ1dHRvbj9cblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhbHVlID0gJyc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMj4gRmVlbCBmcmVlIHRvIGFkZCBtb3ZpZXMgdG8gb3VyIGxpc3QgaGVyZSEgPC9oMj5cblx0XHRcdFx0PEFkZCBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxoMj4gSGF2ZSBhIG1vdmllIGluIG1pbmQ/PC9oMj5cblx0XHRcdFx0PGgzPiBDaGVjayBoZXJlIHRvIHNlZSBpZiB3ZSBoYXZlIGl0IGluIG91ciBsaXN0ISA8L2gzPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IG1vdmllPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtsb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn0iXX0=