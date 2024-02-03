export interface Types {
  Boolean: String;
  String: String;
  Integer: String;
  "Integer[]": String;
  "String[]": String;
  "Integer[][]": String;
  "String[][]": String;
}

export type langs =
  | "javascript"
  | "python"
  | "typescript"
  | "dart"
  | "java"
  | "cpp"
  | "csharp";

const langsData: { [key in langs]: Types } = {
  javascript: {
    Boolean: "",
    String: "",
    Integer: "",
    "Integer[]": "",
    "String[]": "",
    "Integer[][]": "",
    "String[][]": "",
  },
  python: {
    Boolean: "bool",
    String: "str",
    Integer: "int",
    "Integer[]": "List[int]",
    "String[]": "List[str]",
    "Integer[][]": "List[List[int]]",
    "String[][]": "List[List[str]]",
  },
  dart: {
    Boolean: "bool",
    String: "String",
    Integer: "int",
    "Integer[]": "List<int>",
    "String[]": "List<String>",
    "Integer[][]": "List<List<int>>",
    "String[][]": "List<List<String>>",
  },
  typescript: {
    Boolean: "boolean",
    String: "string",
    Integer: "number",
    "Integer[]": "number[]",
    "String[]": "string[]",
    "Integer[][]": "number[][]",
    "String[][]": "string[][]",
  },
  java: {
    Boolean: "boolean",
    String: "String",
    Integer: "int",
    "Integer[]": "int[]",
    "String[]": "String[]",
    "Integer[][]": "int[][]",
    "String[][]": "String[][]",
  },
  cpp: {
    Boolean: "bool",
    String: "string",
    Integer: "int",
    "Integer[]": "vector<int>&",
    "String[]": "vector<string>&",
    "Integer[][]": "vector<vector<int>>&",
    "String[][]": "vector<vector<string>>&",
  },
  csharp: {
    Boolean: "bool",
    String: "string",
    Integer: "int",
    "Integer[]": "int[]",
    "String[]": "string[]",
    "Integer[][]": "int[][]",
    "String[][]": "string[][]",
  },
};

export default langsData;
