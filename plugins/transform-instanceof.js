module.exports = function ({ types: t }) {
  return {
    visitor: {
      BinaryExpression (path) {
        const node = path.node

        if (node.operator === 'instanceof') {
          // 找到已经实现好的instanceof函数表达式
          const helper = this.addHelper("instanceof")
          // 如果上一级也是instanceof，不做处理
          const isUnderHelper = path.findParent(path => {
            return path.isVariableDeclarator() && path.node.id === helper || path.isFunctionDeclaration() && path.node.id && path.node.id.name === helper.name
          })
          // 替换
          if(isUnderHelper) {
            return
          } else {
            path.replaceWith(t.callExpression(helper, [node.left, node.right]))
          }
        }
      }
    }
  }
}