Journals.Router.map(function() {
  this.resource('CreateJournal');
  this.resource('write',{path:':write_jagah'});
  this.resource('EditJournal');
  this.resource('ReadJournal',function() {
    this.resource('view');
  });
});

Journals.ReadJournalRoute = Ember.Route.extend({
  model: function() {
    return journals;
    //return this.store.find('journal');
  },
  setupController : function(controller,model) {
    controller.set('model',model);
    controller.set('list',model);
  }
});

Journals.CreateJournalRoute = Ember.Route.extend({
  model: function() {
    var data = {jagah :""};
        return data;
    //return this.store.find('journal');
  },
  setupController : function(controller,model) {
    controller.set('model',{});
  }
});


var journals=  [
{
  jagah: 'Munnar',
  tarik: '22/03/2014',
  din: 3
},
{
  jagah: 'Amritsar',
  tarik: '22/05/2014',
  din: 3
},
{
  jagah: 'Shillong',
  tarik: '22/09/2014',
  din: 3
}
];