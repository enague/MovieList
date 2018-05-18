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
			toggle: null,
			watch: 'Watch?'
		};

		return _this;
	}

	_createClass(MovieListEntry, [{
		key: 'toggleWatch',
		value: function toggleWatch() {
			this.setState({
				toggle: !false
			});

			if (this.state.toggle) {
				//display watched
				this.setState({
					watch: 'watched'
				});
			} else {
				//display not watched
				this.setState({
					watch: 'Watch?'
				});
			}
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
							_this2.toggleWatch();
						} },
					' ',
					this.props.movieDetail.title,
					React.createElement(
						'div',
						null,
						this.state.watch
					)
				)
			);
		}
	}]);

	return MovieListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJ0b2dnbGUiLCJ3YXRjaCIsInNldFN0YXRlIiwidG9nZ2xlV2F0Y2giLCJtb3ZpZURldGFpbCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7QUFDTCx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxJQURJO0FBRVpDLFVBQU87QUFGSyxHQUFiOztBQUZrQjtBQU9qQjs7OztnQ0FFWTtBQUNiLFFBQUtDLFFBQUwsQ0FBYztBQUNiRixZQUFPLENBQUM7QUFESyxJQUFkOztBQUlBLE9BQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUFkLEVBQXNCO0FBQ3JCO0FBQ0EsU0FBS0UsUUFBTCxDQUFlO0FBQ2RELFlBQU87QUFETyxLQUFmO0FBR0EsSUFMRCxNQUtPO0FBQ047QUFDQSxTQUFLQyxRQUFMLENBQWU7QUFDZEQsWUFBTztBQURPLEtBQWY7QUFHQTtBQUNEOzs7MkJBRVE7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxPQUFLLElBQUcsT0FBUixFQUFnQixTQUFTLG1CQUFNO0FBQUMsY0FBS0UsV0FBTDtBQUFtQixPQUFuRDtBQUFBO0FBQXdELFVBQUtMLEtBQUwsQ0FBV00sV0FBWCxDQUF1QkMsS0FBL0U7QUFDQTtBQUFBO0FBQUE7QUFDQyxXQUFLTixLQUFMLENBQVdFO0FBRFo7QUFEQTtBQURGLElBREQ7QUFVQTs7OztFQXZDMkJLLE1BQU1DLFMiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgTW92aWVMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbi8vIFx0PGRpdj5cbi8vIFx0XHQ8ZGl2IGlkPSdtb3ZpZSc+IHtwcm9wcy5tb3ZpZURldGFpbC50aXRsZX0gPC9kaXY+XG4vLyBcdDwvZGl2PlxuLy8gKVxuXG5jbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2dnbGU6IG51bGwsXG5cdFx0XHR3YXRjaDogJ1dhdGNoPydcblx0XHR9O1xuXG4gXHR9XG5cblx0dG9nZ2xlV2F0Y2goKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2dnbGU6IWZhbHNlXG5cdFx0fSlcblxuXHRcdGlmKHRoaXMuc3RhdGUudG9nZ2xlKSB7XG5cdFx0XHQvL2Rpc3BsYXkgd2F0Y2hlZFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSAoe1xuXHRcdFx0XHR3YXRjaDogJ3dhdGNoZWQnXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL2Rpc3BsYXkgbm90IHdhdGNoZWRcblx0XHRcdHRoaXMuc2V0U3RhdGUgKHtcblx0XHRcdFx0d2F0Y2g6ICdXYXRjaD8nXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHQgXHRcdDxkaXYgaWQ9J21vdmllJyBvbkNsaWNrPXsoKSA9PiB7dGhpcy50b2dnbGVXYXRjaCgpfX0gPiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC50aXRsZX0gXG5cdFx0IFx0XHQ8ZGl2PlxuXHRcdCBcdFx0e3RoaXMuc3RhdGUud2F0Y2h9IFxuXHRcdCBcdFx0PC9kaXY+XG5cdFx0IFx0XHQ8L2Rpdj5cbiAgICBcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0iXX0=