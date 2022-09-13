/* eslint-disable @typescript-eslint/restrict-plus-operands */
export const sumByBasket = (arr: any[]) => {
  
  if (!arr || arr?.length === 0) {
    return 0;
  }

  return arr.reduce((acc: number, val: any) => acc + val, 0);
}