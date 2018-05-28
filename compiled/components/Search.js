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
						}, className: "search" },
					" Search "
				)
			);
		}
	}]);

	return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTztBQURLLEdBQWI7O0FBRmtCO0FBTWxCOzs7O29DQUdpQkMsQyxFQUFHO0FBQ3BCO0FBQ0EsUUFBS0MsUUFBTCxDQUFjO0FBQ2JGLFdBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFERixJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ087QUFDRSxnQkFBVSxjQURaO0FBRUUsV0FBSyxNQUZQO0FBR0UsWUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBSHBCO0FBSUUsZUFBVSxLQUFLSSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixNQURQO0FBT007QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBTTtBQUFDLGNBQUtQLEtBQUwsQ0FBV1EsV0FBWCxDQUF1QixPQUFLUCxLQUFMLENBQVdDLEtBQWxDO0FBQXlDLE9BQWpFLEVBQW1FLFdBQVUsUUFBN0U7QUFBQTtBQUFBO0FBUE4sSUFERDtBQVlBOzs7O0VBOUJtQk8sTUFBTUMsUyIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6ICcnXG5cdFx0fTtcblxuXHR9XG5cblxuXHRoYW5kbGVJbnB1dENoYW5nZShlKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOmUudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgXHQgXHQ8aW5wdXRcbiAgICAgICAgICBcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBcdFx0dHlwZT1cInRleHRcIlxuICAgICAgICAgIFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgXHQvPlxuICAgICAgICBcdDxidXR0b24gb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMuaGFuZGxlQ2xpY2sodGhpcy5zdGF0ZS52YWx1ZSl9fSBjbGFzc05hbWU9XCJzZWFyY2hcIj4gU2VhcmNoIDwvYnV0dG9uPlxuICAgICAgICBcdDwvZGl2PiBcblxuXHRcdClcblx0fVxufVxuIl19