# Start NPM project

```
npm init
```

# Intsall typscript in npm project
```
npm install typescript
```
    this will add `typescript` on dependency
```
tsc --version
``` 
    (to check) (not work in powershell, use CMD)

# Build
```
tsc index.ts
```
    you can see index.js

## Build configuration

`tsconfig.json` is configuration file for building js file from ts

```
```

# Run

```
node index.js
```

# Publish as a library

Like python package, a npm project does not require extra build/packaging process except compiling it to entry point. (this project, `index.js`)

## use this library in other project.

### create npm link of this project

```
cd <root-of-this-project>
npm link
```

### use as library

```
cd /path/to/another/project
npm link obsidian-plugin-tester
```
- The name is defined in **package.json**

## unlink

### in target project

```
cd /path/to/another/project
npm unlink obsidian-plugin-tester
```

### global removal
```
cd <root-of-this-project>
npm unlink
```

## Alternative option 
**npm pack** and install this library from tgz file.

# Build with tsconfig.json

check **package.json**'s scripts - build and **tsconfig.json**.

