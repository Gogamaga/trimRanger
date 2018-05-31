import './index.scss'

import painGradation from './painGradation';

painGradation()

const trimInput = document.querySelector('.trim');
const lengthInput = document.querySelector('.length');
trimInput.value = 0
lengthInput.value = 1000
let video_length = +lengthInput.value;


const leftThumb = document.querySelector('.left-thumb')
const rightThumb = document.querySelector('.right-thumb')

trimInput.addEventListener('input', (e) => {
    const {
        target
    } = e;
    console.log(target.value)
})

lengthInput.addEventListener('input', (e) => {
    const {
        target
    } = e;
    console.log(target.value)
})

const mouse_move_trim = (e) => {
    const rangeWrap = document.querySelector('.range-wrap');
    const rangeWrap_container = document.querySelector('.right_thumb_container');
    const rangeWrap_width = rangeWrap.offsetWidth;
    const position_mouse = e.clientX - rangeWrap.getBoundingClientRect().left;
    if (position_mouse >= 0 && position_mouse <= rangeWrap_width) {
        leftThumb.style.left = position_mouse + "px";
        rangeWrap_container.style.width = rangeWrap_width - parseInt(rangeWrap_container.style.right) - position_mouse + 'px';
        // ------------INPUT---------- //
        const rangeWrap_percent = rangeWrap_width / 100;
        const video_length_percent = video_length / 100;
        const position_left_thumb = position_mouse / rangeWrap_percent;
        const position_right_thumb = Math.round(parseInt(rangeWrap_container.style.right) / rangeWrap_percent);
        trimInput.value = Math.round(video_length_percent * position_left_thumb);
        lengthInput.value = video_length - trimInput.value - position_right_thumb * video_length_percent;
    }
}

leftThumb.addEventListener('mousedown', (e) => {
    right_thumb_container_width = parseInt(right_thumb_container.style.width)
    rangeWrap.addEventListener('mousemove', mouse_move_trim)
})

const right_thumb_container = document.querySelector('.right_thumb_container');
let right_thumb_container_width;

const mouse_move_length = function (e) {
    const rangeWrap = document.querySelector('.range-wrap');
    const right_thumb_container = document.querySelector('.right_thumb_container');
    const rangeWrap_width = rangeWrap.offsetWidth;
    const mouse_position = e.clientX - rangeWrap.getBoundingClientRect().left;
    if (mouse_position >= 0 && mouse_position <= rangeWrap_width) {
        right_thumb_container.style.width = mouse_position - parseInt(leftThumb.style.left) + 'px';
        right_thumb_container.style.right = rangeWrap_width - mouse_position + 'px';
        // -------INPUT--------//
        const rangeWrap_percent = rangeWrap_width / 100;
        const video_length_percent = video_length / 100;
        const position_left_thumb = leftThumb.style.left / rangeWrap_percent;
        const position_right_thumb = parseInt(right_thumb_container.style.right) / rangeWrap_percent;
        lengthInput.value = video_length - trimInput.value - Math.round(position_right_thumb * video_length_percent);
    }
}

rightThumb.addEventListener('mousedown', (e) => {
    right_thumb_container_width = parseInt(right_thumb_container.style.width)
    rangeWrap.addEventListener('mousemove', mouse_move_length)
})

const rangeWrap = document.querySelector('.range-wrap');

document.addEventListener('mouseup', (e) => {
    rangeWrap.removeEventListener('mousemove', mouse_move_trim)
    rangeWrap.removeEventListener('mousemove', mouse_move_length)
})

const rangeWrap1 = document.querySelector('.range-wrap');
const right_thumb_container1 = document.querySelector('.right_thumb_container');
right_thumb_container.style.width = rangeWrap1.offsetWidth + 'px';