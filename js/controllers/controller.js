Journals.CreateJournalController = Ember.ObjectController.extend({
  actions: {
    createJournal : function() {
        alert(this.get('jagah')+" date: "+this.get('tarik'));
    }
  },
    jagah : function() {
    }.observes('jagah')
    /*
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title) { return false; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
      ,
   dhundhjagah : function() {
    alert(this.get('dhundhjagah'));
  }.observes('dhundhjagah')
    }*/
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
  },
   dhundhJagah : function() {
    console.log('ok');
  }.observes('dhundhJagah')
});


/*Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});*/
