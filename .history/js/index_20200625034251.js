class Timer {
  constructor() {
    this.hoursInput = null;
    this.minutesInput = null;
    this.secondsInput = null;
    this.editBtn = null;
    this.runBtn = null;
    this.rerunBtn = null;
    this.timerInputs = null;
    this.audio = null;
    this.alarm = null;

    this.iconsPath = "./assets/icons/sprite.svg#";

    this.isEdit = true;
    this.isCounting = false;

    this.interval = null;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.totalTime = 0;

    this.UiSelectors = {
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      edit: "[data-edit]",
      run: "[data-run]",
      rerun: "[data-rerun]",
      timeInput: "[data-timer-input]",
      audio: "[data-audio]",
      alarm: "[data-alarm]",
    };
  }
  initializeTimer() {
    this.hoursInput = document.getElementById(this.UiSelectors.hours);
    this.minutesInput = document.getElementById(this.UiSelectors.minutes);
    this.secondsInput = document.getElementById(this.UiSelectors.seconds);

    this.editBtn = document.querySelector(this.UiSelectors.edit);
    this.runBtn = document.querySelector(this.UiSelectors.run);
    this.rerunBtn = document.querySelector(this.UiSelectors.rerun);
    this.timerInputs = document.querySelectorAll(this.UiSelectors.timeInput);
    this.audio = document.querySelector(this.UiSelectors.audio);
    this.alarm = document.querySelector(this.UiSelectors.alarm);

    this.addEventListeners();
  }

  addEventListeners() {
    this.editBtn.addEventListener("click", () => this.editTime());
  }
  editTime() {
    this.isEdit = !this.isEdit;

    if (this.isEdit) {
      this.isCounting = false;
      clearInterval(this.interval);
      this.selectUseElement(this.editBtn).setAttribute(
        "xlink:href",
        `${this.iconsPath}done-24px`
      );
      this.selectUseElement(this.runBtn).setAttribute(
        "xlink:href",
        `${this.iconsPath}play_arrow-24px`
      );

      this.timerInputs.forEach((timerInput) => {
        timerInput.removeAttribute("disabled");
      });
      this.runBtn.setAttribute("disabled", "");
      return;
    }

    this.selectUseElement(this.editBtn).setAttribute(
      "xlink:href",
      `${this.iconsPath}create-24px`
    );
    this.timerInputs.forEach((timerInput) => {
      timerInput.setAttribute("disabled", "");
    });
    this.runBtn.removeAttribute("disabled");
  }

  selectUseElement(element) {
    return element.querySelector("use");
  }
  getTimerValues() {
    this.hours = parseInt(this.hoursInput.value, 10);
    this.minutes = parseInt(this.minutesInput.value, 10);
    this.seconds = parseInt(this.secondsInput.value, 10);

    this.countTotalTime();
  }
}
