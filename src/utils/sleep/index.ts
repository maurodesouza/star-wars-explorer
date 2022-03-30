const sleep = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export { sleep };
