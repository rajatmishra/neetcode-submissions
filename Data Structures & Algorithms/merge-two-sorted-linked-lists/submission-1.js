/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummyNode = new ListNode(-1);
        let tail = dummyNode;
        let currentNode1 = list1;
        let currentNode2 = list2;
        while (currentNode1 != null && currentNode2 != null) {
            if (currentNode1.val < currentNode2.val) {
                tail.next = currentNode1;
                currentNode1 = currentNode1.next;
            } else {
                tail.next = currentNode2;
                currentNode2 = currentNode2.next;
            }
            tail = tail.next;
        }
        if (currentNode1 != null) {
            tail.next = currentNode1;
        } else {
            tail.next = currentNode2;
        }
        return dummyNode.next;
    }
}
