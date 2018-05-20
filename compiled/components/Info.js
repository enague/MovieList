'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
	_inherits(Info, _React$Component);

	function Info(props) {
		_classCallCheck(this, Info);

		var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

		_this.state = {
			toggle: true
		};
		return _this;
	}

	_createClass(Info, [{
		key: 'toggleWatch',
		value: function toggleWatch() {
			this.setState(function (prevState) {
				return {
					toggle: !prevState.toggle
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'info' },
				React.createElement(
					'div',
					null,
					' Year: ',
					this.props.movieDetail.Year
				),
				React.createElement(
					'div',
					null,
					' Runtime ',
					this.props.movieDetail.Runtime
				),
				React.createElement(
					'div',
					null,
					' Metascore: ',
					this.props.movieDetail.Metascore
				),
				React.createElement(
					'div',
					null,
					' imdbRating: ',
					this.props.movieDetail.imdbRating
				),
				React.createElement(
					'div',
					{ className: 'watch', onClick: function onClick() {
							_this2.toggleWatch();
						} },
					' ',
					this.state.toggle ? 'To Watch' : 'Watched',
					' '
				),
				React.createElement(
					'div',
					{ 'class': 'rate' },
					React.createElement(
						'div',
						{ className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ className: 'rate-item' },
						'\u2606'
					)
				)
			);
		}
	}]);

	return Info;
}(React.Component);

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm8uanN4Il0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJtb3ZpZURldGFpbCIsIlllYXIiLCJSdW50aW1lIiwiTWV0YXNjb3JlIiwiaW1kYlJhdGluZyIsInRvZ2dsZVdhdGNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0wsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUTtBQURJLEdBQWI7QUFGa0I7QUFLbEI7Ozs7Z0NBRWE7QUFDYixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFhO0FBQzFCRCxhQUFPLENBQUNFLFVBQVVGO0FBRFEsS0FBYjtBQUFBLElBQWQ7QUFHQTs7OzJCQUVXO0FBQUE7O0FBQ0wsVUFDSTtBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFhLFVBQUtGLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QkM7QUFBcEMsS0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQWUsVUFBS04sS0FBTCxDQUFXSyxXQUFYLENBQXVCRTtBQUF0QyxLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBa0IsVUFBS1AsS0FBTCxDQUFXSyxXQUFYLENBQXVCRztBQUF6QyxLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBbUIsVUFBS1IsS0FBTCxDQUFXSyxXQUFYLENBQXVCSTtBQUExQyxLQUpEO0FBS0M7QUFBQTtBQUFBLE9BQUssV0FBVSxPQUFmLEVBQXVCLFNBQVMsbUJBQU07QUFBQyxjQUFLQyxXQUFMO0FBQW1CLE9BQTFEO0FBQUE7QUFBOEQsVUFBS1QsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLFVBQXBCLEdBQWlDLFNBQS9GO0FBQUE7QUFBQSxLQUxEO0FBTUM7QUFBQTtBQUFBLE9BQUssU0FBTSxNQUFYO0FBQ0w7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQSxNQURLO0FBRUw7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQSxNQUZLO0FBR0w7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQSxNQUhLO0FBSUw7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQSxNQUpLO0FBS0w7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQUxLO0FBTkQsSUFESjtBQWlCSDs7OztFQWhDY1MsTUFBTUMsUzs7QUFpQ3hCIiwiZmlsZSI6IkluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcykgXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZTogdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVdhdGNoKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+KHtcblx0XHRcdHRvZ2dsZTohcHJldlN0YXRlLnRvZ2dsZVxuXHRcdH0pKTtcblx0fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG5cdCAgICAgICAgICAgIDxkaXY+IFllYXI6IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLlllYXJ9PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXY+IFJ1bnRpbWUge3RoaXMucHJvcHMubW92aWVEZXRhaWwuUnVudGltZX08L2Rpdj5cblx0ICAgICAgICAgICAgPGRpdj4gTWV0YXNjb3JlOiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5NZXRhc2NvcmV9PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXY+IGltZGJSYXRpbmc6IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLmltZGJSYXRpbmd9PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YXRjaCcgb25DbGljaz17KCkgPT4ge3RoaXMudG9nZ2xlV2F0Y2goKX19PiB7dGhpcy5zdGF0ZS50b2dnbGUgPyAnVG8gV2F0Y2gnIDogJ1dhdGNoZWQnfSA8L2Rpdj5cblx0ICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGVcIj5cblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1pdGVtXCI+4piGPC9kaXY+XG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtaXRlbVwiPuKYhjwvZGl2PlxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWl0ZW1cIj7imIY8L2Rpdj5cblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1pdGVtXCI+4piGPC9kaXY+XG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGUtaXRlbVwiPuKYhjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufTsiXX0=