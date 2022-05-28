import { XMLBuilder } from "xmlbuilder2/lib/interfaces"
import { parseBook, parseElectronicSource } from "./parsers"
import {create} from 'xmlbuilder2'

export const createDoc = (): XMLBuilder => {
    return create({version: '1.0'})
        .ele(
        'b:Sources', {
            'xmlns:b': "http://schemas.openxmlformats.org/officeDocument/2006/bibliography",
            'xmlns': "http://schemas.openxmlformats.org/officeDocument/2006/bibliography",
        })
}

export const finishDoc = (doc: XMLBuilder): string => {
    return doc.up().doc().end({prettyPrint: true})
}

export const textField = (doc: XMLBuilder, tag: string, text: string): XMLBuilder => {
    if (text) {
        return doc.ele(`b:${tag}`).txt(text).up()
    }

    return doc
}

export const startSource = (doc: XMLBuilder, type: string): XMLBuilder => {
    /*
    Generates:
    <b:Source>
        <b:SourceType>type</b:SourceType>
    */
    return doc.ele('b:Source')
            .ele('b:SourceType')
            .txt(type)
            .up()
}

export const closeSource = (doc: XMLBuilder): XMLBuilder => {
    return doc.up()
}

export const addCreators = (doc: XMLBuilder, tag_name: string, ...creators: string[]): XMLBuilder => {
    /* 
    Authors are listed in the following format:
    <b:Author>
        <b:Author>
            <b:NameList>
                <b:Person>
                    <b:Last>Doe</b:Last>
                    <b:First>John</b:First>
                </b:Person>
                <b:Person>
                    <b:Last>Smith</b:Last>
                    <b:First>Steve</b:First>
                </b:Person>
            </b:NameList>
        </b:Author>
    </b:Author>
    */

    tag_name = tag_name ? `b:${tag_name}` : 'b:Author'

    doc = doc.ele('b:Author')
            .ele(tag_name)
            .ele('b:NameList')

    creators.forEach((person) => {
        let split_name = person.split(' ')
        let first_name = split_name[0]
        let last_name =  split_name.length > 1 ? split_name.slice(1, split_name.length) : []

        doc = doc.ele('b:Person')

        doc = textField(doc, 'Last', last_name.join(' '))
        doc = textField(doc, 'First', first_name)

        doc = doc.up()
    })

    return doc.up().up().up()
}