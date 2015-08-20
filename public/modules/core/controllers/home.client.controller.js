'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication',
	function($scope, $http, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		//Book object to hold isbn numbers for request, response from server
		$scope.book = {
			pages: undefined,
			title: undefined,
			subtitle: undefined,
			url: undefined,
			author: undefined,
			isbn: undefined
		};

		//Bool to notify user of error
		$scope.error_dialog = {'show': false};

		//Array to handle multiple books
		$scope.books = [];
		//Model that holds users search terms i.e. isbn numbers
		$scope.search_terms = '';


		/*
		getSearchResults
			On 'enter' click in search bar, make a request to the backend (handled via express) which makes a request to
			openlibrary with ISBN numbers (separated by commas) provided in the request.
		*/

		$scope.getSearchResults = function (keyEvent){
			if (keyEvent.which === 13){

					$scope.books = [];
					var isbn_list = $scope.search_terms.split(',');

					$http.post('/find', {'books': isbn_list}).
						then (function (res){
							console.log(res);
								for (var book in res.data){
									$scope.book = {
										pages: res.data[book].number_of_pages,
										title: res.data[book].title,
										url: res.data[book].url,
									};

									if (res.data[book].hasOwnProperty('subtitle')){
										$scope.book.subtitle = res.data[book].subtitle;
									}

									$scope.books.push($scope.book);
									$scope.book = [];
								}

								if ($scope.books.length === 0){
									$scope.error_dialog.show = true;
								}
								else{
									$scope.error_dialog.show = false;
								}

						});
					}
				};

	}
]);
