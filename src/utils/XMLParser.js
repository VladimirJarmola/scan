export function XMLParser(xml, type) {
    let result = '';
    const re = /(<([^>]+)>)/gi;
    const parser = new DOMParser();
    let html = parser.parseFromString(xml, 'text/xml');
    html.getElementsByTagName('scandoc')[0].childNodes.forEach(node => {
        result += node.textContent.replace(re, '')
    })

    switch (true) {
        case type === 'title' && result.length > 100:
            return result.slice(0, 100) + '...';
            break;
        case type === 'content' && result.length > 600:
            return result.slice(0, 600) + '...';
            break;
        default:
            return result
    }
}
