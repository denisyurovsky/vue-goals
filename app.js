const app = Vue.createApp({
  data() {
    return { goals: [], inputText: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputText);
      this.inputText = "";
    },
    deleteGoal(idx) {
      // this.goals = this.goals.filter((goal, index) => index !== idx);
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
