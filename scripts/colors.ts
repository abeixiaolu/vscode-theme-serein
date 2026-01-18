export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

// [dark, light]
export const SereinThemes = {
  primary: ['#8BB6C2', '#188ca9'],

  foreground: ['#dbd7caee', '#393a34'],
  activeForeground: ['#bfbaaa', '#4e4f47'],
  secondaryForeground: ['#dedcd590', '#393a3490'],

  ignored: ['#dedcd550', '#393a3450'],
  faded: ['#dedcd510', '#393a3410'],
  border: ['#191919', '#f0f0f0'],

  background: ['#0F0F0F', '#ffffff'],
  activeBackground: ['#1E1E1E', '#f7f7f7'],
  selectionBackground: ['#eeeeee18', '#22222218'],
  selectionBackgroundActive: ['#eeeeee18', '#22222218'],
  selectionBackgroundInActive: ['#eeeeee10', '#22222210'],

  // soft overrides
  softBackground: ['#222', '#FFFAF3'],
  softActiveBackground: ['#292929', '#F4EEE8'],
  softBorder: ['#252525', '#F4EEE8'],

  comment: ['#758575dd', '#a0ada0'],
  string: ['#D88385', '#bd3f3f'],
  variable: ['#C69B8A', '#ab6b18'],
  keyword: ['#80C19A', '#2b9815'],
  number: ['#4C9A91', '#2f798a'],
  boolean: ['#80C19A', '#2b9815'],
  operator: ['#cb7676', '#ab5959'],
  function: ['#8BB6C2', '#188ca9'],
  constant: ['#c8b37a', '#b69c18'],
  class: ['#8190ca', '#4655c8'],
  interface: ['#5d99a9', '#2e808f'],
  type: ['#54B6B5', '#1b91b8'],
  builtin: ['#cb7676', '#ab5959'],
  property: ['#8BB6C2', '#188ca9'],
  namespace: ['#db889a', '#b05a78'],
  punctuation: ['#666666', '#999999'],
  decorator: ['#bd8f8f', '#bd8f8f'],
  regex: ['#c4704f', '#ab5e3f'],

  // colors
  green: ['#80C19A', '#2b9815'],
  cyan: ['#5eaab5', '#2993a3'],
  blue: ['#6394bf', '#296aa3'],
  red: ['#cb7676', '#ab5959'],
  orange: ['#d4976c', '#a65e2b'],
  yellow: ['#e6cc77', '#bda437'],
  magenta: ['#d9739f', '#a13865'],
} satisfies Record<string, [string, string] | string>
