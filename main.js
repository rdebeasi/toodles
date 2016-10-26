(function(){
  function Task(descr) {
    this.isDone = false;
    this.descr = descr;

    return this;
  }

  var vm = new Vue({
    el: '#app',
    data: {
      tasks: [
        new Task('Implement MV* framework'),
        new Task('Build a great product'),
        new Task('????'),
        new Task('Profit!!!')
      ],
      newTodoDescr: ''
    },
    methods: {
      addNew: function() {
        this.tasks.push( new Task(this.newTodoDescr) );
        this.newTodoDescr = '';
      }
    }
  })
})();
