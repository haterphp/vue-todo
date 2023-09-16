const urlReplacer = (url: string, options: Record<string, string>): string => {
    return Object.entries(options).reduce((acc, [k, v]) => {
        return acc.replace(new RegExp(`:${k}`, 'g'), v)
    }, url)
}

export { urlReplacer }