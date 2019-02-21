"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const fs_extra_2 = require("fs-extra");
const states = ['path', 'pathTransition', 'pathPriorHash', 'pathPriorQuery', 'pathPriorQueryTransition', 'pathPriorSlash', 'pathPriorSlashTransition', 'text'];
const nonTriggerCharacter = 'nonTriggerCharacter';
const triggerCharacters = [
    { value: '[', name: 'openingSquareBracket' },
    { value: ']', name: 'closingSquareBracket' },
    { value: '(', name: 'openingRoundBracket' },
    { value: '/', name: 'forwardSlash' },
    { value: '\\', name: 'backwardSlash' },
    { value: ' ', name: 'space' },
    { value: '?', name: 'questionMark' },
    { value: '#', name: 'numberSign' },
    { value: ')', name: 'closingRoundBracket' },
];
const handlers = triggerCharacters
    .reduce((handlers, triggerCharacter) => [
    ...handlers,
    ...states.map(state => {
        const camelCase = `${triggerCharacter.name}${capitalize(state)}`;
        const titleCase = `${capitalize(triggerCharacter.name)}${capitalize(state)}`;
        const exists = fs_extra_2.pathExistsSync(path_1.join('src', 'handlers', camelCase + '.ts'));
        return { camelCase, titleCase, trigger: true, exists };
    })
], [])
    .concat(states.map(state => {
    const camelCase = `${nonTriggerCharacter}${capitalize(state)}`;
    const titleCase = `${capitalize(nonTriggerCharacter)}${capitalize(state)}`;
    const exists = fs_extra_2.pathExistsSync(path_1.join('src', 'handlers', camelCase + '.ts'));
    return { camelCase, titleCase, trigger: false, exists };
}));
let sourceFile = typescript_1.createSourceFile('LinkContextRecognizer.g.ts', '', typescript_1.ScriptTarget.Latest, undefined, typescript_1.ScriptKind.TS);
sourceFile.statements = typescript_1.createNodeArray([
    typescript_1.createEmptyStatement(),
    ...handlers
        .map(handler => typescript_1.createImportDeclaration(undefined, undefined, typescript_1.createImportClause(typescript_1.createIdentifier(handler.titleCase), undefined), typescript_1.createLiteral(`./handlers/${handler.titleCase}${handler.exists ? '' : '.g'}`))),
    typescript_1.createClassDeclaration(undefined, [
        typescript_1.createToken(typescript_1.SyntaxKind.ExportKeyword),
        typescript_1.createToken(typescript_1.SyntaxKind.DefaultKeyword),
    ], 'LinkContextRecognizer', undefined, [], [
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
            typescript_1.createToken(typescript_1.SyntaxKind.StaticKeyword),
            typescript_1.createToken(typescript_1.SyntaxKind.ReadonlyKeyword),
        ], 'TRIGGER_CHARACTERS', undefined, undefined, typescript_1.createArrayLiteral(triggerCharacters.map(triggerCharacter => typescript_1.createLiteral(triggerCharacter.value)))),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'cursor', undefined, typescript_1.createUnionTypeNode([
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('text')),
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('transition')),
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('scheme')),
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('path')),
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('query')),
            typescript_1.createLiteralTypeNode(typescript_1.createLiteral('fragment')),
            typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)
        ]), typescript_1.createIdentifier('undefined')),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'text', undefined, typescript_1.createUnionTypeNode([typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)]), typescript_1.createIdentifier('undefined')),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'scheme', undefined, typescript_1.createUnionTypeNode([typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)]), typescript_1.createIdentifier('undefined')),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'path', undefined, typescript_1.createUnionTypeNode([typescript_1.createArrayTypeNode(typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword)), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)]), typescript_1.createIdentifier('undefined')),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'query', undefined, typescript_1.createUnionTypeNode([typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)]), typescript_1.createIdentifier('undefined')),
        typescript_1.createProperty(undefined, [
            typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword),
        ], 'fragment', undefined, typescript_1.createUnionTypeNode([typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword)]), typescript_1.createIdentifier('undefined')),
        ...handlers.map(handler => typescript_1.createProperty(undefined, [typescript_1.createToken(typescript_1.SyntaxKind.PublicKeyword), typescript_1.createToken(typescript_1.SyntaxKind.ReadonlyKeyword)], handler.camelCase, undefined, typescript_1.createTypeReferenceNode(handler.titleCase, []), typescript_1.createNew(typescript_1.createIdentifier(handler.titleCase), undefined, []))),
        typescript_1.createConstructor(undefined, undefined, [
            typescript_1.createParameter(undefined, undefined, undefined, 'line', undefined, typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.StringKeyword)),
            typescript_1.createParameter(undefined, undefined, undefined, 'index', typescript_1.createToken(typescript_1.SyntaxKind.QuestionToken), typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.NumberKeyword)),
        ], typescript_1.createBlock([
            typescript_1.createStatement(typescript_1.createCall(typescript_1.createIdentifier('console.log'), undefined, [typescript_1.createLiteral('>>>>>>>>>>'), typescript_1.createIdentifier('line'), typescript_1.createLiteral('<<<<<<<<<<')])),
            typescript_1.createStatement(typescript_1.createAssignment(typescript_1.createIdentifier('index'), typescript_1.createBinary(typescript_1.createIdentifier('index'), typescript_1.SyntaxKind.BarBarToken, typescript_1.createIdentifier('line.length - 1')))),
            typescript_1.createVariableStatement(undefined, [
                typescript_1.createVariableDeclaration('state', typescript_1.createUnionTypeNode(states.map(state => typescript_1.createLiteralTypeNode(typescript_1.createLiteral(state)))), typescript_1.createLiteral('path')),
            ]),
            typescript_1.createFor(typescript_1.createIdentifier('index'), typescript_1.createBinary(typescript_1.createIdentifier('index'), typescript_1.SyntaxKind.GreaterThanEqualsToken, typescript_1.createLiteral(0)), typescript_1.createPostfix(typescript_1.createIdentifier('index'), typescript_1.SyntaxKind.MinusMinusToken), typescript_1.createBlock([
                typescript_1.createVariableStatement(undefined, [
                    typescript_1.createVariableDeclaration('character', undefined, typescript_1.createElementAccess(typescript_1.createIdentifier('line'), typescript_1.createIdentifier('index'))),
                    typescript_1.createVariableDeclaration('stateTransition', typescript_1.createUnionTypeNode([
                        ...states.map(state => typescript_1.createLiteralTypeNode(typescript_1.createLiteral(state))),
                        typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.UndefinedKeyword),
                        typescript_1.createKeywordTypeNode(typescript_1.SyntaxKind.NullKeyword),
                    ]), typescript_1.createIdentifier('undefined')),
                ]),
                typescript_1.createSwitch(typescript_1.createIdentifier('character'), typescript_1.createCaseBlock([
                    ...triggerCharacters.map(triggerCharacter => typescript_1.createCaseClause(typescript_1.createLiteral(triggerCharacter.value), [
                        typescript_1.createSwitch(typescript_1.createIdentifier('state'), typescript_1.createCaseBlock([
                            ...states.map(state => typescript_1.createCaseClause(typescript_1.createLiteral(state), [
                                typescript_1.createStatement(typescript_1.createAssignment(typescript_1.createIdentifier('stateTransition'), typescript_1.createCall(typescript_1.createIdentifier(`this.${triggerCharacter.name}${capitalize(state)}.handle`), undefined, [typescript_1.createThis()]))),
                                typescript_1.createStatement(typescript_1.createCall(typescript_1.createIdentifier('console.log'), undefined, [typescript_1.createIdentifier('index'), typescript_1.createIdentifier('character'), typescript_1.createLiteral(`${triggerCharacter.name}${capitalize(state)}`), typescript_1.createIdentifier('state'), typescript_1.createLiteral('->'), typescript_1.createIdentifier('stateTransition')])),
                                typescript_1.createBreak(),
                            ])),
                            typescript_1.createDefaultClause([typescript_1.createThrow(typescript_1.createNew(typescript_1.createIdentifier('Error'), undefined, [typescript_1.createLiteral('Unknown state.')]))])
                        ])),
                        typescript_1.createBreak(),
                    ])),
                    typescript_1.createDefaultClause([
                        typescript_1.createSwitch(typescript_1.createIdentifier('state'), typescript_1.createCaseBlock([
                            ...states.map(state => typescript_1.createCaseClause(typescript_1.createLiteral(state), [
                                typescript_1.createStatement(typescript_1.createAssignment(typescript_1.createIdentifier('stateTransition'), typescript_1.createCall(typescript_1.createIdentifier(`this.${nonTriggerCharacter}${capitalize(state)}.handle`), undefined, [typescript_1.createThis(), typescript_1.createIdentifier('character')]))),
                                typescript_1.createStatement(typescript_1.createCall(typescript_1.createIdentifier('console.log'), undefined, [typescript_1.createIdentifier('index'), typescript_1.createIdentifier('character'), typescript_1.createLiteral(`${nonTriggerCharacter}${capitalize(state)}`), typescript_1.createIdentifier('state'), typescript_1.createLiteral('->'), typescript_1.createIdentifier('stateTransition')])),
                                typescript_1.createBreak(),
                            ])),
                            typescript_1.createDefaultClause([typescript_1.createThrow(typescript_1.createNew(typescript_1.createIdentifier('Error'), undefined, [typescript_1.createLiteral('Unknown state.')]))])
                        ]))
                    ])
                ])),
                typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('stateTransition'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('null')), typescript_1.createBreak()),
                typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('stateTransition'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createContinue()),
                typescript_1.createStatement(typescript_1.createAssignment(typescript_1.createIdentifier('state'), typescript_1.createIdentifier('stateTransition')))
            ], true)),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.cursor'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.cursor')))),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.text'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.text')))),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.scheme'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.scheme')))),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.path'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.path')))),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.query'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.query')))),
            typescript_1.createIf(typescript_1.createBinary(typescript_1.createIdentifier('this.fragment'), typescript_1.SyntaxKind.EqualsEqualsEqualsToken, typescript_1.createIdentifier('undefined')), typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier('this.fragment')))),
            ...handlers.map(handler => typescript_1.createStatement(typescript_1.createDelete(typescript_1.createIdentifier(`(this as any).${handler.camelCase}`)))),
        ], true)),
    ])
], false);
typescript_1.addSyntheticLeadingComment(sourceFile.statements[0], typescript_1.SyntaxKind.MultiLineCommentTrivia, `
* This is a generated file. Any manual changes will be lost the next time is is regenerated using \`npm run generate\`!
`, true);
// TODO: Figure out how to write this using the TypeScript compiler API too
const sourceCode = typescript_1.createPrinter().printNode(typescript_1.EmitHint.Unspecified, sourceFile, sourceFile);
sourceFile = sourceFile.update(sourceCode, typescript_1.createTextChangeRange(typescript_1.createTextSpan(sourceFile.getStart(), sourceFile.getEnd()), sourceCode.length));
fs_extra_1.writeFileSync(path_1.join('src', sourceFile.fileName), sourceFile.getFullText(), 'utf8');
fs_extra_2.ensureDirSync(path_1.join('src', 'handlers'));
for (const handler of handlers) {
    // Skip .g.ts where there is .ts
    if (handler.exists) {
        continue;
    }
    fs_extra_1.writeFileSync(path_1.join('src', 'handlers', handler.titleCase + '.g.ts'), `
// This is a generated file, to make it yours, change the extension from .g.ts to .ts (VS Code will rename the \`import\` in \`LinkContextRecognizer\` for you)
import LinkContextRecognizer from '../LinkContextRecognizer.g';

export default class ${handler.titleCase} {
  public handle(_recognizer: LinkContextRecognizer${handler.trigger ? '' : ', _character: string'}): undefined | ${states.map(state => `'${state}'`).join(' | ')} | null {
    throw new Error("The handler '${handler.titleCase}' has not been implemented.");
  }
}
`.replace(/^\s/, ''), 'utf8');
}
function capitalize(state) {
    return state[0].toUpperCase() + state.slice(1);
}
//# sourceMappingURL=generateRecognizer.js.map