import { XMLBuilder } from "xmlbuilder2/lib/interfaces"
import { addCreators, closeSource, startSource, textField } from "./components"

export const sourceGenerator = (
    doc: XMLBuilder,
    type: string,
    textFields?: {id: string, val: string}[],
    creatorFields?: {tag: string, names: string[]}[],
): XMLBuilder => {
    doc = startSource(doc, type)
    textFields.forEach(({id, val}) => {
        doc = textField(doc, id, val)
    })
    creatorFields.forEach(({tag, names}) => {
        if (names) {
            doc = addCreators(doc, tag, ...names)
        }
    })
    return closeSource(doc)
}