const url: string = "https://api.thecatapi.com/v1/images/search";
const button: HTMLButtonElement | null = document.querySelector('button')
const tableBody: HTMLTableCaptionElement | null = document.querySelector("#table-body")
interface CatType {
    id: number
    url: string
    height: number
    width: number
    test?: boolean
}
class Cat implements CatType {
    id: number
    url: string
    height: number
    width: number
    constructor(id: number, url: string, height: number, width: number) {
        this.id = id;
        this.url = url;
        this.height = height;
        this.width = width;
    }
}

class WebDisplay {
    public static addData(data: CatType) {
        const cat = new Cat(data.id, data.url, data.height, data.width);
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `
            <td>${cat.id}</td>
            <td><img src="${cat.url}"/></td>
            <td>${cat.height.toString()}</td>
            <td>${cat.width.toString()}</td>
            <td>${cat.url}</td>
            <td><a href="#">X</a></td>
        `
        tableBody?.appendChild(tableRow)
    }
    public static deleteData(deleteButton: HTMLAnchorElement): void {
        const td = deleteButton.parentElement as HTMLTableCellElement
        const tr = td.parentElement as HTMLTableRowElement
        tr.remove()
    }
}

async function getJSON<T>(url: string): Promise<T> {
    const response: Response = await fetch(url);
    const json: Promise<T> = await response.json();
    return json
}

async function getData() {
    try {
        const json: CatType[] = await getJSON<CatType[]>(url)
        console.log(json);
        const data: CatType = json[0]
        WebDisplay.addData(data)
    } catch (error: Error | unknown) {
        let msg: string;
        if (error instanceof Error) {
            msg = error.message
        } else {
            msg = String(error)
        }
        console.log(msg);
    }
}

button?.addEventListener<'click'>('click', getData);

tableBody?.addEventListener<'click'>('click', (ev: MouseEvent) => {
    WebDisplay.deleteData<HTMLAnchorElement>(ev.target)
})