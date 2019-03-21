# AeTestTask

## Project description
This is a repo for test task which is a simple text editor with ability to format text. It supports bold, italic, underline styles. User can replace any word with synonym using [Datamuse API](https://www.datamuse.com/api/). Also the app supports selection color updates.

## Run app

1. git clone https://github.com/mmalikov/ae-test-task.git
2. cd ae-test-task
3. npm i
4. ng serve

## How it works
Once page will have loaded user can see simple text editor. Text editor contains formatting options toolbar and simple input field with predifined text. User can change text.

#### DESIGN SOLUTION EXPLANATION
For formatting text we use document.execCommand() browser api. User can format selected text. 

Formatting is available in the toolbar at the top of the screen. Once a format is applied - the component indicates formatting options are applied by changing color of applied format button. Applied styles are persisted into an in-memory model (WeakMap<[node: Node, styles: [string]]>)


For replacing we use Datamuse API. Once user click on "replace" button, app will load synonyms for selected text. List with options would be opened after data was loaded. The app removes replacing options from memory when text will be replaced.

The app uses MutationObserver for tracking and updating applied styles to avoid memory leaks if user removes styled text.

## Basic tools
 - UI: [angular material](https://material.angular.io/)
 - Color picker: [ngx-color-picker](https://github.com/zefoy/ngx-color-picker)
 - Synonyms api: [datamuse](https://www.datamuse.com/api/)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
