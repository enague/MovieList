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
				if (this.state.movies[i].title === value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsInZhbHVlIiwiaSIsImxlbmd0aCIsInRpdGxlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJsb2NhdGlvbiIsInJlbG9hZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURQLEdBQWI7QUFGa0I7QUFLbEI7Ozs7OEJBRVdDLEssRUFBTztBQUNsQixRQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkcsTUFBckMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2pELFFBQUcsS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCRSxDQUFsQixFQUFxQkUsS0FBckIsS0FBK0JILEtBQWxDLEVBQXlDO0FBQ3hDLFVBQUtJLFFBQUwsQ0FBYztBQUNiTCxjQUFRLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCRSxDQUFsQixDQUFEO0FBREssTUFBZDtBQUdBO0FBQ0EsS0FMRCxNQUtPO0FBQ04sVUFBS0csUUFBTCxDQUFjO0FBQ2JMLGNBQVEsQ0FBQyxFQUFDSSxPQUFPLGtEQUFSLEVBQUQ7QUFESyxNQUFkO0FBR0E7QUFDRDtBQUNESCxXQUFRLEVBQVI7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxNQUFELElBQVEsYUFBYSxLQUFLSyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxPQUFRLEtBQUtSLEtBQUwsQ0FBV0MsTUFBckUsR0FERDtBQUVDLHdCQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsTUFBN0IsR0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ1EsZ0JBQVNDLE1BQVQ7QUFBa0IsT0FBekM7QUFBQTtBQUFBO0FBSEQsSUFERDtBQU9BOzs7O0VBaENnQkMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2xpY2sodmFsdWUpIHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlID09PSB2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRtb3ZpZXM6IFt0aGlzLnN0YXRlLm1vdmllc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bW92aWVzOiBbe3RpdGxlOiAnTW92aWUgTm90IEZvdW5kIC0tIFBsZWFzZSByZWZyZXNoIGFuZCBUcnkgQWdhaW4hJ31dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhbHVlID0gJyc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gbW92aWU9IHt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2xvY2F0aW9uLnJlbG9hZCgpfX0+UmVmcmVzaCBQYWdlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cdFxuXHRcdClcblx0fVxufSJdfQ==