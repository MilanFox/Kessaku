// @ts-expect-error - circular reference intended, not accidental
export type TreeNode = Record<string, TreeNode> | string;
