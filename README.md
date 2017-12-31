# padding-js

pad a string to be a certain length

## Install

```
npm install https://github.com/isaaguilar/padding-js.git
```


## Usage

```
const padding = require("padding-js")

// padding( LENGTH, STRING, CHARACTER )

```


## Example

```
const padding = require("./padding")

let s = "too short"
console.log(s.length)
// 9

s = padding(16, s)
console.log(s.length)
// 16
```

