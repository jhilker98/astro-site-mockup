export function getPostYear(date) {
    return date.getFullYear()
}

export function getPostMonth(date) {
    return date.getFullMonth().toString().padStart(2, "0")
}