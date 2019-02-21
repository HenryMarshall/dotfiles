"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* This is a generated file. Any manual changes will be lost the next time is is regenerated using `npm run generate`!
*/
;
const OpeningSquareBracketPath_1 = require("./handlers/OpeningSquareBracketPath");
const OpeningSquareBracketPathTransition_g_1 = require("./handlers/OpeningSquareBracketPathTransition.g");
const OpeningSquareBracketPathPriorHash_g_1 = require("./handlers/OpeningSquareBracketPathPriorHash.g");
const OpeningSquareBracketPathPriorQuery_g_1 = require("./handlers/OpeningSquareBracketPathPriorQuery.g");
const OpeningSquareBracketPathPriorQueryTransition_g_1 = require("./handlers/OpeningSquareBracketPathPriorQueryTransition.g");
const OpeningSquareBracketPathPriorSlash_g_1 = require("./handlers/OpeningSquareBracketPathPriorSlash.g");
const OpeningSquareBracketPathPriorSlashTransition_g_1 = require("./handlers/OpeningSquareBracketPathPriorSlashTransition.g");
const OpeningSquareBracketText_1 = require("./handlers/OpeningSquareBracketText");
const ClosingSquareBracketPath_1 = require("./handlers/ClosingSquareBracketPath");
const ClosingSquareBracketPathTransition_1 = require("./handlers/ClosingSquareBracketPathTransition");
const ClosingSquareBracketPathPriorHash_g_1 = require("./handlers/ClosingSquareBracketPathPriorHash.g");
const ClosingSquareBracketPathPriorQuery_g_1 = require("./handlers/ClosingSquareBracketPathPriorQuery.g");
const ClosingSquareBracketPathPriorQueryTransition_g_1 = require("./handlers/ClosingSquareBracketPathPriorQueryTransition.g");
const ClosingSquareBracketPathPriorSlash_g_1 = require("./handlers/ClosingSquareBracketPathPriorSlash.g");
const ClosingSquareBracketPathPriorSlashTransition_g_1 = require("./handlers/ClosingSquareBracketPathPriorSlashTransition.g");
const ClosingSquareBracketText_g_1 = require("./handlers/ClosingSquareBracketText.g");
const OpeningRoundBracketPath_1 = require("./handlers/OpeningRoundBracketPath");
const OpeningRoundBracketPathTransition_g_1 = require("./handlers/OpeningRoundBracketPathTransition.g");
const OpeningRoundBracketPathPriorHash_g_1 = require("./handlers/OpeningRoundBracketPathPriorHash.g");
const OpeningRoundBracketPathPriorQuery_g_1 = require("./handlers/OpeningRoundBracketPathPriorQuery.g");
const OpeningRoundBracketPathPriorQueryTransition_g_1 = require("./handlers/OpeningRoundBracketPathPriorQueryTransition.g");
const OpeningRoundBracketPathPriorSlash_g_1 = require("./handlers/OpeningRoundBracketPathPriorSlash.g");
const OpeningRoundBracketPathPriorSlashTransition_g_1 = require("./handlers/OpeningRoundBracketPathPriorSlashTransition.g");
const OpeningRoundBracketText_g_1 = require("./handlers/OpeningRoundBracketText.g");
const ForwardSlashPath_1 = require("./handlers/ForwardSlashPath");
const ForwardSlashPathTransition_g_1 = require("./handlers/ForwardSlashPathTransition.g");
const ForwardSlashPathPriorHash_g_1 = require("./handlers/ForwardSlashPathPriorHash.g");
const ForwardSlashPathPriorQuery_g_1 = require("./handlers/ForwardSlashPathPriorQuery.g");
const ForwardSlashPathPriorQueryTransition_g_1 = require("./handlers/ForwardSlashPathPriorQueryTransition.g");
const ForwardSlashPathPriorSlash_g_1 = require("./handlers/ForwardSlashPathPriorSlash.g");
const ForwardSlashPathPriorSlashTransition_g_1 = require("./handlers/ForwardSlashPathPriorSlashTransition.g");
const ForwardSlashText_g_1 = require("./handlers/ForwardSlashText.g");
const BackwardSlashPath_1 = require("./handlers/BackwardSlashPath");
const BackwardSlashPathTransition_g_1 = require("./handlers/BackwardSlashPathTransition.g");
const BackwardSlashPathPriorHash_g_1 = require("./handlers/BackwardSlashPathPriorHash.g");
const BackwardSlashPathPriorQuery_g_1 = require("./handlers/BackwardSlashPathPriorQuery.g");
const BackwardSlashPathPriorQueryTransition_g_1 = require("./handlers/BackwardSlashPathPriorQueryTransition.g");
const BackwardSlashPathPriorSlash_g_1 = require("./handlers/BackwardSlashPathPriorSlash.g");
const BackwardSlashPathPriorSlashTransition_g_1 = require("./handlers/BackwardSlashPathPriorSlashTransition.g");
const BackwardSlashText_g_1 = require("./handlers/BackwardSlashText.g");
const SpacePath_g_1 = require("./handlers/SpacePath.g");
const SpacePathTransition_1 = require("./handlers/SpacePathTransition");
const SpacePathPriorHash_g_1 = require("./handlers/SpacePathPriorHash.g");
const SpacePathPriorQuery_g_1 = require("./handlers/SpacePathPriorQuery.g");
const SpacePathPriorQueryTransition_g_1 = require("./handlers/SpacePathPriorQueryTransition.g");
const SpacePathPriorSlash_g_1 = require("./handlers/SpacePathPriorSlash.g");
const SpacePathPriorSlashTransition_g_1 = require("./handlers/SpacePathPriorSlashTransition.g");
const SpaceText_g_1 = require("./handlers/SpaceText.g");
const QuestionMarkPath_1 = require("./handlers/QuestionMarkPath");
const QuestionMarkPathTransition_g_1 = require("./handlers/QuestionMarkPathTransition.g");
const QuestionMarkPathPriorHash_g_1 = require("./handlers/QuestionMarkPathPriorHash.g");
const QuestionMarkPathPriorQuery_g_1 = require("./handlers/QuestionMarkPathPriorQuery.g");
const QuestionMarkPathPriorQueryTransition_g_1 = require("./handlers/QuestionMarkPathPriorQueryTransition.g");
const QuestionMarkPathPriorSlash_g_1 = require("./handlers/QuestionMarkPathPriorSlash.g");
const QuestionMarkPathPriorSlashTransition_g_1 = require("./handlers/QuestionMarkPathPriorSlashTransition.g");
const QuestionMarkText_g_1 = require("./handlers/QuestionMarkText.g");
const NumberSignPath_1 = require("./handlers/NumberSignPath");
const NumberSignPathTransition_g_1 = require("./handlers/NumberSignPathTransition.g");
const NumberSignPathPriorHash_g_1 = require("./handlers/NumberSignPathPriorHash.g");
const NumberSignPathPriorQuery_g_1 = require("./handlers/NumberSignPathPriorQuery.g");
const NumberSignPathPriorQueryTransition_g_1 = require("./handlers/NumberSignPathPriorQueryTransition.g");
const NumberSignPathPriorSlash_g_1 = require("./handlers/NumberSignPathPriorSlash.g");
const NumberSignPathPriorSlashTransition_g_1 = require("./handlers/NumberSignPathPriorSlashTransition.g");
const NumberSignText_g_1 = require("./handlers/NumberSignText.g");
const ClosingRoundBracketPath_1 = require("./handlers/ClosingRoundBracketPath");
const ClosingRoundBracketPathTransition_g_1 = require("./handlers/ClosingRoundBracketPathTransition.g");
const ClosingRoundBracketPathPriorHash_g_1 = require("./handlers/ClosingRoundBracketPathPriorHash.g");
const ClosingRoundBracketPathPriorQuery_g_1 = require("./handlers/ClosingRoundBracketPathPriorQuery.g");
const ClosingRoundBracketPathPriorQueryTransition_g_1 = require("./handlers/ClosingRoundBracketPathPriorQueryTransition.g");
const ClosingRoundBracketPathPriorSlash_g_1 = require("./handlers/ClosingRoundBracketPathPriorSlash.g");
const ClosingRoundBracketPathPriorSlashTransition_g_1 = require("./handlers/ClosingRoundBracketPathPriorSlashTransition.g");
const ClosingRoundBracketText_g_1 = require("./handlers/ClosingRoundBracketText.g");
const NonTriggerCharacterPath_1 = require("./handlers/NonTriggerCharacterPath");
const NonTriggerCharacterPathTransition_g_1 = require("./handlers/NonTriggerCharacterPathTransition.g");
const NonTriggerCharacterPathPriorHash_g_1 = require("./handlers/NonTriggerCharacterPathPriorHash.g");
const NonTriggerCharacterPathPriorQuery_g_1 = require("./handlers/NonTriggerCharacterPathPriorQuery.g");
const NonTriggerCharacterPathPriorQueryTransition_g_1 = require("./handlers/NonTriggerCharacterPathPriorQueryTransition.g");
const NonTriggerCharacterPathPriorSlash_g_1 = require("./handlers/NonTriggerCharacterPathPriorSlash.g");
const NonTriggerCharacterPathPriorSlashTransition_g_1 = require("./handlers/NonTriggerCharacterPathPriorSlashTransition.g");
const NonTriggerCharacterText_1 = require("./handlers/NonTriggerCharacterText");
class LinkContextRecognizer {
    constructor(line, index) {
        this.cursor = undefined;
        this.text = undefined;
        this.scheme = undefined;
        this.path = undefined;
        this.query = undefined;
        this.fragment = undefined;
        this.openingSquareBracketPath = new OpeningSquareBracketPath_1.default();
        this.openingSquareBracketPathTransition = new OpeningSquareBracketPathTransition_g_1.default();
        this.openingSquareBracketPathPriorHash = new OpeningSquareBracketPathPriorHash_g_1.default();
        this.openingSquareBracketPathPriorQuery = new OpeningSquareBracketPathPriorQuery_g_1.default();
        this.openingSquareBracketPathPriorQueryTransition = new OpeningSquareBracketPathPriorQueryTransition_g_1.default();
        this.openingSquareBracketPathPriorSlash = new OpeningSquareBracketPathPriorSlash_g_1.default();
        this.openingSquareBracketPathPriorSlashTransition = new OpeningSquareBracketPathPriorSlashTransition_g_1.default();
        this.openingSquareBracketText = new OpeningSquareBracketText_1.default();
        this.closingSquareBracketPath = new ClosingSquareBracketPath_1.default();
        this.closingSquareBracketPathTransition = new ClosingSquareBracketPathTransition_1.default();
        this.closingSquareBracketPathPriorHash = new ClosingSquareBracketPathPriorHash_g_1.default();
        this.closingSquareBracketPathPriorQuery = new ClosingSquareBracketPathPriorQuery_g_1.default();
        this.closingSquareBracketPathPriorQueryTransition = new ClosingSquareBracketPathPriorQueryTransition_g_1.default();
        this.closingSquareBracketPathPriorSlash = new ClosingSquareBracketPathPriorSlash_g_1.default();
        this.closingSquareBracketPathPriorSlashTransition = new ClosingSquareBracketPathPriorSlashTransition_g_1.default();
        this.closingSquareBracketText = new ClosingSquareBracketText_g_1.default();
        this.openingRoundBracketPath = new OpeningRoundBracketPath_1.default();
        this.openingRoundBracketPathTransition = new OpeningRoundBracketPathTransition_g_1.default();
        this.openingRoundBracketPathPriorHash = new OpeningRoundBracketPathPriorHash_g_1.default();
        this.openingRoundBracketPathPriorQuery = new OpeningRoundBracketPathPriorQuery_g_1.default();
        this.openingRoundBracketPathPriorQueryTransition = new OpeningRoundBracketPathPriorQueryTransition_g_1.default();
        this.openingRoundBracketPathPriorSlash = new OpeningRoundBracketPathPriorSlash_g_1.default();
        this.openingRoundBracketPathPriorSlashTransition = new OpeningRoundBracketPathPriorSlashTransition_g_1.default();
        this.openingRoundBracketText = new OpeningRoundBracketText_g_1.default();
        this.forwardSlashPath = new ForwardSlashPath_1.default();
        this.forwardSlashPathTransition = new ForwardSlashPathTransition_g_1.default();
        this.forwardSlashPathPriorHash = new ForwardSlashPathPriorHash_g_1.default();
        this.forwardSlashPathPriorQuery = new ForwardSlashPathPriorQuery_g_1.default();
        this.forwardSlashPathPriorQueryTransition = new ForwardSlashPathPriorQueryTransition_g_1.default();
        this.forwardSlashPathPriorSlash = new ForwardSlashPathPriorSlash_g_1.default();
        this.forwardSlashPathPriorSlashTransition = new ForwardSlashPathPriorSlashTransition_g_1.default();
        this.forwardSlashText = new ForwardSlashText_g_1.default();
        this.backwardSlashPath = new BackwardSlashPath_1.default();
        this.backwardSlashPathTransition = new BackwardSlashPathTransition_g_1.default();
        this.backwardSlashPathPriorHash = new BackwardSlashPathPriorHash_g_1.default();
        this.backwardSlashPathPriorQuery = new BackwardSlashPathPriorQuery_g_1.default();
        this.backwardSlashPathPriorQueryTransition = new BackwardSlashPathPriorQueryTransition_g_1.default();
        this.backwardSlashPathPriorSlash = new BackwardSlashPathPriorSlash_g_1.default();
        this.backwardSlashPathPriorSlashTransition = new BackwardSlashPathPriorSlashTransition_g_1.default();
        this.backwardSlashText = new BackwardSlashText_g_1.default();
        this.spacePath = new SpacePath_g_1.default();
        this.spacePathTransition = new SpacePathTransition_1.default();
        this.spacePathPriorHash = new SpacePathPriorHash_g_1.default();
        this.spacePathPriorQuery = new SpacePathPriorQuery_g_1.default();
        this.spacePathPriorQueryTransition = new SpacePathPriorQueryTransition_g_1.default();
        this.spacePathPriorSlash = new SpacePathPriorSlash_g_1.default();
        this.spacePathPriorSlashTransition = new SpacePathPriorSlashTransition_g_1.default();
        this.spaceText = new SpaceText_g_1.default();
        this.questionMarkPath = new QuestionMarkPath_1.default();
        this.questionMarkPathTransition = new QuestionMarkPathTransition_g_1.default();
        this.questionMarkPathPriorHash = new QuestionMarkPathPriorHash_g_1.default();
        this.questionMarkPathPriorQuery = new QuestionMarkPathPriorQuery_g_1.default();
        this.questionMarkPathPriorQueryTransition = new QuestionMarkPathPriorQueryTransition_g_1.default();
        this.questionMarkPathPriorSlash = new QuestionMarkPathPriorSlash_g_1.default();
        this.questionMarkPathPriorSlashTransition = new QuestionMarkPathPriorSlashTransition_g_1.default();
        this.questionMarkText = new QuestionMarkText_g_1.default();
        this.numberSignPath = new NumberSignPath_1.default();
        this.numberSignPathTransition = new NumberSignPathTransition_g_1.default();
        this.numberSignPathPriorHash = new NumberSignPathPriorHash_g_1.default();
        this.numberSignPathPriorQuery = new NumberSignPathPriorQuery_g_1.default();
        this.numberSignPathPriorQueryTransition = new NumberSignPathPriorQueryTransition_g_1.default();
        this.numberSignPathPriorSlash = new NumberSignPathPriorSlash_g_1.default();
        this.numberSignPathPriorSlashTransition = new NumberSignPathPriorSlashTransition_g_1.default();
        this.numberSignText = new NumberSignText_g_1.default();
        this.closingRoundBracketPath = new ClosingRoundBracketPath_1.default();
        this.closingRoundBracketPathTransition = new ClosingRoundBracketPathTransition_g_1.default();
        this.closingRoundBracketPathPriorHash = new ClosingRoundBracketPathPriorHash_g_1.default();
        this.closingRoundBracketPathPriorQuery = new ClosingRoundBracketPathPriorQuery_g_1.default();
        this.closingRoundBracketPathPriorQueryTransition = new ClosingRoundBracketPathPriorQueryTransition_g_1.default();
        this.closingRoundBracketPathPriorSlash = new ClosingRoundBracketPathPriorSlash_g_1.default();
        this.closingRoundBracketPathPriorSlashTransition = new ClosingRoundBracketPathPriorSlashTransition_g_1.default();
        this.closingRoundBracketText = new ClosingRoundBracketText_g_1.default();
        this.nonTriggerCharacterPath = new NonTriggerCharacterPath_1.default();
        this.nonTriggerCharacterPathTransition = new NonTriggerCharacterPathTransition_g_1.default();
        this.nonTriggerCharacterPathPriorHash = new NonTriggerCharacterPathPriorHash_g_1.default();
        this.nonTriggerCharacterPathPriorQuery = new NonTriggerCharacterPathPriorQuery_g_1.default();
        this.nonTriggerCharacterPathPriorQueryTransition = new NonTriggerCharacterPathPriorQueryTransition_g_1.default();
        this.nonTriggerCharacterPathPriorSlash = new NonTriggerCharacterPathPriorSlash_g_1.default();
        this.nonTriggerCharacterPathPriorSlashTransition = new NonTriggerCharacterPathPriorSlashTransition_g_1.default();
        this.nonTriggerCharacterText = new NonTriggerCharacterText_1.default();
        console.log(">>>>>>>>>>", line, "<<<<<<<<<<");
        index = index || line.length - 1;
        var state = "path";
        for (index; index >= 0; index--) {
            var character = line[index], stateTransition = undefined;
            switch (character) {
                case "[":
                    switch (state) {
                        case "path":
                            stateTransition = this.openingSquareBracketPath.handle(this);
                            console.log(index, character, "openingSquareBracketPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.openingSquareBracketPathTransition.handle(this);
                            console.log(index, character, "openingSquareBracketPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.openingSquareBracketPathPriorHash.handle(this);
                            console.log(index, character, "openingSquareBracketPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.openingSquareBracketPathPriorQuery.handle(this);
                            console.log(index, character, "openingSquareBracketPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.openingSquareBracketPathPriorQueryTransition.handle(this);
                            console.log(index, character, "openingSquareBracketPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.openingSquareBracketPathPriorSlash.handle(this);
                            console.log(index, character, "openingSquareBracketPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.openingSquareBracketPathPriorSlashTransition.handle(this);
                            console.log(index, character, "openingSquareBracketPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.openingSquareBracketText.handle(this);
                            console.log(index, character, "openingSquareBracketText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "]":
                    switch (state) {
                        case "path":
                            stateTransition = this.closingSquareBracketPath.handle(this);
                            console.log(index, character, "closingSquareBracketPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.closingSquareBracketPathTransition.handle(this);
                            console.log(index, character, "closingSquareBracketPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.closingSquareBracketPathPriorHash.handle(this);
                            console.log(index, character, "closingSquareBracketPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.closingSquareBracketPathPriorQuery.handle(this);
                            console.log(index, character, "closingSquareBracketPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.closingSquareBracketPathPriorQueryTransition.handle(this);
                            console.log(index, character, "closingSquareBracketPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.closingSquareBracketPathPriorSlash.handle(this);
                            console.log(index, character, "closingSquareBracketPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.closingSquareBracketPathPriorSlashTransition.handle(this);
                            console.log(index, character, "closingSquareBracketPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.closingSquareBracketText.handle(this);
                            console.log(index, character, "closingSquareBracketText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "(":
                    switch (state) {
                        case "path":
                            stateTransition = this.openingRoundBracketPath.handle(this);
                            console.log(index, character, "openingRoundBracketPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.openingRoundBracketPathTransition.handle(this);
                            console.log(index, character, "openingRoundBracketPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.openingRoundBracketPathPriorHash.handle(this);
                            console.log(index, character, "openingRoundBracketPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.openingRoundBracketPathPriorQuery.handle(this);
                            console.log(index, character, "openingRoundBracketPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.openingRoundBracketPathPriorQueryTransition.handle(this);
                            console.log(index, character, "openingRoundBracketPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.openingRoundBracketPathPriorSlash.handle(this);
                            console.log(index, character, "openingRoundBracketPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.openingRoundBracketPathPriorSlashTransition.handle(this);
                            console.log(index, character, "openingRoundBracketPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.openingRoundBracketText.handle(this);
                            console.log(index, character, "openingRoundBracketText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "/":
                    switch (state) {
                        case "path":
                            stateTransition = this.forwardSlashPath.handle(this);
                            console.log(index, character, "forwardSlashPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.forwardSlashPathTransition.handle(this);
                            console.log(index, character, "forwardSlashPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.forwardSlashPathPriorHash.handle(this);
                            console.log(index, character, "forwardSlashPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.forwardSlashPathPriorQuery.handle(this);
                            console.log(index, character, "forwardSlashPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.forwardSlashPathPriorQueryTransition.handle(this);
                            console.log(index, character, "forwardSlashPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.forwardSlashPathPriorSlash.handle(this);
                            console.log(index, character, "forwardSlashPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.forwardSlashPathPriorSlashTransition.handle(this);
                            console.log(index, character, "forwardSlashPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.forwardSlashText.handle(this);
                            console.log(index, character, "forwardSlashText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "\\":
                    switch (state) {
                        case "path":
                            stateTransition = this.backwardSlashPath.handle(this);
                            console.log(index, character, "backwardSlashPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.backwardSlashPathTransition.handle(this);
                            console.log(index, character, "backwardSlashPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.backwardSlashPathPriorHash.handle(this);
                            console.log(index, character, "backwardSlashPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.backwardSlashPathPriorQuery.handle(this);
                            console.log(index, character, "backwardSlashPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.backwardSlashPathPriorQueryTransition.handle(this);
                            console.log(index, character, "backwardSlashPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.backwardSlashPathPriorSlash.handle(this);
                            console.log(index, character, "backwardSlashPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.backwardSlashPathPriorSlashTransition.handle(this);
                            console.log(index, character, "backwardSlashPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.backwardSlashText.handle(this);
                            console.log(index, character, "backwardSlashText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case " ":
                    switch (state) {
                        case "path":
                            stateTransition = this.spacePath.handle(this);
                            console.log(index, character, "spacePath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.spacePathTransition.handle(this);
                            console.log(index, character, "spacePathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.spacePathPriorHash.handle(this);
                            console.log(index, character, "spacePathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.spacePathPriorQuery.handle(this);
                            console.log(index, character, "spacePathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.spacePathPriorQueryTransition.handle(this);
                            console.log(index, character, "spacePathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.spacePathPriorSlash.handle(this);
                            console.log(index, character, "spacePathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.spacePathPriorSlashTransition.handle(this);
                            console.log(index, character, "spacePathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.spaceText.handle(this);
                            console.log(index, character, "spaceText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "?":
                    switch (state) {
                        case "path":
                            stateTransition = this.questionMarkPath.handle(this);
                            console.log(index, character, "questionMarkPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.questionMarkPathTransition.handle(this);
                            console.log(index, character, "questionMarkPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.questionMarkPathPriorHash.handle(this);
                            console.log(index, character, "questionMarkPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.questionMarkPathPriorQuery.handle(this);
                            console.log(index, character, "questionMarkPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.questionMarkPathPriorQueryTransition.handle(this);
                            console.log(index, character, "questionMarkPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.questionMarkPathPriorSlash.handle(this);
                            console.log(index, character, "questionMarkPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.questionMarkPathPriorSlashTransition.handle(this);
                            console.log(index, character, "questionMarkPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.questionMarkText.handle(this);
                            console.log(index, character, "questionMarkText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case "#":
                    switch (state) {
                        case "path":
                            stateTransition = this.numberSignPath.handle(this);
                            console.log(index, character, "numberSignPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.numberSignPathTransition.handle(this);
                            console.log(index, character, "numberSignPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.numberSignPathPriorHash.handle(this);
                            console.log(index, character, "numberSignPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.numberSignPathPriorQuery.handle(this);
                            console.log(index, character, "numberSignPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.numberSignPathPriorQueryTransition.handle(this);
                            console.log(index, character, "numberSignPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.numberSignPathPriorSlash.handle(this);
                            console.log(index, character, "numberSignPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.numberSignPathPriorSlashTransition.handle(this);
                            console.log(index, character, "numberSignPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.numberSignText.handle(this);
                            console.log(index, character, "numberSignText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                case ")":
                    switch (state) {
                        case "path":
                            stateTransition = this.closingRoundBracketPath.handle(this);
                            console.log(index, character, "closingRoundBracketPath", state, "->", stateTransition);
                            break;
                        case "pathTransition":
                            stateTransition = this.closingRoundBracketPathTransition.handle(this);
                            console.log(index, character, "closingRoundBracketPathTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorHash":
                            stateTransition = this.closingRoundBracketPathPriorHash.handle(this);
                            console.log(index, character, "closingRoundBracketPathPriorHash", state, "->", stateTransition);
                            break;
                        case "pathPriorQuery":
                            stateTransition = this.closingRoundBracketPathPriorQuery.handle(this);
                            console.log(index, character, "closingRoundBracketPathPriorQuery", state, "->", stateTransition);
                            break;
                        case "pathPriorQueryTransition":
                            stateTransition = this.closingRoundBracketPathPriorQueryTransition.handle(this);
                            console.log(index, character, "closingRoundBracketPathPriorQueryTransition", state, "->", stateTransition);
                            break;
                        case "pathPriorSlash":
                            stateTransition = this.closingRoundBracketPathPriorSlash.handle(this);
                            console.log(index, character, "closingRoundBracketPathPriorSlash", state, "->", stateTransition);
                            break;
                        case "pathPriorSlashTransition":
                            stateTransition = this.closingRoundBracketPathPriorSlashTransition.handle(this);
                            console.log(index, character, "closingRoundBracketPathPriorSlashTransition", state, "->", stateTransition);
                            break;
                        case "text":
                            stateTransition = this.closingRoundBracketText.handle(this);
                            console.log(index, character, "closingRoundBracketText", state, "->", stateTransition);
                            break;
                        default: throw new Error("Unknown state.");
                    }
                    break;
                default: switch (state) {
                    case "path":
                        stateTransition = this.nonTriggerCharacterPath.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPath", state, "->", stateTransition);
                        break;
                    case "pathTransition":
                        stateTransition = this.nonTriggerCharacterPathTransition.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathTransition", state, "->", stateTransition);
                        break;
                    case "pathPriorHash":
                        stateTransition = this.nonTriggerCharacterPathPriorHash.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathPriorHash", state, "->", stateTransition);
                        break;
                    case "pathPriorQuery":
                        stateTransition = this.nonTriggerCharacterPathPriorQuery.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathPriorQuery", state, "->", stateTransition);
                        break;
                    case "pathPriorQueryTransition":
                        stateTransition = this.nonTriggerCharacterPathPriorQueryTransition.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathPriorQueryTransition", state, "->", stateTransition);
                        break;
                    case "pathPriorSlash":
                        stateTransition = this.nonTriggerCharacterPathPriorSlash.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathPriorSlash", state, "->", stateTransition);
                        break;
                    case "pathPriorSlashTransition":
                        stateTransition = this.nonTriggerCharacterPathPriorSlashTransition.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterPathPriorSlashTransition", state, "->", stateTransition);
                        break;
                    case "text":
                        stateTransition = this.nonTriggerCharacterText.handle(this, character);
                        console.log(index, character, "nonTriggerCharacterText", state, "->", stateTransition);
                        break;
                    default: throw new Error("Unknown state.");
                }
            }
            if (stateTransition === null)
                break;
            if (stateTransition === undefined)
                continue;
            state = stateTransition;
        }
        if (this.cursor === undefined)
            delete this.cursor;
        if (this.text === undefined)
            delete this.text;
        if (this.scheme === undefined)
            delete this.scheme;
        if (this.path === undefined)
            delete this.path;
        if (this.query === undefined)
            delete this.query;
        if (this.fragment === undefined)
            delete this.fragment;
        delete this.openingSquareBracketPath;
        delete this.openingSquareBracketPathTransition;
        delete this.openingSquareBracketPathPriorHash;
        delete this.openingSquareBracketPathPriorQuery;
        delete this.openingSquareBracketPathPriorQueryTransition;
        delete this.openingSquareBracketPathPriorSlash;
        delete this.openingSquareBracketPathPriorSlashTransition;
        delete this.openingSquareBracketText;
        delete this.closingSquareBracketPath;
        delete this.closingSquareBracketPathTransition;
        delete this.closingSquareBracketPathPriorHash;
        delete this.closingSquareBracketPathPriorQuery;
        delete this.closingSquareBracketPathPriorQueryTransition;
        delete this.closingSquareBracketPathPriorSlash;
        delete this.closingSquareBracketPathPriorSlashTransition;
        delete this.closingSquareBracketText;
        delete this.openingRoundBracketPath;
        delete this.openingRoundBracketPathTransition;
        delete this.openingRoundBracketPathPriorHash;
        delete this.openingRoundBracketPathPriorQuery;
        delete this.openingRoundBracketPathPriorQueryTransition;
        delete this.openingRoundBracketPathPriorSlash;
        delete this.openingRoundBracketPathPriorSlashTransition;
        delete this.openingRoundBracketText;
        delete this.forwardSlashPath;
        delete this.forwardSlashPathTransition;
        delete this.forwardSlashPathPriorHash;
        delete this.forwardSlashPathPriorQuery;
        delete this.forwardSlashPathPriorQueryTransition;
        delete this.forwardSlashPathPriorSlash;
        delete this.forwardSlashPathPriorSlashTransition;
        delete this.forwardSlashText;
        delete this.backwardSlashPath;
        delete this.backwardSlashPathTransition;
        delete this.backwardSlashPathPriorHash;
        delete this.backwardSlashPathPriorQuery;
        delete this.backwardSlashPathPriorQueryTransition;
        delete this.backwardSlashPathPriorSlash;
        delete this.backwardSlashPathPriorSlashTransition;
        delete this.backwardSlashText;
        delete this.spacePath;
        delete this.spacePathTransition;
        delete this.spacePathPriorHash;
        delete this.spacePathPriorQuery;
        delete this.spacePathPriorQueryTransition;
        delete this.spacePathPriorSlash;
        delete this.spacePathPriorSlashTransition;
        delete this.spaceText;
        delete this.questionMarkPath;
        delete this.questionMarkPathTransition;
        delete this.questionMarkPathPriorHash;
        delete this.questionMarkPathPriorQuery;
        delete this.questionMarkPathPriorQueryTransition;
        delete this.questionMarkPathPriorSlash;
        delete this.questionMarkPathPriorSlashTransition;
        delete this.questionMarkText;
        delete this.numberSignPath;
        delete this.numberSignPathTransition;
        delete this.numberSignPathPriorHash;
        delete this.numberSignPathPriorQuery;
        delete this.numberSignPathPriorQueryTransition;
        delete this.numberSignPathPriorSlash;
        delete this.numberSignPathPriorSlashTransition;
        delete this.numberSignText;
        delete this.closingRoundBracketPath;
        delete this.closingRoundBracketPathTransition;
        delete this.closingRoundBracketPathPriorHash;
        delete this.closingRoundBracketPathPriorQuery;
        delete this.closingRoundBracketPathPriorQueryTransition;
        delete this.closingRoundBracketPathPriorSlash;
        delete this.closingRoundBracketPathPriorSlashTransition;
        delete this.closingRoundBracketText;
        delete this.nonTriggerCharacterPath;
        delete this.nonTriggerCharacterPathTransition;
        delete this.nonTriggerCharacterPathPriorHash;
        delete this.nonTriggerCharacterPathPriorQuery;
        delete this.nonTriggerCharacterPathPriorQueryTransition;
        delete this.nonTriggerCharacterPathPriorSlash;
        delete this.nonTriggerCharacterPathPriorSlashTransition;
        delete this.nonTriggerCharacterText;
    }
}
LinkContextRecognizer.TRIGGER_CHARACTERS = ["[", "]", "(", "/", "\\", " ", "?", "#", ")"];
exports.default = LinkContextRecognizer;
//# sourceMappingURL=LinkContextRecognizer.g.js.map