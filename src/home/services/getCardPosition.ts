export const getCardPosition = (index: number) => {
    const stack = index <= 2 ? 1 : 2;
    const number = -40 * stack;
    if(index===0) return {} as React.CSSProperties;
    else if(index%2===0) return {left: number, top: stack*25} as React.CSSProperties;
    else return {right: number, top: stack*25} as React.CSSProperties;
}
