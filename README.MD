# Word Source XML Parser
## Description
A node library that parses citation data into Microsoft Word's source XML format.
The output data can be directly imported into Word to use as sources.

## Usage

```javascript
let doc = createDoc()
```
Start by creating a new document

This library exports a function for every type of source available in word.
They are consistently named as parse_{type}(xml_root, ...params).
For example to add a book to the sources:

```javascript
doc = parse_book(
    doc: doc,
    title: "Cool book",
    authors: ["Alex J"], 
    year: "2022", 
    city: "London",
    publisher: "Me"
    )
```

Then close of the document with:
```javascript
let source_xml = finishDoc(doc)
```
This will return a complete XML string

The example above would generate

```xml
<?xml version="1.0"?>
<b:Sources xmlns:b="http://schemas.openxmlformats.org/officeDocument/2006/bibliography" xmlns="http://schemas.openxmlformats.org/officeDocument/2006/bibliography">
  <b:Source>
    <b:SourceType>Book</b:SourceType>
    <b:Title>Cool book</b:Title>
    <b:Year>2022</b:Year>
    <b:City>London</b:City>
    <b:Publisher>Me</b:Publisher>
    <b:Author>
      <b:Author>
        <b:NameList>
          <b:Person>
            <b:Last>J</b:Last>
            <b:First>Alex</b:First>
          </b:Person>
        </b:NameList>
      </b:Author>
    </b:Author>
  </b:Source>
</b:Sources>
```
Save to a file then import to Word using References > Manage Sources > Browse...