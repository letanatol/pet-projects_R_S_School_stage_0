export const getTimeCodeFromNum = (timestamp) => {
    const minutes = Math.floor(timestamp / 60);
    const seconds = String(Math.floor(timestamp - minutes * 60)).padStart(2, 0);

    return `${minutes}:${seconds}`;
}