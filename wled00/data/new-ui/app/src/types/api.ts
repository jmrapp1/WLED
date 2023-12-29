export interface PalxResponse {
    m: number; // pages
    p: { // palette values
        [key: string]: (number|string)[] // each key is the index (a number) and the array values are rgba or "r" or "c1/c2/c3"
    }
}
