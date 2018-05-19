"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = {
			value: ''
		};

		return _this;
	}

	_createClass(Search, [{
		key: "handleInputChange",
		value: function handleInputChange(e) {
			//console.log(e);
			this.setState({
				value: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ className: "search-bar" },
				React.createElement("input", {
					className: "form-control",
					type: "text",
					value: this.state.value,
					onChange: this.handleInputChange.bind(this)
				}),
				React.createElement(
					"button",
					{ onClick: function onClick() {
							_this2.props.handleClick(_this2.state.value);
						}, className: "btn hidden-sm-down" },
					" Search "
				)
			);
		}
	}]);

	return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTztBQURLLEdBQWI7O0FBRmtCO0FBTWxCOzs7O29DQUdpQkMsQyxFQUFHO0FBQ3BCO0FBQ0EsUUFBS0MsUUFBTCxDQUFjO0FBQ2JGLFdBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFERixJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ087QUFDRSxnQkFBVSxjQURaO0FBRUUsV0FBSyxNQUZQO0FBR0UsWUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBSHBCO0FBSUUsZUFBVSxLQUFLSSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixNQURQO0FBT007QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBTTtBQUFDLGNBQUtQLEtBQUwsQ0FBV1EsV0FBWCxDQUF1QixPQUFLUCxLQUFMLENBQVdDLEtBQWxDO0FBQXlDLE9BQWpFLEVBQW1FLFdBQVUsb0JBQTdFO0FBQUE7QUFBQTtBQVBOLElBREQ7QUFZQTs7OztFQTlCbUJPLE1BQU1DLFMiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH07XG5cblx0fVxuXG5cblx0aGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuXHRcdC8vY29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTplLnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgIFx0IFx0PGlucHV0XG4gICAgICAgICAgXHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgXHRcdHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgXHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIFx0Lz5cbiAgICAgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMuc3RhdGUudmFsdWUpfX0gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+IFNlYXJjaCA8L2J1dHRvbj5cbiAgICAgICAgXHQ8L2Rpdj4gXG5cblx0XHQpXG5cdH1cbn1cbiJdfQ==