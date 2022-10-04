function isEmpty(a: any, index: number) {
    return a && a.length === 0;
}

function isNonArray(a: any, index: number) {
    return !Array.isArray(a);
}

function isExistingIndex(a: number[], index: number) {
    return a.indexOf(index) >= 0;
}



export function nextSmallestNumber(a: any, x: number) {
    const invalid = [isEmpty, isNonArray].some((validator) => validator(a, x));

    if (invalid) {
        return -1;
    }

    if (isExistingIndex(a, x)) {
        return a[a.indexOf(x)];
    }

    const midIndex = Math.round((a.length - 1) / 2);

    const func = function(index: number, testCase: number) {
        const value = a[index];

        if (value < testCase) {
            return value;
        }

        func()
    }

    for (let y = a.length - 1; y >= 0; y--) {
        if (a[y] < x) {
            return a[y];
        }
    }

    return -1;
}
