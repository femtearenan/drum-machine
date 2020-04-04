export const PRESSED_KEY = "PRESSED_KEY";
export const DRUM_CLICKED = "DRUM_CLICKED";

export const pressedKey = (keycode) => ({
    type: PRESSED_KEY,
    payload: {
        keycode: keycode
    }
});

export const drumClicked = (elementId) => ({
    type: DRUM_CLICKED,
    payload: {
        id: elementId
    }
})