let data = {
  books: [],
  newBook: {
    name: 'CSAPP',
    page_all: 737,
    days: 30,
    plans: []
  },
  showForm: true
}

let vm = new Vue({
  el: '#app',
  data,
  methods:{
    makePlan() {
      let page = this.newBook.page_all;
      let days = this.newBook.days;
      let eachDay;
      if (page % days === 0) {
        eachDay = page / days;
      } else {
        eachDay = Math.floor(page / days) + 1;
      }
      let plans = this.newBook.plans;
      for (let i = 0; i < days; i++) {
        if (plans[i] == undefined) {
          plans[i] = [];
        }
        let startPage = 1 + i * eachDay;
        let endPage = 1 + (i + 1) * eachDay > page ? page: 1 + (i + 1) * eachDay;
        let read = startPage + '-' + endPage;
        day = read + "（早）";
        night = read + "（晚）";
        plans[i].push(day);
        plans[i].push(night)
        if (plans[i + 1] == undefined) {
          plans[i + 1] = [];  
        }
        if (plans[i + 3] == undefined) {
          plans[i + 3] = [];
        }
        if (plans[i + 7] == undefined) {
          plans[i + 7] = [];
        }
        if (plans[i + 14] == undefined) {
          plans[i + 14] = [];
        }
        plans[i + 1].push(read);
        plans[i + 3].push(read);
        plans[i + 7].push(read);
        plans[i + 14].push(read);
      }
    },
    submitMsg(){
      this.books = [];
      this.books.push(this.newBook);
      this.newBook.plans = [];
      this.makePlan();
    }
  }
})



