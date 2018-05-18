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
			console.log(e.target.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiYWRkTW92aWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPO0FBREssR0FBYjs7QUFGa0I7QUFNbEI7Ozs7b0NBR2lCQyxDLEVBQUc7QUFDcEJDLFdBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTSixLQUFyQjtBQUNBQyxLQUFFSSxjQUFGO0FBQ0EsUUFBS0MsUUFBTCxDQUFjO0FBQ2JOLFdBQU1DLEVBQUVHLE1BQUYsQ0FBU0o7QUFERixJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ087QUFDRSxnQkFBVSxjQURaO0FBRUUsV0FBSyxNQUZQO0FBR0UsWUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBSHBCO0FBSUUsZUFBVSxLQUFLTyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixNQURQO0FBT007QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBTTtBQUFDLGNBQUtWLEtBQUwsQ0FBV1csUUFBWCxDQUFvQixPQUFLVixLQUFMLENBQVdDLEtBQS9CO0FBQXNDLE9BQTlELEVBQWdFLFdBQVUsb0JBQTFFO0FBQUE7QUFBQTtBQVBOLElBREQ7QUFZQTs7OztFQS9CZ0JVLE1BQU1DLFMiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH07XG5cblx0fVxuXG5cblx0aGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTplLnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgXHQgXHQ8aW5wdXRcbiAgICAgICAgICBcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBcdFx0dHlwZT1cInRleHRcIlxuICAgICAgICAgIFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgXHQvPlxuICAgICAgICBcdDxidXR0b24gb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMuYWRkTW92aWUodGhpcy5zdGF0ZS52YWx1ZSl9fSBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj4gQWRkIDwvYnV0dG9uPlxuICAgICAgICBcdDwvZGl2PiBcblxuXHRcdClcblx0fVxufVxuIl19