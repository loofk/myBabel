module.exports = function ({ types: t }) {
  return {
    visitor: {
      VariableDeclaration (path) {
        const node = path.node

        const newDeclarationArray = ['let', 'const']

        if (newDeclarationArray.includes(node.kind)) {
          node.kind = 'var'
        }
      }
    }
  }
}