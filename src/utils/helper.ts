export function getItemLocalStorage(item: string) {
    let data = localStorage.getItem(item);
    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }
}

export function setItemLocalStorage(item: string, data: any) {
    localStorage.setItem(item, JSON.stringify(data));
}