/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];

    const lot = (root, level) => {
        if(!root) return;

        if(result[level]) result[level].push(root.val)
        else result[level] = [root.val]

        lot(root.left, level + 1)
        lot(root.right, level+1)
    }
    lot(root, 0);

    return result.map((b, i) => (i % 2) ? b.reverse() : b);
};