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

    this.iconsPath = './assets/icons/sprite.svg#';

    this.isEdit = true;
    this.isCounting = false;

    this.interval = null;

    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.totalTime = 0;
    this.currentTime = 0;
    this.maxSeconds = 60;
    this.maxMinutes = 60;
    this.maxHours = 99;
    };
  }
  initialiizeTimer() {
      this.hoursInput = document.querySelector(this.UiSelectors.hours);
      this.minutesInput = document.querySelector(this.UiSelectors.minutes);
      this..secondsInput = document.querySelector(this.UiSelectors.seconds);
      this.editBtn = document.querySelector(this.UiSelectors.edit);
      this.runBtn = document.querySelector(this.UiSelectors.run);
      this.rerunBtn = document.querySelector(this.UiSelectors.rerun);
      this.timerInputs = document.querySelectorAll(this.UiSelectors.timerInput);
      this.audio = document.querySelector(this.UiSelectors.audio);
      this.alarm = document.querySelector(this.UiSelectors.alarm);
      this.addEventListeners
  }
  addEventListeners() {
      this.editBtn.addEventListener('click', () => editTime());

  }
  editTime () {
      this.isEdit = !this.isEdit;

      if(this.isEdit) {
        this.editBtn.querySelector('use').setAttribute('xlink:href', 's./assets/icons/sprite.svg#done-24px');

      }
      else {
          this.editBtn.querySelector('use').setAttribute('xlink:href', 's./assets/icons/sprite.svg#create-24px');
      }

  }
}
