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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPO0FBREssR0FBYjs7QUFGa0I7QUFNbEI7Ozs7b0NBR2lCQyxDLEVBQUc7QUFDcEI7QUFDQUEsS0FBRUMsY0FBRjtBQUNBLFFBQUtDLFFBQUwsQ0FBYztBQUNiSCxXQUFNQyxFQUFFRyxNQUFGLENBQVNKO0FBREYsSUFBZDtBQUdBOzs7MkJBRVE7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDTztBQUNFLGdCQUFVLGNBRFo7QUFFRSxXQUFLLE1BRlA7QUFHRSxZQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FIcEI7QUFJRSxlQUFVLEtBQUtLLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QjtBQUpaLE1BRFA7QUFPTTtBQUFBO0FBQUEsT0FBUSxTQUFTLG1CQUFNO0FBQUMsY0FBS1IsS0FBTCxDQUFXUyxXQUFYLENBQXVCLE9BQUtSLEtBQUwsQ0FBV0MsS0FBbEM7QUFBeUMsT0FBakUsRUFBbUUsV0FBVSxvQkFBN0U7QUFBQTtBQUFBO0FBUE4sSUFERDtBQVlBOzs7O0VBL0JtQlEsTUFBTUMsUyIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6ICcnXG5cdFx0fTtcblxuXHR9XG5cblxuXHRoYW5kbGVJbnB1dENoYW5nZShlKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyhlKTtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTplLnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgICAgIFx0IFx0PGlucHV0XG4gICAgICAgICAgXHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgXHRcdHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgXHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIFx0Lz5cbiAgICAgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMuc3RhdGUudmFsdWUpfX0gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+IFNlYXJjaCA8L2J1dHRvbj5cbiAgICAgICAgXHQ8L2Rpdj4gXG5cblx0XHQpXG5cdH1cbn1cbiJdfQ==