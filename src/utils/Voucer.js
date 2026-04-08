export const voucerList = {
    NGOPI10: 10000,
    BESTIE15: 15000,
    ngopi10: 10000,
    bestie15: 15000
};

export const getDiscount = (code) => {
    return voucerList[code] || 0;
}