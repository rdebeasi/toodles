(function(){
  function Task(descr) {
    this.done = false;
    this.descr = descr;

    return this;
  }

  var vm = new Vue({
    el: '#app',
    data: {
      tasks: [
        new Task('Do a thing'),
        new Task('Do another thing')
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
