Journals.CreateJournalController = Ember.ObjectController.extend({
  actions: {
    createJournal : function() {
        alert(this.get('jagah')+" date: "+this.get('tarik'));
    }
  },
    jagah : function() {
    }.observes('jagah')
});

Journals.SearchPlaceComponent  = Ember.TextField.extend ({
  classNames : ['inputclass'],
  placeholder : 'Search By Place',
  keyDown : function(e) {
    //want the model here
  },
  action : 'searchByPlace'
});

Journals.ReadJournalController = Ember.ArrayController.extend({
      
  actions : {
    search : function(id) {
      var model = this.get('model');
      var value = this.get('dhundhJagah');
      console.log(value);
      var list = [];
      var j=0;
      for(var i=0;i<model.length;i++) {
        if(model[i].jagah == value){
          list[j++] = model[i];
        }
      }
      this.set('list',list);
    },
    searchByDate : function() {
      var model = this.get('model');
      var value = this.get('dhundhTarik');
      var list = [];
      var j=0;
      for(var i=0;i<model.length;i++) {
        if(model[i].tarik == value){
          list[j++] = model[i];
        }
      }
      this.set('list',list);
    }
  }
});

