console.log("start");

// throttle a list of promises to run at most 5 at a time

function throttle<T>(promises: Promise<T>[], max: number): Promise<T[]> {}
