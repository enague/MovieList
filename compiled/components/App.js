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
			this.setState({
				movies: [{ title: value }]
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Search, { handleClick: this.handleClick.bind(this), movie: this.state.movies }),
				React.createElement(MovieList, { movie: this.state.movies })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGl0bGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUCxHQUFiO0FBRmtCO0FBS2xCOzs7OzhCQUVXQyxLLEVBQU87QUFDbEJDLFdBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxXQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxRQUFLRyxRQUFMLENBQWM7QUFDYkosWUFBUSxDQUFDLEVBQUNLLE9BQU9KLEtBQVIsRUFBRDtBQURLLElBQWQ7QUFHQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLSyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtSLEtBQUwsQ0FBV0MsTUFBckUsR0FERDtBQUVDLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0I7QUFGRCxJQUREO0FBTUE7Ozs7RUF2QmdCUSxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCdoaXQgZnJvbSBzZWFyY2gnKTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG1vdmllczogW3t0aXRsZTogdmFsdWV9XVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0PC9kaXY+XHRcblx0XHQpXG5cdH1cbn0iXX0=