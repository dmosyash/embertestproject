Journals.Journal = DS.Model.extend({
  jagah: DS.attr('string'),
  tarik: DS.attr('date'),
  din: DS.attr('int')
});

Journals.Journal.FIXTURES = [
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
