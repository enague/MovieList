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

		_this.state = {};

		return _this;
	}

	_createClass(Search, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "search-bar form-inline" },
				React.createElement("input", {
					className: "form-control",
					type: "text",
					value: "Search..."
				}),
				React.createElement(
					"button",
					{ className: "btn hidden-sm-down" },
					" Search "
				)
			);
		}
	}]);

	return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUZrQjtBQU1sQjs7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNPO0FBQ0UsZ0JBQVUsY0FEWjtBQUVFLFdBQUssTUFGUDtBQUdFLFlBQU07QUFIUixNQURQO0FBTU07QUFBQTtBQUFBLE9BQVEsV0FBVSxvQkFBbEI7QUFBQTtBQUFBO0FBTk4sSUFERDtBQVdBOzs7O0VBckJtQkMsTUFBTUMsUyIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgICAgIFx0IFx0PGlucHV0XG4gICAgICAgICAgXHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgXHRcdHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBcdFx0dmFsdWU9XCJTZWFyY2guLi5cIlxuICAgICAgICBcdC8+XG4gICAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj4gU2VhcmNoIDwvYnV0dG9uPlxuICAgICAgICBcdDwvZGl2PiBcblxuXHRcdClcblx0fVxufVxuIl19