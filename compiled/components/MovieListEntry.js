'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListEntry = function (_React$Component) {
	_inherits(MovieListEntry, _React$Component);

	function MovieListEntry(props) {
		_classCallCheck(this, MovieListEntry);

		var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

		_this.state = {
			movieInfo: _this.props.movieDetail,
			info: false
		};
		return _this;
	}

	_createClass(MovieListEntry, [{
		key: 'showResultsNow',
		value: function showResultsNow() {
			this.setState(function (prevState) {
				return {
					info: !prevState.info
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ id: 'movie', onClick: function onClick() {
							_this2.showResultsNow();
						} },
					' ',
					this.props.movieDetail.title,
					' '
				),
				React.createElement(
					'div',
					null,
					' ',
					this.state.info ? React.createElement(Info, { movieDetail: this.state.movieInfo }) : null,
					' '
				)
			);
		}
	}]);

	return MovieListEntry;
}(React.Component);

// class Info extends React.Component {
// 	constructor(props) {
// 		super(props) 


// 	}

//     render() {
//         return (
//             <div id="results" className="search-results">
// 	            <div> Year: {this.props.movieDetail.Year}</div>
// 	            <div> Runtime {this.props.movieDetail.Runtime}</div>
// 	            <div> Metascore: {this.props.movieDetail.Metascore}</div>
// 	            <div> imdbRating: {this.props.movieDetail.imdbRating}</div>
//             </div>

//         );
//     }
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJtb3ZpZUluZm8iLCJtb3ZpZURldGFpbCIsImluZm8iLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInNob3dSZXN1bHRzTm93IiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxjOzs7QUFDTCx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsY0FBVyxNQUFLRixLQUFMLENBQVdHLFdBRFY7QUFFWkMsU0FBTTtBQUZNLEdBQWI7QUFGa0I7QUFNakI7Ozs7bUNBR2U7QUFDaEIsUUFBS0MsUUFBTCxDQUFjO0FBQUEsV0FBWTtBQUN6QkQsV0FBTSxDQUFDRSxVQUFVRjtBQURRLEtBQVo7QUFBQSxJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLE9BQUssSUFBRyxPQUFSLEVBQWdCLFNBQVMsbUJBQU07QUFBQyxjQUFLRyxjQUFMO0FBQXNCLE9BQXREO0FBQUE7QUFBMEQsVUFBS1AsS0FBTCxDQUFXRyxXQUFYLENBQXVCSyxLQUFqRjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQU8sVUFBS1AsS0FBTCxDQUFXRyxJQUFYLEdBQWtCLG9CQUFDLElBQUQsSUFBTSxhQUFhLEtBQUtILEtBQUwsQ0FBV0MsU0FBOUIsR0FBbEIsR0FBZ0UsSUFBdkU7QUFBQTtBQUFBO0FBRkYsSUFERDtBQU9BOzs7O0VBeEIyQk8sTUFBTUMsUzs7QUEyQm5DO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllSW5mbzogdGhpcy5wcm9wcy5tb3ZpZURldGFpbCxcblx0XHRcdGluZm86IGZhbHNlXHRcblx0XHR9O1xuIFx0fVxuXG5cblx0c2hvd1Jlc3VsdHNOb3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9Pih7XG5cdFx0XHRpbmZvOiAhcHJldlN0YXRlLmluZm9cblx0XHR9KSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0IFx0XHQ8ZGl2IGlkPSdtb3ZpZScgb25DbGljaz17KCkgPT4ge3RoaXMuc2hvd1Jlc3VsdHNOb3coKX19PiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC50aXRsZX0gPC9kaXY+XG5cdFx0IFx0XHQ8ZGl2PiB7dGhpcy5zdGF0ZS5pbmZvID8gPEluZm8gbW92aWVEZXRhaWw9e3RoaXMuc3RhdGUubW92aWVJbmZvfSAvPiA6IG51bGx9IDwvZGl2PiBcdFxuICAgIFx0XHQ8L2Rpdj5cblxuXHRcdClcblx0fVxufVxuXG4vLyBjbGFzcyBJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vIFx0Y29uc3RydWN0b3IocHJvcHMpIHtcbi8vIFx0XHRzdXBlcihwcm9wcykgXG5cblx0XHRcbi8vIFx0fVxuXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPGRpdiBpZD1cInJlc3VsdHNcIiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxuLy8gXHQgICAgICAgICAgICA8ZGl2PiBZZWFyOiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5ZZWFyfTwvZGl2PlxuLy8gXHQgICAgICAgICAgICA8ZGl2PiBSdW50aW1lIHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLlJ1bnRpbWV9PC9kaXY+XG4vLyBcdCAgICAgICAgICAgIDxkaXY+IE1ldGFzY29yZToge3RoaXMucHJvcHMubW92aWVEZXRhaWwuTWV0YXNjb3JlfTwvZGl2PlxuLy8gXHQgICAgICAgICAgICA8ZGl2PiBpbWRiUmF0aW5nOiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5pbWRiUmF0aW5nfTwvZGl2PlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbi8vICAgICAgICAgKTtcbi8vICAgICB9XG4vLyB9OyJdfQ==