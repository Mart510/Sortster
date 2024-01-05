// import block

// generates a random interger between the specified max and min
export default function randomIntinator(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}