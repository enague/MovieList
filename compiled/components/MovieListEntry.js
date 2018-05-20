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
			toggle: true,
			info: false
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
	}, {
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
				),
				React.createElement(
					'div',
					{ onClick: function onClick() {
							_this2.toggleWatch();
						} },
					' ',
					this.state.toggle ? 'To Watch' : 'Watched',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJtb3ZpZUluZm8iLCJtb3ZpZURldGFpbCIsInRvZ2dsZSIsImluZm8iLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInNob3dSZXN1bHRzTm93IiwidGl0bGUiLCJ0b2dnbGVXYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLGM7OztBQUNMLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxjQUFXLE1BQUtGLEtBQUwsQ0FBV0csV0FEVjtBQUVaQyxXQUFRLElBRkk7QUFHWkMsU0FBTTtBQUhNLEdBQWI7QUFGa0I7QUFPakI7Ozs7Z0NBRVk7QUFDYixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFhO0FBQzFCRixhQUFPLENBQUNHLFVBQVVIO0FBRFEsS0FBYjtBQUFBLElBQWQ7QUFHQTs7O21DQUVnQjtBQUNoQixRQUFLRSxRQUFMLENBQWM7QUFBQSxXQUFZO0FBQ3pCRCxXQUFNLENBQUNFLFVBQVVGO0FBRFEsS0FBWjtBQUFBLElBQWQ7QUFHQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsT0FBSyxJQUFHLE9BQVIsRUFBZ0IsU0FBUyxtQkFBTTtBQUFDLGNBQUtHLGNBQUw7QUFBc0IsT0FBdEQ7QUFBQTtBQUEwRCxVQUFLUixLQUFMLENBQVdHLFdBQVgsQ0FBdUJNLEtBQWpGO0FBQUE7QUFBQSxLQURGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBTyxVQUFLUixLQUFMLENBQVdJLElBQVgsR0FBa0Isb0JBQUMsSUFBRCxJQUFNLGFBQWEsS0FBS0osS0FBTCxDQUFXQyxTQUE5QixHQUFsQixHQUFnRSxJQUF2RTtBQUFBO0FBQUEsS0FIRjtBQUtFO0FBQUE7QUFBQSxPQUFLLFNBQVMsbUJBQU07QUFBQyxjQUFLUSxXQUFMO0FBQW1CLE9BQXhDO0FBQUE7QUFBNEMsVUFBS1QsS0FBTCxDQUFXRyxNQUFYLEdBQW9CLFVBQXBCLEdBQWlDLFNBQTdFO0FBQUE7QUFBQTtBQUxGLElBREQ7QUFXQTs7OztFQWxDMkJPLE1BQU1DLFM7O0FBcUNuQztBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Ik1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZUluZm86IHRoaXMucHJvcHMubW92aWVEZXRhaWwsXG5cdFx0XHR0b2dnbGU6IHRydWUsXG5cdFx0XHRpbmZvOiBmYWxzZVx0XG5cdFx0fTtcbiBcdH1cblxuXHR0b2dnbGVXYXRjaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9Pih7XG5cdFx0XHR0b2dnbGU6IXByZXZTdGF0ZS50b2dnbGVcblx0XHR9KSk7XG5cdH1cblxuXHRzaG93UmVzdWx0c05vdygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+KHtcblx0XHRcdGluZm86ICFwcmV2U3RhdGUuaW5mb1xuXHRcdH0pKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHQgXHRcdDxkaXYgaWQ9J21vdmllJyBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zaG93UmVzdWx0c05vdygpfX0+IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLnRpdGxlfSA8L2Rpdj5cblxuXHRcdCBcdFx0PGRpdj4ge3RoaXMuc3RhdGUuaW5mbyA/IDxJbmZvIG1vdmllRGV0YWlsPXt0aGlzLnN0YXRlLm1vdmllSW5mb30gLz4gOiBudWxsfSA8L2Rpdj4gXG5cdFx0IFx0XHRcblx0XHQgXHRcdDxkaXYgb25DbGljaz17KCkgPT4ge3RoaXMudG9nZ2xlV2F0Y2goKX19PiB7dGhpcy5zdGF0ZS50b2dnbGUgPyAnVG8gV2F0Y2gnIDogJ1dhdGNoZWQnfSA8L2Rpdj5cblx0XHQgXHRcbiAgICBcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn1cblxuLy8gY2xhc3MgSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyBcdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyBcdFx0c3VwZXIocHJvcHMpIFxuXG5cdFx0XG4vLyBcdH1cblxuLy8gICAgIHJlbmRlcigpIHtcbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRzXCIgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cbi8vIFx0ICAgICAgICAgICAgPGRpdj4gWWVhcjoge3RoaXMucHJvcHMubW92aWVEZXRhaWwuWWVhcn08L2Rpdj5cbi8vIFx0ICAgICAgICAgICAgPGRpdj4gUnVudGltZSB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5SdW50aW1lfTwvZGl2PlxuLy8gXHQgICAgICAgICAgICA8ZGl2PiBNZXRhc2NvcmU6IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLk1ldGFzY29yZX08L2Rpdj5cbi8vIFx0ICAgICAgICAgICAgPGRpdj4gaW1kYlJhdGluZzoge3RoaXMucHJvcHMubW92aWVEZXRhaWwuaW1kYlJhdGluZ308L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4vLyAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfTsiXX0=