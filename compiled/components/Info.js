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
			toggle: true,
			star1: true,
			star2: true,
			star3: true,
			star4: true,
			star5: true
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
		key: 'rating1',
		value: function rating1() {
			this.setState(function (prevState) {
				return {
					star1: !prevState.star1
				};
			});
		}
	}, {
		key: 'rating2',
		value: function rating2() {
			this.setState(function (prevState) {
				return {
					star2: !prevState.star2
				};
			});
		}
	}, {
		key: 'rating3',
		value: function rating3() {
			this.setState(function (prevState) {
				return {
					star3: !prevState.star3
				};
			});
		}
	}, {
		key: 'rating4',
		value: function rating4() {
			this.setState(function (prevState) {
				return {
					star4: !prevState.star4
				};
			});
		}
	}, {
		key: 'rating5',
		value: function rating5() {
			this.setState(function (prevState) {
				return {
					star5: !prevState.star5
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var bgColor1 = this.state.star1 ? 'black' : 'yellow';
			var bgColor2 = this.state.star2 ? 'black' : 'yellow';
			var bgColor3 = this.state.star3 ? 'black' : 'yellow';
			var bgColor4 = this.state.star4 ? 'black' : 'yellow';
			var bgColor5 = this.state.star5 ? 'black' : 'yellow';

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
					{ 'class': 'rate' },
					React.createElement(
						'div',
						{ style: { color: bgColor1 }, onClick: this.rating1.bind(this), className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ style: { color: bgColor2 }, onClick: this.rating2.bind(this), className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ style: { color: bgColor3 }, onClick: this.rating3.bind(this), className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ style: { color: bgColor4 }, onClick: this.rating4.bind(this), className: 'rate-item' },
						'\u2606'
					),
					React.createElement(
						'div',
						{ style: { color: bgColor5 }, onClick: this.rating5.bind(this), className: 'rate-item' },
						'\u2606'
					)
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
				)
			);
		}
	}]);

	return Info;
}(React.Component);

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0luZm8uanN4Il0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlIiwic3RhcjEiLCJzdGFyMiIsInN0YXIzIiwic3RhcjQiLCJzdGFyNSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiYmdDb2xvcjEiLCJiZ0NvbG9yMiIsImJnQ29sb3IzIiwiYmdDb2xvcjQiLCJiZ0NvbG9yNSIsIm1vdmllRGV0YWlsIiwiWWVhciIsIlJ1bnRpbWUiLCJNZXRhc2NvcmUiLCJjb2xvciIsInJhdGluZzEiLCJiaW5kIiwicmF0aW5nMiIsInJhdGluZzMiLCJyYXRpbmc0IiwicmF0aW5nNSIsImltZGJSYXRpbmciLCJ0b2dnbGVXYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNMLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVEsSUFESTtBQUVaQyxVQUFPLElBRks7QUFHWkMsVUFBTyxJQUhLO0FBSVpDLFVBQU8sSUFKSztBQUtaQyxVQUFPLElBTEs7QUFNWkMsVUFBTztBQU5LLEdBQWI7QUFGa0I7QUFVbEI7Ozs7Z0NBRWE7QUFDYixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFhO0FBQzFCTixhQUFPLENBQUNPLFVBQVVQO0FBRFEsS0FBYjtBQUFBLElBQWQ7QUFHQTs7OzRCQUVTO0FBQ1QsUUFBS00sUUFBTCxDQUFjO0FBQUEsV0FBYztBQUMzQkwsWUFBTyxDQUFDTSxVQUFVTjtBQURTLEtBQWQ7QUFBQSxJQUFkO0FBR0E7Ozs0QkFFUztBQUNULFFBQUtLLFFBQUwsQ0FBYztBQUFBLFdBQWM7QUFDM0JKLFlBQU8sQ0FBQ0ssVUFBVUw7QUFEUyxLQUFkO0FBQUEsSUFBZDtBQUdBOzs7NEJBRVM7QUFDVCxRQUFLSSxRQUFMLENBQWM7QUFBQSxXQUFjO0FBQzNCSCxZQUFPLENBQUNJLFVBQVVKO0FBRFMsS0FBZDtBQUFBLElBQWQ7QUFHQTs7OzRCQUVTO0FBQ1QsUUFBS0csUUFBTCxDQUFjO0FBQUEsV0FBYztBQUMzQkYsWUFBTyxDQUFDRyxVQUFVSDtBQURTLEtBQWQ7QUFBQSxJQUFkO0FBR0E7Ozs0QkFFUztBQUNULFFBQUtFLFFBQUwsQ0FBYztBQUFBLFdBQWM7QUFDM0JELFlBQU8sQ0FBQ0UsVUFBVUY7QUFEUyxLQUFkO0FBQUEsSUFBZDtBQUdBOzs7MkJBRVc7QUFBQTs7QUFDUixPQUFJRyxXQUFXLEtBQUtULEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixPQUFuQixHQUE2QixRQUE1QztBQUNBLE9BQUlRLFdBQVcsS0FBS1YsS0FBTCxDQUFXRyxLQUFYLEdBQW1CLE9BQW5CLEdBQTZCLFFBQTVDO0FBQ0EsT0FBSVEsV0FBVyxLQUFLWCxLQUFMLENBQVdJLEtBQVgsR0FBbUIsT0FBbkIsR0FBNkIsUUFBNUM7QUFDQSxPQUFJUSxXQUFXLEtBQUtaLEtBQUwsQ0FBV0ssS0FBWCxHQUFtQixPQUFuQixHQUE2QixRQUE1QztBQUNBLE9BQUlRLFdBQVcsS0FBS2IsS0FBTCxDQUFXTSxLQUFYLEdBQW1CLE9BQW5CLEdBQTZCLFFBQTVDOztBQUVHLFVBQ0k7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBYSxVQUFLUCxLQUFMLENBQVdlLFdBQVgsQ0FBdUJDO0FBQXBDLEtBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFlLFVBQUtoQixLQUFMLENBQVdlLFdBQVgsQ0FBdUJFO0FBQXRDLEtBRkQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFrQixVQUFLakIsS0FBTCxDQUFXZSxXQUFYLENBQXVCRztBQUF6QyxLQUhEO0FBSUM7QUFBQTtBQUFBLE9BQUssU0FBTSxNQUFYO0FBQ0w7QUFBQTtBQUFBLFFBQUssT0FBTyxFQUFDQyxPQUFPVCxRQUFSLEVBQVosRUFBK0IsU0FBVSxLQUFLVSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBekMsRUFBa0UsV0FBVSxXQUE1RTtBQUFBO0FBQUEsTUFESztBQUVMO0FBQUE7QUFBQSxRQUFLLE9BQU8sRUFBQ0YsT0FBT1IsUUFBUixFQUFaLEVBQStCLFNBQVUsS0FBS1csT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQXpDLEVBQWtFLFdBQVUsV0FBNUU7QUFBQTtBQUFBLE1BRks7QUFHUjtBQUFBO0FBQUEsUUFBSyxPQUFPLEVBQUNGLE9BQU9QLFFBQVIsRUFBWixFQUErQixTQUFVLEtBQUtXLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUF6QyxFQUFrRSxXQUFVLFdBQTVFO0FBQUE7QUFBQSxNQUhRO0FBSVI7QUFBQTtBQUFBLFFBQUssT0FBTyxFQUFDRixPQUFPTixRQUFSLEVBQVosRUFBK0IsU0FBVSxLQUFLVyxPQUFMLENBQWFILElBQWIsQ0FBa0IsSUFBbEIsQ0FBekMsRUFBa0UsV0FBVSxXQUE1RTtBQUFBO0FBQUEsTUFKUTtBQUtSO0FBQUE7QUFBQSxRQUFLLE9BQU8sRUFBQ0YsT0FBT0wsUUFBUixFQUFaLEVBQStCLFNBQVUsS0FBS1csT0FBTCxDQUFhSixJQUFiLENBQWtCLElBQWxCLENBQXpDLEVBQWtFLFdBQVUsV0FBNUU7QUFBQTtBQUFBO0FBTFEsS0FKRDtBQVdDO0FBQUE7QUFBQTtBQUFBO0FBQW1CLFVBQUtyQixLQUFMLENBQVdlLFdBQVgsQ0FBdUJXO0FBQTFDLEtBWEQ7QUFZQztBQUFBO0FBQUEsT0FBSyxXQUFVLE9BQWYsRUFBdUIsU0FBUyxtQkFBTTtBQUFDLGNBQUtDLFdBQUw7QUFBbUIsT0FBMUQ7QUFBQTtBQUE4RCxVQUFLMUIsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLFVBQXBCLEdBQWlDLFNBQS9GO0FBQUE7QUFBQTtBQVpELElBREo7QUFpQkg7Ozs7RUF6RWMwQixNQUFNQyxTOztBQTBFeEIiLCJmaWxlIjoiSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKSBcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlOiB0cnVlLFxuXHRcdFx0c3RhcjE6IHRydWUsXG5cdFx0XHRzdGFyMjogdHJ1ZSxcblx0XHRcdHN0YXIzOiB0cnVlLFxuXHRcdFx0c3RhcjQ6IHRydWUsXG5cdFx0XHRzdGFyNTogdHJ1ZSxcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVXYXRjaCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9Pih7XG5cdFx0XHR0b2dnbGU6IXByZXZTdGF0ZS50b2dnbGVcblx0XHR9KSk7XG5cdH1cblxuXHRyYXRpbmcxKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG5cdFx0XHRzdGFyMTogIXByZXZTdGF0ZS5zdGFyMVxuXHRcdH0pKVxuXHR9XG5cblx0cmF0aW5nMigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuXHRcdFx0c3RhcjI6ICFwcmV2U3RhdGUuc3RhcjJcblx0XHR9KSlcblx0fVxuXG5cdHJhdGluZzMoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcblx0XHRcdHN0YXIzOiAhcHJldlN0YXRlLnN0YXIzXG5cdFx0fSkpXG5cdH1cblxuXHRyYXRpbmc0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG5cdFx0XHRzdGFyNDogIXByZXZTdGF0ZS5zdGFyNFxuXHRcdH0pKVxuXHR9XG5cblx0cmF0aW5nNSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuXHRcdFx0c3RhcjU6ICFwcmV2U3RhdGUuc3RhcjVcblx0XHR9KSlcblx0fVxuXG4gICAgcmVuZGVyKCkge1xuICAgIFx0dmFyIGJnQ29sb3IxID0gdGhpcy5zdGF0ZS5zdGFyMSA/ICdibGFjaycgOiAneWVsbG93JztcbiAgICBcdHZhciBiZ0NvbG9yMiA9IHRoaXMuc3RhdGUuc3RhcjIgPyAnYmxhY2snIDogJ3llbGxvdyc7XG4gICAgXHR2YXIgYmdDb2xvcjMgPSB0aGlzLnN0YXRlLnN0YXIzID8gJ2JsYWNrJyA6ICd5ZWxsb3cnO1xuICAgIFx0dmFyIGJnQ29sb3I0ID0gdGhpcy5zdGF0ZS5zdGFyNCA/ICdibGFjaycgOiAneWVsbG93JztcbiAgICBcdHZhciBiZ0NvbG9yNSA9IHRoaXMuc3RhdGUuc3RhcjUgPyAnYmxhY2snIDogJ3llbGxvdyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuXHQgICAgICAgICAgICA8ZGl2PiBZZWFyOiB7dGhpcy5wcm9wcy5tb3ZpZURldGFpbC5ZZWFyfTwvZGl2PlxuXHQgICAgICAgICAgICA8ZGl2PiBSdW50aW1lIHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLlJ1bnRpbWV9PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXY+IE1ldGFzY29yZToge3RoaXMucHJvcHMubW92aWVEZXRhaWwuTWV0YXNjb3JlfTwvZGl2PlxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0ZVwiPlxuXHRcdFx0XHQgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBiZ0NvbG9yMX19IG9uQ2xpY2s9IHt0aGlzLnJhdGluZzEuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicmF0ZS1pdGVtXCI+4piGPC9kaXY+XG5cdFx0XHRcdCAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IGJnQ29sb3IyfX0gb25DbGljaz0ge3RoaXMucmF0aW5nMi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJyYXRlLWl0ZW1cIj7imIY8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6IGJnQ29sb3IzfX0gb25DbGljaz0ge3RoaXMucmF0aW5nMy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJyYXRlLWl0ZW1cIj7imIY8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6IGJnQ29sb3I0fX0gb25DbGljaz0ge3RoaXMucmF0aW5nNC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJyYXRlLWl0ZW1cIj7imIY8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6IGJnQ29sb3I1fX0gb25DbGljaz0ge3RoaXMucmF0aW5nNS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJyYXRlLWl0ZW1cIj7imIY8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXY+IGltZGJSYXRpbmc6IHt0aGlzLnByb3BzLm1vdmllRGV0YWlsLmltZGJSYXRpbmd9PC9kaXY+XG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YXRjaCcgb25DbGljaz17KCkgPT4ge3RoaXMudG9nZ2xlV2F0Y2goKX19PiB7dGhpcy5zdGF0ZS50b2dnbGUgPyAnVG8gV2F0Y2gnIDogJ1dhdGNoZWQnfSA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufTsiXX0=