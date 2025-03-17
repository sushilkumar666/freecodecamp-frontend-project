import './App.css'

import { useState } from "react";
import { marked } from "marked";

const defaultMarkdown = `# Markdown Previewer

## This is a sub-heading...

**Bold Text**  
_Italic Text_  
[Link](https://freecodecamp.org)  

- List Item 1  
- List Item 2  

\`\`\`js
// Code Block
const greet = () => console.log("Hello, World!");
\`\`\`

> Blockquote Example
`;

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(defaultMarkdown);

    return (
        <div className="flex flex-col bg-black h-screen p-6 bg-gray-900 text-white">
            <textarea
                className="w-full h-1/3 p-4 text-white border-2 border-gray-600 rounded-md"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <div
                className="w-full h-2/3 p-4 mt-4 bg-gray-800 border-2 border-gray-600 rounded-md overflow-auto"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
        </div>
    );
};

export default MarkdownPreviewer;
