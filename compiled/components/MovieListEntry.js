'use strict';

var MovieListEntry = function MovieListEntry(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ id: 'movie' },
			' ',
			props.movieDetail.title,
			' '
		)
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWVEZXRhaWwiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQ7QUFBQSxRQUNwQjtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsS0FBSyxJQUFHLE9BQVI7QUFBQTtBQUFrQkEsU0FBTUMsV0FBTixDQUFrQkMsS0FBcEM7QUFBQTtBQUFBO0FBREQsRUFEb0I7QUFBQSxDQUFyQiIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxkaXYgaWQ9J21vdmllJz4ge3Byb3BzLm1vdmllRGV0YWlsLnRpdGxlfSA8L2Rpdj5cblx0PC9kaXY+XG4pIl19