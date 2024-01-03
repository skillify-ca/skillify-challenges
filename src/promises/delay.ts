// delay a promise

export function delay(ms: number): Promise<any> {}

delay(5000).then(() => console.log("1 second passed"));
