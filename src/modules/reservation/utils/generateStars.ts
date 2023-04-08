/**
 * @description Returns a string of stars according to the number received
 * @param { Number } num determine the number of stars to return
 * @returns A string of stars.
*/
export const generateStars = (num: number): string => {
    const stars = '⭐';
    return stars.repeat(num);
};