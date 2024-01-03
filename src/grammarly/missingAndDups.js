/**
 * The set S originally contains numbers from 1 to n. Unfortunately, due to a data error,
 * one of the set's numbers got duplicated to another number in the set, which resulted
 * in the repetition of one number and loss of another number.
 *
 * Given an array `nums` representing the data of this set after the error, your task is to:
 * 1. find the number that occurs twice and then
 * 2. find the number that is missing
 *
 * Return them both in the form of an array.
 *
 * @example
 * detectMistakes([1,2,2,4]) // returns [2,3]
 *
 * @param {number[]} nums - Data of the set after the error
 * @return {[number, number]} Detected mistakes in the form [duplicate, missing]
 */
