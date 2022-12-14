// Site wide cursor
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

document.addEventListener('mouseenter', () => {
	site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
	site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
	const w = site_wide_cursor.clientWidth;
	const h = site_wide_cursor.clientHeight;

	site_wide_cursor.style.transform = 
		`translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
}

// Box Bound Cursors
const boxes = document.querySelectorAll('.boxes .box');

for (let i = 0; i < boxes.length; i++) {
	const box = boxes[i];
	const cursor = box.querySelector('.custom-cursor');

	box.addEventListener('mouseenter', () => {
		site_wide_cursor.style.display = 'none';
	});

	box.addEventListener('mouseleave', () => {
		site_wide_cursor.style.display = 'block';
	});

	document.addEventListener('mousemove', TrackBoxCursor.bind(box));

	document.addEventListener('mousedown', () => cursor.classList.add('active'));
	document.addEventListener('mouseup', () => cursor.classList.remove('active'));
}

function TrackBoxCursor (evt) {
	const box = this;
	const cursor = box.querySelector('.custom-cursor');

	const boxRect = box.getBoundingClientRect();

	const x = evt.clientX - boxRect.left;
	const y = evt.clientY - boxRect.top;

	cursor.style.transform = `translate(${x}px, ${y}px)`;
}