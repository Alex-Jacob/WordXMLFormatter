import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { sourceGenerator } from "./sourceGenerator";

export const parseBook = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    year?: string,
    city?: string,
    publisher?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Book',
        [{id: 'Title', val: title},
         {id: 'Year', val: year},
        {id: 'City', val: city},
        {id: 'Publisher', val: publisher}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseBookSection = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    book_authors?: string[],
    book_title?: string,
    year?: string,
    pages?: string,
    city?: string,
    publisher?: string
): XMLBuilder => {
    return sourceGenerator(
        doc, 
        'BookSection',
        [{id: 'Title', val: title},
        {id: 'Year', val: year},
        {id: 'City', val: city},
        {id: 'Publisher', val: publisher},
        {id: 'BookTitle', val: book_title},
        {id: 'Pages', val: pages}],
        [{tag: 'Author', names: authors},
        {tag: 'BookAuthor', names: book_authors}]
    )
}

export const parseJournalArticle = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    journal_name?: string,
    year?: string,
    pages?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'JournalArticle',
        [{id: 'Title', val: title},
        {id: 'JournalName', val: journal_name},
        {id: 'Year', val: year},
        {id: 'Pages', val: pages}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseArticleInAPeriodical = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    periodical_title?: string,
    year?: string,
    month?: string,
    day?: string,
    pages?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'ArticleInAPeriodical',
        [{id: 'Title', val: title},
        {id: 'PeriodicalTitle', val: periodical_title},
        {id: 'Year', val: year},
        {id: 'Month', val: month},
        {id: 'Day', val: day},
        {id: 'Pages', val: pages}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseConferenceProceedings = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    pages?: string,
    year?: string,
    conference_publication_name?: string,
    city?: string,
    publisher?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'ConferenceProceedings',
        [{id: 'Title', val: title},
        {id: 'Year', val: year},
        {id: 'Pages', val: pages},
        {id: 'City', val: city},
        {id: 'Publisher', val: publisher},
        {id: 'ConferenceName', val: conference_publication_name}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseReport = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    year?: string,
    city?: string,
    publisher?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Report',
        [{id: 'Title', val: title},
         {id: 'Year', val: year},
        {id: 'City', val: city},
        {id: 'Publisher', val: publisher}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseWebsite = (
    doc: XMLBuilder,
    name_of_web_page?: string,
    authors?: string[],
    name_of_website?: string,
    year?: string,
    month?: string,
    day?: string,
    url?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'InternetSite',
        [{id: 'Title', val: name_of_web_page},
        {id: 'InternetSiteTitle', val: name_of_website},
        {id: 'Year', val: year},
        {id: 'Month', val: month},
        {id: 'Day', val: day},
        {id: 'URL', val: url}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseDocumentFromWebSite = (
    doc: XMLBuilder,
    name_of_web_page?: string,
    authors?: string[],
    name_of_website?: string,
    year?: string,
    month?: string,
    day?: string,
    url?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'DocumentFromInternetSite',
        [{id: 'Title', val: name_of_web_page},
        {id: 'InternetSiteTitle', val: name_of_website},
        {id: 'Year', val: year},
        {id: 'Month', val: month},
        {id: 'Day', val: day},
        {id: 'URL', val: url}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseElectronicSource = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    year?: string,
    month?: string,
    day?: string,
    city?: string,
    publisher?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'ElectronicSource',
        [{id: 'Title', val: title},
         {id: 'Year', val: year},
         {id: 'Month', val: month},
         {id: 'Day', val: day},
         {id: 'City', val: city},
         {id: 'Publisher', val: publisher}],
        [{tag: 'Author', names: authors}]
    )
}

export const parseArt = (
    doc: XMLBuilder,
    title?: string,
    artists?: string[],
    institution?: string,
    publication_title?: string,
    city?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Art',
        [{id: 'Title', val: title},
        {id: 'City', val: city},
        {id: 'Institution', val: institution},
        {id: 'PublicationTitle', val: publication_title}],
        [{tag: 'Artist', names: artists}]
    )
}

export const parseSoundRecording = (
    doc: XMLBuilder,
    title?: string,
    composers?: string[],
    performers?: string[],
    year?: string,
    city?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'SoundRecording',
        [{id: 'Title', val: title},
        {id: 'Year', val: year},
        {id: 'City', val: city}],
        [{tag: 'Composer', names: composers},
        {tag: 'Performer', names: performers}]
    )
}

export const parsePerformance = (
    doc: XMLBuilder,
    title?: string,
    writers?: string[],
    performers?: string[],
    theater?: string,
    city?: string, 
    year?: string,
    month?: string,
    day?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Performance',
        [{id: 'Title', val: title},
        {id: 'Theater', val: theater},
        {id: 'City', val: city},
        {id: 'Year', val: year},
        {id: 'Month', val: month},
        {id: 'Day', val: day}],
        [{tag: 'Writer', names: writers},
        {tag: 'Performer', names: performers}]
    )
}

export const parseFilm = (
    doc: XMLBuilder,
    title?: string,
    directors?: string[],
    year?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Film',
        [{id: 'Title', val: title},
        {id: 'Year', val: year}],
        [{tag: 'Director', names: directors}]
    )
}

export const parseInterview = (
    doc: XMLBuilder,
    title?: string,
    interviewees?: string[],
    interviewers?: string[],
    year?: string,
    month?: string,
    day?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Interview',
        [{id: 'Title', val: title},
        {id: 'Year', val: year},
        {id: 'Month', val: month},
        {id: 'Day', val: day}],
        [{tag: 'Interviewee', names: interviewees},
        {tag: 'Interviewer', names: interviewers}]
    )
}

export const parsePatent = (
    doc: XMLBuilder,
    inventors?: string[],
    patent_number?: string,
    year?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Patent',
        [{id: 'PatentNumber', val: patent_number},
        {id: 'Year', val: year}],
        [{tag: 'Inventor', names: inventors}]
    )
}

export const parseCase = (
    doc: XMLBuilder,
    title?: string,
    case_number?: string,
    court?: string,
    year?: string,
    month?: string,
    day?: string,
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'ElectronicSource',
        [{id: 'Title', val: title},
         {id: 'CaseNumber', val: case_number},
         {id: 'Court', val: court},
         {id: 'Year', val: year},
         {id: 'Month', val: month},
         {id: 'Day', val: day}]
    )
}

export const parseMisc = (
    doc: XMLBuilder,
    title?: string,
    authors?: string[],
    publication_title?: string,
    year?: string,
    month?: string,
    day?: string,
    city?: string,
    publisher?: string
): XMLBuilder => {
    return sourceGenerator(
        doc,
        'Book',
        [{id: 'Title', val: title},
         {id: 'PublicationTitle', val: publication_title},
         {id: 'Year', val: year},
         {id: 'Month', val: month},
         {id: 'Day', val: day},
         {id: 'City', val: city},
         {id: 'Publisher', val: publisher}],
        [{tag: 'Author', names: authors}]
    )
}