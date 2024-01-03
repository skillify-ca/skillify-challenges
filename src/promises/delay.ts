// delay a promise

export function delay(ms: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(5000).then(() => console.log("1 second passed"));
