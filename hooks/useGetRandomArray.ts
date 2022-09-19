export const useGetRandomArray = <T>(array: T[], number: number): (undefined | T)[] => {
    const currentArray = array
    const arrayResult: T[] = []

    for (let index = 0; index < number; index++) {
        const random = Math.round(Math.random() * (currentArray.length - 1))
        arrayResult.push(currentArray[random])
        currentArray.splice(random, 1)
    }
    return arrayResult
}