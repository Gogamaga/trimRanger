import './index.scss'

import painGradation from './painGradation';

painGradation()

const trimInput = document.querySelector('.trim');
const lengthInput = document.querySelector('.length');
trimInput.value = 0
lengthInput.value = 100
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

function width_right_thumb_container() {
    const rangeWrap = document.querySelector('.range-wrap');
    const rangeWrap_container = document.querySelector('.right_thumb_container');
    const rangeWrap_width = rangeWrap.offsetWidth;
    const rangeWrap_width_in_percent = rangeWrap_width / 100;
    const leftThumb_position = leftThumb.style.left;
    const width_right_thumb_container = parseInt(leftThumb_position) ? parseInt(leftThumb_position) : 0;
    rangeWrap_container.style.width = 100 - width_right_thumb_container + '%'
}



const mouse_move_trim = (e) => {
    const rangeWrap = document.querySelector('.range-wrap');
    const rangeWrap_width = rangeWrap.offsetWidth;
    const rangeWrap_width_in_percent = rangeWrap_width / 100
    const position_mouse = e.clientX - rangeWrap.getBoundingClientRect().left;
    const position_mouse_in_percent = position_mouse / 100;
    const next_position_left_thumb = position_mouse / rangeWrap_width_in_percent
    if (next_position_left_thumb >= 0 && next_position_left_thumb <= 100) {
        leftThumb.style.left = next_position_left_thumb + "%";
        const length_in_percent = +video_length / 100;
        trimInput.value = Math.round(next_position_left_thumb * length_in_percent)
        lengthInput.value = video_length - +trimInput.value
        width_right_thumb_container()
    }
}

leftThumb.addEventListener('mousedown', (e) => {
    rangeWrap.addEventListener('mousemove', mouse_move_trim)
})

function width_right_thumb_container_AND_pos_right() {
    const rangeWrap = document.querySelector('.range-wrap');
    const rangeWrap_container = document.querySelector('.right_thumb_container');
    const rangeWrap_width = rangeWrap.offsetWidth;
    console.log(rangeWrap_width, 1)
    const rangeWrap_width_in_percent = rangeWrap_width / 100;
    const rightThumb_position = rightThumb.style.left;
    const width_right_thumb_container = parseInt(rightThumb_position) ? parseInt(rightThumb_position) : 100;
    rangeWrap_container.style.right = 100 - width_right_thumb_container + '%';
    rangeWrap_container.style.width = parseInt(rightThumb_position) + '%';

}

const mouse_move_length = function (e) {
    width_right_thumb_container_AND_pos_right()
    const right_thumb_container = document.querySelector('.right_thumb_container');
    const rangeWrap_width = right_thumb_container.offsetWidth;

    console.log(rangeWrap_width, 2)
    const rangeWrap_width_in_percent = rangeWrap_width / 100;
    const position_mouse = e.clientX - right_thumb_container.getBoundingClientRect().left;
    const position_mouse_in_percent = position_mouse / 100;
    const next_position_left_thumb = position_mouse / rangeWrap_width_in_percent;
    if (next_position_left_thumb >= 0 && next_position_left_thumb <= 100) {
        rightThumb.style.left = next_position_left_thumb + "%";
        const length_in_percent = +video_length / 100;
        lengthInput.value = Math.round(next_position_left_thumb * length_in_percent)

    }
}

rightThumb.addEventListener('mousedown', (e) => {
    rangeWrap.addEventListener('mousemove', mouse_move_length)
})

const rangeWrap = document.querySelector('.range-wrap');

document.addEventListener('mouseup', (e) => {
    video_length = lengthInput.value
    rangeWrap.removeEventListener('mousemove', mouse_move_trim)
    rangeWrap.removeEventListener('mousemove', mouse_move_length)
})


width_right_thumb_container()