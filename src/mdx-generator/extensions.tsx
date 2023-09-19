import { marked } from "marked";
import lowerCase from "lodash/lowerCase";

type Extension =
  | marked.TokenizerExtension
  | marked.RendererExtension
  | (marked.TokenizerExtension & marked.RendererExtension);

const startRegx = /\+{2}[^+\n]+/;
const tagRegx = /\+{2}([^+\n]+)/;
const contentRegx = /\+{2}[^+\n]+([^{]*?)\+{2}/;
const attrRegx = /:(\w+)\s+([^:\n$]+)/gm;
export const CWPBlock: Extension = {
  name: "cwp",
  level: "block",
  start(src) {
    return src.match(startRegx)?.index;
  },
  tokenizer(src, tokens): marked.Tokens.Generic | void {
    const rule = /^\s*\+{2}[^+\n]+([^{]*?)\+{2}/gm;
    const match = rule.exec(src);

    if (!match) {
      return;
    }

    const raw = match[0];
    const attrs = Array.from(raw.matchAll(attrRegx)).map((m) => m.slice(1, 3));
    const withoutAttr = raw.replace(attrRegx, "");
    const text = withoutAttr.match(contentRegx)?.pop()?.trim() || "";
    const tagName = match[0].match(tagRegx)?.pop();

    const token: any = {
      type: "cwp",
      raw,
      tagName,
      text,
      attrs,
      tokens: [],
      id: tokens.length,
    };

    this.lexer.blockTokens(token.text, token.tokens);
    return token;
  },

  renderer(token: any) {
    if (token.tagName) {
      const componentName = lowerCase(token.tagName);
      return `<${componentName} id="${token.id}" ${token.attrs
        .map((attr: string[]) => `${attr[0]}="${attr[1]}"`)
        .join(" ")}>\n${this.parser.parse(token.tokens)}</${componentName}>\n`;
    } else {
      return "";
    }
  },
};
