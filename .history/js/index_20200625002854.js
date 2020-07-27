class Timer {
  constructor() {
    (this.hoursInput = null),
      (this.minutesInput = null),
      (this.secondsInput = null),
      (this.editBtn = null),
      (this.runBtn = null),
      (this.rerunBtn = null),
      (this.timerInputs = null),
      (this.audio = null),
      (this.alarm = null);

    this.UiSelectors = {
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      edit: "[data-edit]",
      run: "[data-run]",
      rerun: "[data-rerun]",
      audio: "[data-audio]",
      alarm: "[data-alarm]",
    };
  }
  initialiizeTimer() {
      this.hoursInput = document.querySelector(this.UiSelectors.hours),
      this.minutesInput = document.querySelector(this.UiSelectors.minutes),
      this..secondsInput = document.querySelector(this.UiSelectors.seconds),
      this.editBtn = document.querySelector(this.UiSelectors.edit)
      this.runBtn = document.querySelector(this.UiSelectors.run)
      this.rerunBtn = document.querySelector(this.UiSelectors.rerun)
  }
}
