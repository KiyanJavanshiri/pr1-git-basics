# pr1-git-basics

## Installation

Install dependencies:

```bash
npm install
```

## Running the Project

### Compile TypeScript
if you add extra code and want to check it, first of all compile your code using command:
```bash
npm run compile 
```
### Start the Server
In a separate terminal:
```bash
npm run server 
```

## Available Endpoints
### GET /
Response:
```bash
Hello World!
```
### POST /product
Example request body:
```bash
{
  "name": "Phone",
  "price": 1000
}
```

Response:
```bash
{
  "success": true,
  "data": {
    "name": "Phone",
    "price": 1000
  }
}
```
## Project Structure
src/        → TypeScript source files  
dist/       → Compiled JavaScript files  
app.ts      → Application entry point  

## Author
<table width="100%" >
  <tr>
    <th>Name</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>Kiyan Javanshiri</td>
    <td>Fullstack Developer</td>
  </tr>
</table>