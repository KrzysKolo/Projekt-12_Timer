class Timer {
  constructor() {
    (this.hourInput = null),
      (this.minutesInput = null),
      (this.secondsInput = null),
      (this.editBtn = null),
      (this.runBtn = null),
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
}
