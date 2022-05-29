import { createDoc, finishDoc } from './components'
import { parseBook } from './parsers'

export {createDoc, finishDoc} from './components'

export {
    parseBook,
    parseBookSection,
    parseJournalArticle,
    parseArticleInAPeriodical,
    parseConferenceProceedings,
    parseReport,
    parseWebsite,
    parseDocumentFromWebSite,
    parseElectronicSource,
    parseArt,
    parseSoundRecording,
    parsePerformance,
    parseFilm,
    parseInterview,
    parsePatent,
    parseCase,
    parseMisc
} from './parsers'

let doc = createDoc()
doc = parseBook(doc, 'Hello', ['Alex'], '2002', 'London', 'Penguyin')
console.log(finishDoc(doc))
