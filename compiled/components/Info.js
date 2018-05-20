"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
				_inherits(Info, _React$Component);

				function Info(props) {
								_classCallCheck(this, Info);

								return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));
				}

				_createClass(Info, [{
								key: "render",
								value: function render() {
												return React.createElement(
																"div",
																{ id: "results", className: "search-results" },
																React.createElement(
																				"div",
																				null,
																				" Year: ",
																				this.props.movieDetail.Year
																),
																React.createElement(
																				"div",
																				null,
																				" Runtime ",
																				this.props.movieDetail.Runtime
																),
																React.createElement(
																				"div",
																				null,
																				" Metascore: ",
																				this.props.movieDetail.Metascore
																),
																React.createElement(
																				"div",
																				null,
																				" imdbRating: ",
																				this.props.movieDetail.imdbRating
																)
												);
								}
				}]);

				return Info;
}(React.Component);

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm8uanN4Il0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsIm1vdmllRGV0YWlsIiwiWWVhciIsIlJ1bnRpbWUiLCJNZXRhc2NvcmUiLCJpbWRiUmF0aW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0wsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWkEsS0FEWTtBQUlsQjs7OztpQ0FFVztBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFNBQVIsRUFBa0IsV0FBVSxnQkFBNUI7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFhLHlCQUFLQSxLQUFMLENBQVdDLFdBQVgsQ0FBdUJDO0FBQXBDLGlCQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBZSx5QkFBS0YsS0FBTCxDQUFXQyxXQUFYLENBQXVCRTtBQUF0QyxpQkFGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQWtCLHlCQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUJHO0FBQXpDLGlCQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBbUIseUJBQUtKLEtBQUwsQ0FBV0MsV0FBWCxDQUF1Qkk7QUFBMUM7QUFKRCxhQURKO0FBU0g7Ozs7RUFqQmNDLE1BQU1DLFM7O0FBa0J4QiIsImZpbGUiOiJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpIFxuXG5cdFx0XG5cdH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRzXCIgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cblx0ICAgICAgICAgICAgPGRpdj4gWWVhcjoge3RoaXMucHJvcHMubW92aWVEZXRhaWwuWWVhcn08L2Rpdj5cblx0ICAgICAgICAgICAgPGRpdj4gUnVudGltZSB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5SdW50aW1lfTwvZGl2PlxuXHQgICAgICAgICAgICA8ZGl2PiBNZXRhc2NvcmU6IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLk1ldGFzY29yZX08L2Rpdj5cblx0ICAgICAgICAgICAgPGRpdj4gaW1kYlJhdGluZzoge3RoaXMucHJvcHMubW92aWVEZXRhaWwuaW1kYlJhdGluZ308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufTsiXX0=