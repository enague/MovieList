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
				{ className: "search-bar form-inline" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTztBQURLLEdBQWI7O0FBRmtCO0FBTWxCOzs7O29DQUdpQkMsQyxFQUFHO0FBQ3BCO0FBQ0EsUUFBS0MsUUFBTCxDQUFjO0FBQ2JGLFdBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFERixJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNPO0FBQ0UsZ0JBQVUsY0FEWjtBQUVFLFdBQUssTUFGUDtBQUdFLFlBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUhwQjtBQUlFLGVBQVUsS0FBS0ksaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCO0FBSlosTUFEUDtBQU9NO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQU07QUFBQyxjQUFLUCxLQUFMLENBQVdRLFdBQVgsQ0FBdUIsT0FBS1AsS0FBTCxDQUFXQyxLQUFsQztBQUF5QyxPQUFqRSxFQUFtRSxXQUFVLG9CQUE3RTtBQUFBO0FBQUE7QUFQTixJQUREO0FBWUE7Ozs7RUE5Qm1CTyxNQUFNQyxTIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogJydcblx0XHR9O1xuXG5cdH1cblxuXG5cdGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcblx0XHQvL2NvbnNvbGUubG9nKGUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6ZS50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICBcdCBcdDxpbnB1dFxuICAgICAgICAgIFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIFx0XHR0eXBlPVwidGV4dFwiXG4gICAgICAgICAgXHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBcdC8+XG4gICAgICAgIFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aGlzLnN0YXRlLnZhbHVlKX19IGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPiBTZWFyY2ggPC9idXR0b24+XG4gICAgICAgIFx0PC9kaXY+IFxuXG5cdFx0KVxuXHR9XG59XG4iXX0=