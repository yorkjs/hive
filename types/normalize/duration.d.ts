interface IDuration {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
export declare function normalizeDuration(milliseconds: number): IDuration;
export {};
