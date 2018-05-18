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
			var _this2 = this;

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
					{ onClick: function onClick() {
							return _this2.props.handleClick();
						}, className: "btn hidden-sm-down" },
					" Search "
				)
			);
		}
	}]);

	return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBRmtCO0FBTWxCOzs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ087QUFDRSxnQkFBVSxjQURaO0FBRUUsV0FBSyxNQUZQO0FBR0UsWUFBTTtBQUhSLE1BRFA7QUFNTTtBQUFBO0FBQUEsT0FBUSxTQUFTO0FBQUEsY0FBTSxPQUFLRCxLQUFMLENBQVdFLFdBQVgsRUFBTjtBQUFBLE9BQWpCLEVBQWlELFdBQVUsb0JBQTNEO0FBQUE7QUFBQTtBQU5OLElBREQ7QUFXQTs7OztFQXJCbUJDLE1BQU1DLFMiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICBcdCBcdDxpbnB1dFxuICAgICAgICAgIFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIFx0XHR0eXBlPVwidGV4dFwiXG4gICAgICAgICAgXHRcdHZhbHVlPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgXHQvPlxuICAgICAgICBcdDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDbGljaygpfSBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj4gU2VhcmNoIDwvYnV0dG9uPlxuICAgICAgICBcdDwvZGl2PiBcblxuXHRcdClcblx0fVxufVxuIl19