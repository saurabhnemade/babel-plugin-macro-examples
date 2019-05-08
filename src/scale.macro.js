const createMacro = require("babel-plugin-macros").createMacro;

const scaleMacro = createMacro(({references, state, babel}) => {
    references.default.forEach(referencePath => {
        const [firstArgumentPath] = referencePath.parentPath.get('arguments');
        const intValue = firstArgumentPath.node.value;
        const finalValue = `${intValue * (100 / 1920)}vw`;
        const scaledFunctionCallPath = firstArgumentPath.parentPath;
        const scaledStringLiteralNode = babel.types.stringLiteral(finalValue);
        scaledFunctionCallPath.replaceWith(scaledStringLiteralNode);
    })
});

module.exports = createMacro(scaleMacro);