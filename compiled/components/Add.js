"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_React$Component) {
	_inherits(Add, _React$Component);

	function Add(props) {
		_classCallCheck(this, Add);

		var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

		_this.state = {
			value: ''
		};

		return _this;
	}

	_createClass(Add, [{
		key: "handleInputChange",
		value: function handleInputChange(e) {
			//console.log(e.target.value);
			e.preventDefault();
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
				null,
				React.createElement("input", {
					className: "form-control",
					type: "text",
					ref: "add",
					value: this.state.value,
					onChange: this.handleInputChange.bind(this)
				}),
				React.createElement(
					"button",
					{ onClick: function onClick() {
							_this2.props.addMovie(_this2.state.value);
						}, className: "btn hidden-sm-down" },
					" Add "
				)
			);
		}
	}]);

	return Add;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJhZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU87QUFESyxHQUFiOztBQUZrQjtBQU1sQjs7OztvQ0FHaUJDLEMsRUFBRztBQUNwQjtBQUNBQSxLQUFFQyxjQUFGO0FBQ0EsUUFBS0MsUUFBTCxDQUFjO0FBQ2JILFdBQU1DLEVBQUVHLE1BQUYsQ0FBU0o7QUFERixJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ087QUFDRSxnQkFBVSxjQURaO0FBRUUsV0FBSyxNQUZQO0FBR0UsVUFBSSxLQUhOO0FBSUUsWUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBSnBCO0FBS0UsZUFBVSxLQUFLSyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFMWixNQURQO0FBUU07QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBTTtBQUFDLGNBQUtSLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQixPQUFLUixLQUFMLENBQVdDLEtBQS9CO0FBQXNDLE9BQTlELEVBQWdFLFdBQVUsb0JBQTFFO0FBQUE7QUFBQTtBQVJOLElBREQ7QUFhQTs7OztFQWhDZ0JRLE1BQU1DLFMiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH07XG5cblx0fVxuXG5cblx0aGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuXHRcdC8vY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOmUudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICBcdCBcdDxpbnB1dFxuICAgICAgICAgIFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIFx0XHR0eXBlPVwidGV4dFwiXG4gICAgICAgICAgXHRcdHJlZj1cImFkZFwiXG4gICAgICAgICAgXHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBcdC8+XG4gICAgICAgIFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5wcm9wcy5hZGRNb3ZpZSh0aGlzLnN0YXRlLnZhbHVlKX19IGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPiBBZGQgPC9idXR0b24+XG4gICAgICAgIFx0PC9kaXY+IFxuXG5cdFx0KVxuXHR9XG59XG4iXX0=