export async function delay(promise, timeout) {
    await new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
    return promise;
 }
  