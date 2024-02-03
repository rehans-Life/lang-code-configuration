import langsData, { langs, Types as TypesObj } from "./data";

export type Types =
  | "Boolean"
  | "String"
  | "Integer"
  | "Integer[]"
  | "String[]"
  | "Integer[][]"
  | "String[][]";

export type Param = {
  name: string;
  type: Types;
};

export function getTypes(lang: langs): TypesObj {
  return langsData[lang];
}

export function getDefaultCodeConfiguration(
  lang: langs,
  funcName: string,
  returnType: Types,
  params: Param[]
) {
  let paramsString;
  const types = langsData[lang];
  switch (lang) {
    case "javascript":
      paramsString = params.map(({ name }) => name.toLowerCase()).join(", ");
      return `function ${funcName}(${paramsString}){\n\t\n}`;
    case "python":
      paramsString = params
        .map(({ name, type }) => `${name.toLowerCase()}: ${types[type]}`)
        .join(", ");
      return `class Solution:\n\tdef ${funcName}(self, ${paramsString}) -> ${types[returnType]}:\n\t\t`;
    case "dart":
      paramsString = params
        .map(({ name, type }) => `${types[type]} ${name.toLowerCase()}`)
        .join(", ");
      return `class Solution {\n\t${types[returnType]} ${funcName}(${paramsString}) {\n\t\t\n\t}\n}`;
    case "typescript":
      paramsString = params
        .map(({ name, type }) => `${name.toLowerCase()}: ${types[type]}`)
        .join(", ");
      return `function ${funcName}(${paramsString}): ${types[returnType]} {\n\t\n}`;
    case "java":
      paramsString = params
        .map(({ name, type }) => `${types[type]} ${name.toLowerCase()}`)
        .join(", ");
      return `class Solution {\n\tpublic ${types[returnType]} ${funcName}(${paramsString}) {\n\t\t\n\t}\n}`;
    case "cpp":
      paramsString = params
        .map(({ name, type }) => `${types[type]} ${name.toLowerCase()}`)
        .join(", ");
      return `class Solution {\npublic:\n\t${types[returnType]} ${funcName}(${paramsString}) {\n\t\t\n\t}\n};`;
    case "csharp":
      paramsString = params
        .map(({ name, type }) => `${types[type]} ${name.toLowerCase()}`)
        .join(", ");
      return `public class Solution {\n\tpublic ${types[returnType]} ${funcName}(${paramsString}) {\n\t\t\n\t}\n};`;
    default:
      return "";
  }
}
