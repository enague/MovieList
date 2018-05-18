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
		key: 'handleClick',
		value: function handleClick(value) {
			console.log('hit from search');
			console.log(value);
			console.log(this.state.movies[0].title);

			for (var i = 0; i < this.state.movies.length; i++) {
				if (this.state.movies[i].title === value) {
					this.setState({
						movies: this.state.movies[i]
					});
				} else {
					this.setState({
						movies: [{ title: 'Not Found -- Please Try Again!' }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiaSIsImxlbmd0aCIsInNldFN0YXRlIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwibG9jYXRpb24iLCJyZWxvYWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUCxHQUFiO0FBRmtCO0FBS2xCOzs7OzhCQUVXQyxLLEVBQU87QUFDbEJDLFdBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxXQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQUMsV0FBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkksS0FBakM7O0FBR0EsUUFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBRyxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQXBDLEVBQTRDRCxHQUE1QyxFQUFpRDtBQUNoRCxRQUFHLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkssQ0FBbEIsRUFBcUJELEtBQXJCLEtBQStCSCxLQUFsQyxFQUF5QztBQUN4QyxVQUFLTSxRQUFMLENBQWM7QUFDYlAsY0FBUSxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JLLENBQWxCO0FBREssTUFBZDtBQUdBLEtBSkQsTUFJTztBQUNOLFVBQUtFLFFBQUwsQ0FBYztBQUNiUCxjQUFRLENBQUMsRUFBQ0ksT0FBTyxnQ0FBUixFQUFEO0FBREssTUFBZDtBQUdBO0FBQ0Q7QUFDRDs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLSSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBckUsR0FERDtBQUVDLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ1UsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBO0FBSEQsSUFERDtBQU9BOzs7O0VBbkNnQkMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZygnaGl0IGZyb20gc2VhcmNoJyk7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXNbMF0udGl0bGUpXG5cblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vdmllc1tpXS50aXRsZSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1tpXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTm90IEZvdW5kIC0tIFBsZWFzZSBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IG1vdmllPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZT17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtsb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn0iXX0=