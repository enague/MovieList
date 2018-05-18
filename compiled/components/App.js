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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiaSIsImxlbmd0aCIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxNQUFLRixLQUFMLENBQVdFO0FBRFAsR0FBYjtBQUZrQjtBQUtsQjs7Ozs4QkFFV0MsSyxFQUFPO0FBQ2xCLFFBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxNQUFyQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDakQsUUFBRyxLQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JFLENBQWxCLEVBQXFCRSxLQUFyQixDQUEyQkMsV0FBM0IsT0FBNkNKLE1BQU1JLFdBQU4sRUFBaEQsRUFBcUU7QUFDcEUsVUFBS0MsUUFBTCxDQUFjO0FBQ2JOLGNBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JFLENBQWxCLENBQUQ7QUFESyxNQUFkO0FBR0E7QUFDQSxLQUxELE1BS087QUFDTixVQUFLSSxRQUFMLENBQWM7QUFDYk4sY0FBUSxDQUFDLEVBQUNJLE9BQU8sa0RBQVIsRUFBRDtBQURLLE1BQWQ7QUFHQTtBQUNEO0FBQ0RILFdBQVEsRUFBUjtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDLHdCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtNLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXJCLEVBQWtELE9BQVEsS0FBS1QsS0FBTCxDQUFXQyxNQUFyRSxHQUREO0FBRUMsd0JBQUMsU0FBRCxJQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxNQUE3QixHQUZEO0FBR0M7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDUyxnQkFBU0MsTUFBVDtBQUFrQixPQUF6QztBQUFBO0FBQUE7QUFIRCxJQUREO0FBT0E7Ozs7RUFoQ2dCQyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGljayh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhbHVlID0gJyc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cdFxuXHRcdClcblx0fVxufSJdfQ==