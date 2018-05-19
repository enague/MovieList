'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var MovieListEntry = (props) => (
// 	<div>
// 		<div id='movie'> {props.movieDetail.title} </div>
// 	</div>
// )

var MovieListEntry = function (_React$Component) {
	_inherits(MovieListEntry, _React$Component);

	function MovieListEntry(props) {
		_classCallCheck(this, MovieListEntry);

		var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

		_this.state = {
			toggle: true

		};

		return _this;
	}

	_createClass(MovieListEntry, [{
		key: 'toggleWatch',
		value: function toggleWatch() {
			this.setState(function (prevState) {
				return {
					toggle: !prevState.toggle
				};
			});
		}

		// 	if(this.state.toggle) {
		// 		//display watched
		// 		this.setState ({
		// 			watch: 'watched'
		// 		})
		// 	} else {
		// 		//display not watched
		// 		this.setState ({
		// 			watch: 'Watch?'
		// 		})
		// 	}
		// }

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ id: 'movie' },
					' ',
					this.props.movieDetail.title,
					React.createElement(
						'div',
						{ onClick: function onClick() {
								_this2.toggleWatch();
							} },
						this.state.toggle ? 'To Watch' : 'Watched'
					)
				)
			);
		}
	}]);

	return MovieListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJ0b2dnbGUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm1vdmllRGV0YWlsIiwidGl0bGUiLCJ0b2dnbGVXYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYzs7O0FBQ0wseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVE7O0FBREksR0FBYjs7QUFGa0I7QUFPakI7Ozs7Z0NBRVk7QUFDYixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFhO0FBQzFCRCxhQUFPLENBQUNFLFVBQVVGO0FBRFEsS0FBYjtBQUFBLElBQWQ7QUFHQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7MkJBRVM7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxPQUFLLElBQUcsT0FBUjtBQUFBO0FBQW1CLFVBQUtGLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QkMsS0FBMUM7QUFDQTtBQUFBO0FBQUEsUUFBSyxTQUFTLG1CQUFNO0FBQUMsZUFBS0MsV0FBTDtBQUFtQixRQUF4QztBQUNDLFdBQUtOLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixVQUFwQixHQUFnQztBQURqQztBQURBO0FBREYsSUFERDtBQVVBOzs7O0VBeEMyQk0sTUFBTUMsUyIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuLy8gXHQ8ZGl2PlxuLy8gXHRcdDxkaXYgaWQ9J21vdmllJz4ge3Byb3BzLm1vdmllRGV0YWlsLnRpdGxlfSA8L2Rpdj5cbi8vIFx0PC9kaXY+XG4vLyApXG5cbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZTogdHJ1ZSxcblx0XG5cdFx0fTtcblxuIFx0fVxuXG5cdHRvZ2dsZVdhdGNoKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+KHtcblx0XHRcdHRvZ2dsZTohcHJldlN0YXRlLnRvZ2dsZVxuXHRcdH0pKTtcblx0fVxuXG5cdC8vIFx0aWYodGhpcy5zdGF0ZS50b2dnbGUpIHtcblx0Ly8gXHRcdC8vZGlzcGxheSB3YXRjaGVkXG5cdC8vIFx0XHR0aGlzLnNldFN0YXRlICh7XG5cdC8vIFx0XHRcdHdhdGNoOiAnd2F0Y2hlZCdcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdC8vZGlzcGxheSBub3Qgd2F0Y2hlZFxuXHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSAoe1xuXHQvLyBcdFx0XHR3YXRjaDogJ1dhdGNoPydcblx0Ly8gXHRcdH0pXG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdCBcdFx0PGRpdiBpZD0nbW92aWUnID4ge3RoaXMucHJvcHMubW92aWVEZXRhaWwudGl0bGV9IFxuXHRcdCBcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiB7dGhpcy50b2dnbGVXYXRjaCgpfX0+XG5cdFx0IFx0XHR7dGhpcy5zdGF0ZS50b2dnbGUgPyAnVG8gV2F0Y2gnIDonV2F0Y2hlZCd9IFxuXHRcdCBcdFx0PC9kaXY+XG5cdFx0IFx0XHQ8L2Rpdj5cbiAgICBcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0iXX0=