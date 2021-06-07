class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate;
		this.start();
	}

	start() {
		setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = this.targetDate - currentTime;
			const time = getTimeComponents(deltaTime);
			showCountdownTimer(time);
		}, 1000);
	}
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 13, 2021'),
});
const refs = {
	days: document.querySelector('span[data-value="days"]'),
	hours: document.querySelector('span[data-value="hours"]'),
	mins: document.querySelector('span[data-value="mins"]'),
	secs: document.querySelector('span[data-value="secs"]'),
};

function showCountdownTimer({ days, hours, mins, secs }) {
	refs.days.textContent = `${days}`;
	refs.hours.textContent = `${hours}`;
	refs.mins.textContent = `${mins}`;
	refs.secs.textContent = `${secs}`;
};

function getTimeComponents(time) {
	const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
	const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
	const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
	const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

	return { days, hours, mins, secs };
};

function pad(value) {
	return String(value).padStart(2, '0');
};