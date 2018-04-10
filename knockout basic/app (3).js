$(function(){
	$("#tagDialog").hide();

	//templating
	/*var data  = [
		{Id: 1 ,Name: "Juan"},
		{Id: 2 ,Name: "An"},
		{Id: 3 ,Name: "Duri"},
		{Id: 4 ,Name: "Alan"},
		{Id: 5 ,Name: "Robert"},
	];*/

	var data  = [
		new tagItem(1 , "Juan"),
		new tagItem(2 , "An"),
		new tagItem(3 , "Duri"),
		new tagItem(4 , "Alan"),
		new tagItem(5 , "Robert")
	];

	function tagItem(id, name){
		return {
			Id: ko.observable(id),
			Name: ko.observable(name)
		};
	}

	var viewModel = {

		tags: ko.observableArray(data),
		tagToAdd: ko.observable(""),
		selectedTag: ko.observable(null),

		addTag: function(){
			this.tags.push({Name: this.tagToAdd()});
			this.tagToAdd("");
		},
		selecteTag: function(){
			viewModel.selectedTag(this);
		},
		addOnEnter: function(event){
			var keyCode = ( event.which ? event.which : event.keyCode);
			console.log(keyCode);
			if (keyCode === 13) 
			{
				
				viewModel.addTag();
			}
			return true;
		}

	};

	$(document).on("click", ".delete",  function(){

		var item = ko.dataFor(this);
		viewModel.tags.remove(item);
	});

	$(document).on("click", ".edit", function(){

		$("#tagDialog").dialog({

			buttons:{
				Save: function(){$(this).dialog("close");},
				Cancel: function(){$(this).dialog("close");}
			}
		});
	});

	ko.applyBindings(viewModel);
	
	//COLLECTIONS 
	/*var data = [{name: "bob"},{name: "bryan"},{name: "oconer"}];
	var viewModel = {

		list: ko.observableArray(data),
		addItem: function(){
			this.list.push({name:"yunior"});
		},
		removeItem: function(){
			this.list.pop();
		},
	};

	ko.applyBindings(viewModel);
	*/
	//----------------------------------
	//hello world
	/*
	var viewModel = {

		name: ko.observable("bob"),
		nameVisible: ko.observable(true),
		changeName: function(){
			this.name("Yunior");
		}
	};

	viewModel.displayName = ko.dependentObservable(function(){

		return this.name() + " is" + (!this.nameVisible() ? " not": " visible" );
	}, viewModel);

	ko.applyBindings(viewModel);
	*/

});